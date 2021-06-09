import React from "react";
import { Provider } from "react-redux";
import store from "./Store";
import Dashboard from "./Dashboard";
const App=()=>{
  return(
    <Provider store={store}>
    <Dashboard/>
   </Provider>
  )
}
export default App;