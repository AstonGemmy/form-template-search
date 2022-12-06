import { fireEvent, screen, waitFor, act } from '@testing-library/react';
import { mockAPIResponse, getTemplatesResponse } from './tests/mock-axios';
import { renderWithProviders } from './tests/redux-wrapper';
import store from './store'
import { getTemplates } from './slices/template';

import App from './App';

const categories = ['All', 'Health', 'Education', 'E-commerce']

describe("Fetch template list from API", () => {
  beforeAll(() => {
    mockAPIResponse();
  });

  it("Should successfully return a list of form templates", async () => {
    const apiResponse = await store.dispatch(getTemplates());
    const templates = apiResponse.payload.templates;

    expect(apiResponse.type).toBe("get/templates/fulfilled");
    expect(templates).toEqual(getTemplatesResponse);

    const state = store.getState().template;
    expect(state.templates).toEqual(templates);
  })

  it("Should set active category templates to equal returned templates", async () => {
    const apiResponse = await store.dispatch(getTemplates());
    const templates = apiResponse.payload.templates;

    expect(apiResponse.type).toBe("get/templates/fulfilled");

    const state = store.getState().template;
    expect(state.activeCategory.templates).toEqual(templates);
  })

  it("Should set active page templates to only 12 templates", async () => {
    const apiResponse = await store.dispatch(getTemplates());

    expect(apiResponse.type).toBe("get/templates/fulfilled");

    const state = store.getState().template;
    expect(state.activeCategory.activePageTemplates.length).toEqual(12);
  })
})

describe("Update UI when active category changes", () => {
  it('Should display active category name on template card header', async () => {
    const randomCategory = categories[Math.floor(Math.random() * categories.length)];

    renderWithProviders(<App />)
    
    const categoryFilter = screen.getByTestId('category-filter')
    const templateCardHeader = screen.getByTestId('template-card-header')
  
    act(() => {
      fireEvent.change(categoryFilter, {
        target: {
          value: randomCategory
        }
      })
    })
    
    await waitFor(() => {
      const expectedResult = `${randomCategory} Templates`
      expect(templateCardHeader).toHaveTextContent(expectedResult);
    })
  })

  it('Should set active category templates to only those that match active category value', async () => {
    const randomCategory = categories[Math.floor(Math.random() * categories.length)];
  
    renderWithProviders(<App />)

    const categoryFilter = screen.getByTestId('category-filter')
    
    act(() => {
      fireEvent.change(categoryFilter, {
        target: {
          value: randomCategory
        }
      })
    })
    
    await waitFor(() => {
      const state = store.getState().template
      const activeCategoryTemplates = state.templates.filter(template => {
        return template.category.includes(randomCategory)
      })
      expect(state.activeCategory.templates).toEqual(activeCategoryTemplates);
    })
  })

  it('Should reset all other filters and search input fields', async () => {
    const randomCategory = categories[Math.floor(Math.random() * categories.length)];

    renderWithProviders(<App />)

    const categoryFilter = screen.getByTestId('category-filter')
    const sortName = screen.getByTestId('sort-name')
    const sortDate = screen.getByTestId('sort-date')
    const search = screen.getByTestId('search')
    
    fireEvent.change(categoryFilter, {
      target: {
        value: randomCategory
      }
    })

    await waitFor(() => {
      expect(sortName.value).toBe('default');
      expect(sortDate.value).toBe('default');
      expect(search.value).toBe('');
    })
  });
})