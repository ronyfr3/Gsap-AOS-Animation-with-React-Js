import React from 'react'
import {Route} from 'react-router-dom'
import {routes} from './Pages/Routes'
// import Header from './Components/Header'

function App() {
  return (
    <div className="App">
    {/* <Header/> */}
      {
        routes.map(({path,Component,name})=>(
          <Route
            key={name}
            path={path}
            exact
          >
            <div className="pages">
            <Component/>
            </div>
          </Route>
        ))
      }
    </div>
  )
}

export default App
