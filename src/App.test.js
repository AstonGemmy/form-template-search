import { fireEvent, render, screen, waitFor } from '@testing-library/react';
import { Provider } from 'react-redux';
import store from './store'
import Filters from './components/Filters';
import App from './App';

const categories = ['All', 'Health', 'Education', 'E-commerce']

test('active category is displayed as header of template card', async () => {
  const randomCategory = categories[Math.floor(Math.random() * categories.length)];

  render(
    <Provider store={store}>
      <App />
    </Provider>
  );

  const categoryFilter = screen.getByTestId('category-filter')
  const templateCardHeader = screen.getByTestId('template-card-header')

  fireEvent.change(categoryFilter, {
    target: {
      value: randomCategory
    }
  })
  
  await waitFor(() => {
    const expectedResult = `${randomCategory} Templates`
    expect(templateCardHeader).toHaveTextContent(expectedResult);
  })
});

test('all other filters and search are cleared when category changes', async () => {
  const randomCategory = categories[Math.floor(Math.random() * categories.length)];

  render(
    <Provider store={store}>
      <Filters />
    </Provider>
  );

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