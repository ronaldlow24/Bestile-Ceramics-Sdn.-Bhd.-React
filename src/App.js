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

      <ScrollToTop smooth />
    </BrowserRouter>
  );
}

export default App;
