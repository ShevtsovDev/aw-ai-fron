import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import reportWebVitals from './reportWebVitals'
import { BrowserRouter, HashRouter } from 'react-router-dom'
import { Provider } from 'react-redux'
import { store } from 'src/store/store'
import './index.scss'
import './assets/variables/variables.css'
import 'react-quill/dist/quill.snow.css'
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from 'react-toastify'
import { StyleProvider } from '@ant-design/cssinjs';
import { ConfigProvider, theme, ThemeConfig } from 'antd'
import { Theme } from 'antd/es/config-provider/context'

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement,
)

const _theme: ThemeConfig = {
  algorithm: theme.darkAlgorithm,
}

root.render(
  <React.StrictMode>
    <ConfigProvider theme={_theme}>
      <StyleProvider hashPriority='high'>
        <Provider store={store}>
          <BrowserRouter>
            <App />
          </BrowserRouter>
        </Provider>
      </StyleProvider>
    </ConfigProvider>
  </React.StrictMode>,
)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals()
