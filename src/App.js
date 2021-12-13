import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter, Route , Routes} from "react-router-dom";
import Header from './common/header';
import Home from './pages/home';
import Detail from './pages/detail';
import store from './store';

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <div>
          <Header />
          <BrowserRouter>
              <Routes>
                <Route path="/" exact element={<Home/>}></Route>
                <Route path="/detail" exact element={<Detail/>}></Route>
              </Routes>
          </BrowserRouter>
        </div>

      </Provider>
    );
  }
}

export default App;

