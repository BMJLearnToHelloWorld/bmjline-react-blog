import React, { useState, useEffect } from "react";
import blogAPI from "../api/blog";
import Loading from "../pages/loading";
import { Link } from "react-router-dom";

function PublishedBlogList(props) {
  const [blogItems, setBlogItems] = useState([]);
  const [isLoading, setLoading] = useState(true);
  const [pageIndex, setPageIndex] = useState(1);

  useEffect(() => {
    function getBlogList() {
      blogAPI.getPublishedBlogs(pageIndex).then((res) => {
        setLoading(false);
        setBlogItems(res.data);
      });
    }
    function forwardPage() {
      setPageIndex(pageIndex + 1);
      getBlogList();
    }
    function previousPage() {
      if (pageIndex > 1) {
        setPageIndex(pageIndex - 1);
        getBlogList();
      }
    }

    const timer = setTimeout(() => {
      getBlogList();
    }, 1000);

    return () => clearTimeout(timer);
  }, [pageIndex]);

  return (
    <div className="container">
      {!isLoading ? (
        <main role="main" className="container">
          <div className="row">
            <div className="col-md-12 blog-main">
              {blogItems.map((blogItem) => (
                <div className="blog-post" key={blogItem.id}>
                  <h4 className="blog-title">{blogItem.blogName}</h4>
                  <p className="blog-meta">{blogItem.publishedTime}</p>
                  <p className="blog-descr">{blogItem.blogDescr}</p>
                  <Link
                    style={{ textDecoration: "none", color: "#333" }}
                    to={`/blog/${blogItem.id}`}
                  >
                    <span className="blog-continue">Continue reading...</span>
                  </Link>
                  <hr />
                </div>
              ))}
            </div>
          </div>
          <div className="row">
            <div className="col-md-12">
              <div className="blog-previous-page blog-arrow">
                <i className="bi bi-chevron-left blog-pagination"></i>
              </div>
              <div className="blog-page-num">{pageIndex}</div>
              <div className="blog-forward-page blog-arrow">
                <i className="bi bi-chevron-right blog-pagination"></i>
              </div>
            </div>
          </div>
        </main>
      ) : (
        <Loading />
      )}
    </div>
  );
}

export default PublishedBlogList;
