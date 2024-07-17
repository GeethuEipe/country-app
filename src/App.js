import 'bootstrap/dist/css/bootstrap.min.css'

import { Route, BrowserRouter as Router, Routes } from 'react-router-dom'

import Home from './components/Home/Home'
import Login from './components/Login/Login'
import { Provider } from 'react-redux'
import React from 'react'
import { store } from './store'

const App = () => {
  return (
    <Provider store={store}>
      <Router>
        <Routes>
          <Route path="/home" element={<Home />} />
          <Route path="/" element={<Login />} />
        </Routes>
      </Router>
    </Provider>
  )
}

export default App
