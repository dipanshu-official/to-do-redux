import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import '../src/app/Store.jsx'
import { Provider } from 'react-redux'
import { store } from '../src/app/Store.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Provider store={store}>

      <App />
    </Provider>
  </StrictMode>,
)
