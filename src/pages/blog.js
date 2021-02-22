import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import blogAPI from "../api/blog";
import Loading from "../pages/loading";
import BlogRender from "../components/blogrender";

function BlogDetail() {
  let { id } = useParams();
  const [blogData, setBlogData] = useState({});
  const [isLoading, setLoading] = useState(true);

  useEffect(() => {
    function getBlogDetail() {
      blogAPI.getBlogData(id).then((res) => {
        setLoading(false);
        setBlogData(res.data);
      });
    }

    const timer = setTimeout(() => {
      getBlogDetail();
    }, 1000);

    return () => clearTimeout(timer);
  }, [id]);

  return (
    <>
      <div className="container">
        <div className="blog-post">
          {!isLoading ? (
            <>
              <h4 className="blog-post-title">{blogData.blogName}</h4>
              <p className="blog-post-meta">{blogData.publishedTime}</p>
              <BlogRender blogData={blogData} />
              <hr />
            </>
          ) : (
            <Loading />
          )}
        </div>
      </div>
    </>
  );
}

export default BlogDetail;
