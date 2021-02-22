import React from "react";
import ReactMarkdown from "react-markdown";
import ReactMarkdownWithHtml from "react-markdown/with-html";

function BlogRender(props) {
  return (
    <>
      {props.blogData.contentType === "MD" ? (
        <ReactMarkdown children={props.blogData.blogContent} />
      ) : props.blogData.contentType === "RTF" ? (
        <ReactMarkdownWithHtml
          children={props.blogData.blogContent}
          allowDangerousHtml
        />
      ) : (
        <div>{props.blogData.blogContent}</div>
      )}
    </>
  );
}

export default BlogRender;
