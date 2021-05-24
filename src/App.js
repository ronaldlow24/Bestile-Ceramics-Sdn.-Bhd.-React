import "./App.css";
import Header from "./Header";
import Footer from "./Footer";
import Router from "./Router";
import { BrowserRouter } from "react-router-dom";
import ScrollToTop from "react-scroll-to-top";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Router />
      <Footer />
      <ScrollToTop smooth style={{ zIndex: "9999" }} />
    </BrowserRouter>
  );
}

export default App;
