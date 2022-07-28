import React, { memo } from 'react'
import routes from './router'
import store from './store'
import { Provider } from 'react-redux'
import { renderRoutes } from 'react-router-config'
import { HashRouter } from 'react-router-dom'

import Header from './components/header'
import Footer from './components/footer'

const App = memo(() => {
  return (
    <Provider store={store}>
      <HashRouter>
        <Header></Header>
        <div>{renderRoutes(routes)}</div>
        <Footer></Footer>
      </HashRouter>
    </Provider>
  )
})

export default App