import "./App.css";
import Header from "./Header";
import Footer from "./Footer";
import Router from "./Router";
import { BrowserRouter } from "react-router-dom";
import ScrollToTop from "react-scroll-to-top";
import { useEffect } from "react";
import { useLocation } from "react-router-dom";

function ScrollToTopWhenNavigate() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Router />
      <Footer />
      <ScrollToTopWhenNavigate />
      <ScrollToTop smooth style={{ zIndex: "9999" }} />
    </BrowserRouter>
  );
}

export default App;
