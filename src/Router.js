import React from "react";
import { Switch, Route } from "react-router-dom";

// Page
import Contact from "./Page/Contact";
import Project from "./Page/Project";
import Home from "./Page/Home";
import Work from "./Page/Work";
import Product from "./Page/Product";

const Router = () => {
  return (
    <>
      <Switch>
        <Route path="/" exact>
          <Home />
        </Route>
        <Route path="/work" exact>
          <Work />
        </Route>

        <Route path="/contact" exact>
          <Contact />
        </Route>

        <Route path="/product" exact>
          <Product />
        </Route>

        <Route path="/project/:albumID" exact>
          <Project />
        </Route>

        <Route path="*" render={() => <div>404</div>} />
      </Switch>
    </>
  );
};

export default Router;
