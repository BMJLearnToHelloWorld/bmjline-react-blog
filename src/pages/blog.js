import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import blogAPI from "../api/blog";
import Loading from "../pages/loading";
import BlogRender from "../components/blogrender";
import han from "../styles/han.css";

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
        <div className="blog-main blog">
          {!isLoading ? (
            <>
              <h1 className="blog-title">{blogData.blogName}</h1>
              <p className="blog-meta">{blogData.publishedTime}</p>
              <BlogRender blogData={blogData} className={han} />
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
