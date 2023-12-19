import React from "react";
import { render } from "react-dom";
import App from "./components/app";
import conductTransaction from "./components/conductTransaction";
import Transactionpool from "./components/transactionpool";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import "./style.css";

return(
  <BrowserRouter>
    <Switch>
      <Route path="/transact" component={conductTransaction} />
      <Route path="/transaction-pool" component={Transactionpool} />
      <Route path="/home" component={App} />
    </Switch>
  </BrowserRouter>,
  document.getElementById("roo")
);
