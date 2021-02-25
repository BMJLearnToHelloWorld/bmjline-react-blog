import React from "react";
import "./App.css";
import "./styles/blog.css"
import { BrowserRouter, Route, Switch } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import Header from "./components/header";
import Footer from "./components/footer";
import Home from "./pages/home";
import Blog from "./pages/blog";
import About from "./pages/about";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/blog/:id" component={Blog} />
        <Route exact path="/about" component={About} />
      </Switch>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
