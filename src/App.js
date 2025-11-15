import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";

import Homepage3Dark from "../src/pages/Homepage3Dark";
import Bloglist from "./pages/Bloglist";
import BlogDetails from "./pages/BlogDetails";
import "./App.scss";
import Header3 from "./components/layouts/Header3";

<script src="/src/inspect.js"></script>

function App() {
    return (
        <BrowserRouter>
            <Header3></Header3>

            <Switch>
                <Route path="/" exact>
                    <Homepage3Dark />
                </Route>

                <Route path="/blogs" component={Bloglist} exact />
                <Route
                    path="/blogs/blog-details/:id/:title"
                    component={BlogDetails}
                />
            </Switch>
        </BrowserRouter>
    );
    
}

export default App;
