import './App.css';
import { BrowserRouter as Router, Route, Routes, Redirect } from "react-router-dom";
import React from 'react';
import HomePage from './pages/HomePage';
import { Provider } from 'react-redux'


const reload = () => window.location.reload();
function App() {
  return (
    // <Provider >
      <div className="App">
        <Router>
          {/* <ScrollToTop> */}
            <Routes>
              <Route path="/" element={<HomePage/>}></Route>
              {/* <Route exact path="/Places/:type" component={PlaceList}></Route> */}

            </Routes>

          {/* </ScrollToTop> */}
        </Router>
      </div>
    // </Provider>
    
  );
}

export default App;
