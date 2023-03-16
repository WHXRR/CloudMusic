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
import ProfileSidebar from './pages/profile/c-pages/sidebar'
console.log('test');
console.log('test111');
const App = memo(() => {
  return (
    <Provider store={store}>
      <BackTop />
      <HashRouter>
        <Header></Header>
        <div>{renderRoutes(routes)}</div>
        <Footer></Footer>
        <Player />
        <ProfileSidebar />
      </HashRouter>
    </Provider>
  )
})

export default App