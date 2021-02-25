import React from "react";
import "./App.css";
import Banner from "./components/Layout/Banner";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Posts from "./components/Posts/Posts";
import Form from "./components/Form/Form";
import MoreDetails from "./components/MoreDetails/MoreDetails";
import Footer from "./components/Layout/Footer";
import SinglePost from "./components/Posts/Post/SinglePost";

import Navbar from "./components/Layout/Navbar";

const App = () => {
  return (
    <Router>
      <Route path="/" component={Navbar} />
      <Route path="/" exact component={Banner} />
      <Route path="/" exact component={MoreDetails} />
      <Route path="/" exact component={Posts} />
      <Route path="/" exact component={Footer} />
      <Route path="/posts/:id" exact component={SinglePost} />
      <Route path="/add-movie" component={Form} />
    </Router>
  );
};

export default App;
