import React, { useState, useEffect } from "react";
import blogAPI from "../api/blog";
import Loading from "../pages/loading";
import { Link } from "react-router-dom";

function PublishedBlogList(props) {
  const [blogItems, setBlogItems] = useState([]);
  const [isLoading, setLoading] = useState(true);

  useEffect(() => {
    function getBlogList() {
      blogAPI.getPublishedBlogs().then((res) => {
        setLoading(false);
        setBlogItems(res.data);
      });
    }
    const timer = setTimeout(() => {
      getBlogList();
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="container">
      <main role="main" className="container">
        <div className="row">
          <div className="col-md-12 blog-main">
            {!isLoading ? (
              blogItems.map((blogItem) => (
                <div className="blog-post" key={blogItem.id}>
                  <h4 className="blog-title">{blogItem.blogName}</h4>
                  <p className="blog-meta">{blogItem.publishedTime}</p>
                  <p>{blogItem.blogDescr}</p>
                  <Link to={`/blog/${blogItem.id}`}>Continue reading...</Link>
                  <hr />
                </div>
              ))
            ) : (
              <Loading />
            )}
          </div>
        </div>
      </main>
    </div>
  );
}

export default PublishedBlogList;
