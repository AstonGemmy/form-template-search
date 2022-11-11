import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import { errorProcessor } from '../utils/errorProcessor'
import { prepareFeedback } from './feedback'

import TemplateService from '../services/template'

export const getTemplates = createAsyncThunk(
  'get/templates',
  async (query, thunkAPI) => {
    try {
      const { data } = await TemplateService.getTemplates()
      thunkAPI.dispatch(prepareFeedback('Operation successful!', 'success', 'get-templates'))
      return { templates: data }
    } catch (error) {
      const { message } = errorProcessor(error)
      thunkAPI.dispatch(prepareFeedback(message, 'error', 'get-templates'))
      return thunkAPI.rejectWithValue();
    }
  }
)

const resetActiveCategoryTemplates = (state) => {
  const activeCategoryName = state.activeCategory.name

  if (activeCategoryName.toLowerCase() === 'all') {
    state.activeCategory.templates = state.templates
  } else {
    state.activeCategory.templates = state.templates.filter(template => {
      return template.category.includes(activeCategoryName)
    })
  }
}

const paginateActiveCategoryTemplates = (state, page) => {
  const start = ((page - 1) * state.activeCategory.templatesPerPage)
  const end = (page * state.activeCategory.templatesPerPage)
  state.activeCategory.activePageTemplates = state.activeCategory.templates.slice(start, end)
}

const searchTemplates = (state, searchTerm) => {
  const activeCategoryName = state.activeCategory.name
  const search = (template) => {
    return template.name.toLowerCase().includes(searchTerm.toLowerCase())
  }

  if (activeCategoryName.toLowerCase() === 'all') {
    state.activeCategory.templates = state.templates.filter(search)
  } else {
    const activeCatagoryTemplates = state.templates.filter(template => {
      return template.category.includes(activeCategoryName)
    })
    state.activeCategory.templates = activeCatagoryTemplates.filter(search)
  }
}

const sortByDateAscending = (a, b) => a.created.localeCompare(b.created)
const sortByNameAscending = (a, b) => a.name.toLowerCase().localeCompare(b.name.toLowerCase())


const initialState = {
  templates: [],
  isLoading: false,
  activeCategory: {
    name: 'All',
    templates: [],
    templatesPerPage: 12,
    activePageTemplates: []
  }
}

const templateSlice = createSlice({
  name: 'template',
  initialState,
  reducers: {
    searchActiveCategoryTemplates: (state, action) => {
      const searchTerm = action.payload.searchTerm
      searchTemplates(state, searchTerm)
      paginateActiveCategoryTemplates(state, 1)
    },
    sortActiveCategoryTemplatesByName: (state, action) => {
      const searchTerm = action.payload.searchTerm
      const order = action.payload.order
      
      if (searchTerm) searchTemplates(state, searchTerm)

      if (order.toLowerCase() === 'ascending') {
        state.activeCategory.templates.sort(sortByNameAscending)
      } else if (order.toLowerCase() === 'descending') {
        state.activeCategory.templates.sort(sortByNameAscending).reverse()
      } else {
        resetActiveCategoryTemplates(state)
      }

      paginateActiveCategoryTemplates(state, 1)
    },
    sortActiveCategoryTemplatesByDate: (state, action) => {
      const searchTerm = action.payload.searchTerm
      const order = action.payload.order
      
      if (searchTerm) searchTemplates(state, searchTerm)

      if (order.toLowerCase() === 'ascending') {
        state.activeCategory.templates.sort(sortByDateAscending)
      } else if (order.toLowerCase() === 'descending') {
        state.activeCategory.templates.sort(sortByDateAscending).reverse()
      } else {
        resetActiveCategoryTemplates(state)
      }

      paginateActiveCategoryTemplates(state, 1)
    },
    setActiveCategoryTemplatesByName: (state, action) => {
      state.activeCategory.name = action.payload.name
      resetActiveCategoryTemplates(state)
      paginateActiveCategoryTemplates(state, 1)
    },
    setActiveCategoryPageTemplates: (state, action) => {
      const page = action.payload.page
      paginateActiveCategoryTemplates(state, page)
    }
  },
  extraReducers: (builder) => {
    builder
      .addCase(getTemplates.pending, (state, action) => { state.isLoading = true })
      .addCase(getTemplates.rejected, (state, action) => { state.isLoading = false })
      .addCase(getTemplates.fulfilled, (state, action) => {
        state.isLoading = false
        state.templates = action.payload.templates
        resetActiveCategoryTemplates(state)
        paginateActiveCategoryTemplates(state, 1)
      })
  }
})

const { reducer, actions } = templateSlice;
export const {
  setActiveCategoryPageTemplates,
  searchActiveCategoryTemplates,
  setActiveCategoryTemplatesByName,
  sortActiveCategoryTemplatesByName,
  sortActiveCategoryTemplatesByDate
} = actions
export default reducer;