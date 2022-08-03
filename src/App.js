import React, { memo } from 'react'
import routes from './router'
import store from './store'
import { Provider } from 'react-redux'
import { renderRoutes } from 'react-router-config'
import { HashRouter } from 'react-router-dom'

import { BackTop } from 'antd';

import Header from './components/header'
import Footer from './components/footer'
import Player from './components/player'

const App = memo(() => {
  return (
    <Provider store={store}>
      <BackTop />
      <HashRouter>
        <Header></Header>
        <div>{renderRoutes(routes)}</div>
        <Footer></Footer>
        <Player />
      </HashRouter>
    </Provider>
  )
})

export default App