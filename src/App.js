import React, { Component } from 'react';
import './App.css';
import Menu from './components/Menu/Menu';

import routes from './routes';
import {Switch,Route,BrowserRouter as Router} from 'react-router-dom';

class App extends Component {
  render() {
   
    return (
      <Router>
      <div>
        <Menu />
        <div className="container">
          <div className="row">
            {/* <div className="col-xs-8 col-sm-8 col-md-8 col-lg-8 mm-15">
              <button type="button" className="btn btn-large btn-block btn-info mb-10">
                Thêm Sản Phẩm
                </button>
              <ProductsList />
            </div> */}
            {this.showContentMenus(routes)}
          </div>
        </div>
      </div>
      </Router>
    );
  }
  showContentMenus=(routes)=>{
    var result=null;
    if(routes.length>0){
      
      result=routes.map((route,index)=>{
        console.log(route.main);
         return( <Route
            key={index}
            path={route.path}
            exact={route.exact}
            component={route.main}
           
          />
         )
      });
    }
    return <Switch>{result}</Switch>;
  }
}

export default App;
