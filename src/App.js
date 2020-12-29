import React, { useEffect } from "react";
import "./App.css";
import Banner from "./components/Layout/Banner";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { useDispatch } from "react-redux";
import Posts from "./components/Posts/Posts";
import Form from "./components/Form/Form";
import MoreDetails from "./components/MoreDetails/MoreDetails";
import Footer from "./components/Layout/Footer";

import { getPosts } from "./actions/posts";

const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getPosts());
  }, [dispatch]);
  return (
    <Router>
      <Route path="/" exact component={Banner} />
      <Route path="/" exact component={MoreDetails} />
      <Route path="/" exact component={Posts} />
      <Route path="/" exact component={Footer} />

      <Route path="/add-post" component={Form} />
    </Router>
  );
};

export default App;
