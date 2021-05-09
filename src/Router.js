import React, { Suspense, lazy } from "react";
import { Switch, Route } from "react-router-dom";
import Backdrop from "@material-ui/core/Backdrop";
import CircularProgress from "@material-ui/core/CircularProgress";
import { makeStyles } from "@material-ui/core/styles";

// Components
const Home = lazy(() => import("./Component/Home"));
const Work = lazy(() => import("./Component/Work"));
const Contact = lazy(() => import("./Component/Contact"));
const Project = lazy(() => import("./Component/Project"));

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
          <Route path="/project/:albumID" component={Project} exact />
        </Switch>
      </Suspense>
    </>
  );
};

export default Router;
