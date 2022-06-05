import React, { Suspense } from "react";
import { HashRouter as Router, Routes, Route } from "react-router-dom";
import { Footer, Navbar, NotFound, Spinner } from "./components";
import ScrollToTop from "./utils";
import CssBaseline from "@material-ui/core/CssBaseline";
import GlobalStyle from "./GlobalStyle";
const Home = React.lazy(() => import("./pages/Home/Home"));
const Blog = React.lazy(() => import("./pages/Blog/Blog"));
const Products = React.lazy(() => import("./pages/Products/Products"));
const Stores = React.lazy(() => import("./pages/Stores/Stores"));
const Feedback = React.lazy(() => import("./pages/Feedback/Feedback"));
const Membership = React.lazy(() => import("./pages/Membership/Membership"));
const About = React.lazy(() => import("./pages/About/About"));
const Loship = React.lazy(() => import("./pages/Loship"));
const Now = React.lazy(() => import("./pages/Now"));
const Grab = React.lazy(() => import("./pages/Grab"));
const SinglePost = React.lazy(() =>
  import("./containers/SinglePost/SinglePost")
);
const SingleProduct = React.lazy(() =>
  import("./containers/SingleProduct/SingleProduct")
);

function App() {
  return (
    <Suspense fallback={<Spinner />}>
      <Router>
        <CssBaseline />
        <GlobalStyle />
        <ScrollToTop />
        <Navbar />
        <Routes>
          <Route path="/" exact element={<Home />} />
          <Route path="/blog" exact element={<Blog />} />
          <Route path="/blog/:slug" exact element={<SinglePost />} />
          <Route path="/products" exact element={<Products />} />
          <Route path="/products/:slug" exact element={<SingleProduct />} />
          <Route path="/stores" exact element={<Stores />} />
          <Route path="/feedback" exact element={<Feedback />} />
          <Route path="/membership" exact element={<Membership />} />
          <Route path="/about" exact element={<About />} />
          <Route path="/now" exact element={<Now />} />
          <Route path="/grab" exact element={<Grab />} />
          <Route path="/loship" exact element={<Loship />} />
          <Route element={<NotFound />} />
        </Routes>
        <Footer />
      </Router>
    </Suspense>
  );
}

export default App;
