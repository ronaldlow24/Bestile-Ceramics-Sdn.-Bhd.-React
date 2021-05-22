import React, { Suspense, lazy } from "react";
import { Switch, Route } from "react-router-dom";
import Backdrop from "@material-ui/core/Backdrop";
import CircularProgress from "@material-ui/core/CircularProgress";
import { makeStyles } from "@material-ui/core/styles";

// Page
const Home = lazy(() => import("./Page/Home"));
const Work = lazy(() => import("./Page/Work"));
const Contact = lazy(() => import("./Page/Contact"));
const Project = lazy(() => import("./Page/Project"));
const Product = lazy(() => import("./Page/Product"));

const useStyles = makeStyles((theme) => ({
  backdrop: {
    zIndex: theme.zIndex.drawer + 1,
    color: "#fff",
  },
}));

const Router = () => {
  const classes = useStyles();

  return (
    <>
      <Suspense
        fallback={
          <Backdrop className={classes.backdrop} open={true}>
            <CircularProgress color="inherit" />
          </Backdrop>
        }
      >
        <Switch>
          <Route path="/" component={Home} exact />
          <Route path="/work" component={Work} exact />
          <Route path="/contact" component={Contact} exact />
          <Route path="/product" component={Product} exact />
          <Route path="/project/:albumID" component={Project} exact />
          <Route path="*" render={() => <div>404</div>} />
        </Switch>
      </Suspense>
    </>
  );
};

export default Router;
