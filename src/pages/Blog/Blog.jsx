import React, { useEffect } from "react";
import BlogContainer from "../../containers/Blog/Blog";
const Blog = () => {
  useEffect(() => {
    document.title = "Blog - Smart Integrated Machinery";
  }, []);

  return (
    <div>
      <BlogContainer />
    </div>
  );
};

export default Blog;
