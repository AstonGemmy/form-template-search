import { render } from '@testing-library/react'
import { Provider } from 'react-redux'
import store from '../store'

export function renderWithProviders(ui) {
  function Wrapper({ children }) {
    return <Provider store={store}>{children}</Provider>
  }

  // Return an object with the store and all of RTL's query functions
  return { store, ...render(ui, { wrapper: Wrapper }) }
}