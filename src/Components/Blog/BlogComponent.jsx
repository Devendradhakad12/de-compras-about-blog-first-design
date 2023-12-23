import React, { useState } from "react";
import "./BlogComponent.css";
import { Blogs } from "../../utils/utilities";
import dateFormat from "dateformat";
import { Link } from "react-router-dom";

const BlogComponent = () => {
  const [readMore, setReadMore] = useState(false);
  return (
    <div className="bolg-container">
      <h2>de-compras Blogs</h2>

      {/* Blog Conttainer */}
      <div className="bolg-posts">
        <div className="posts">
          {Blogs.length &&
            Blogs.map((post) => (
              <div className="post-card" key={post.id} id={post.id}>
                <img src={post.image} alt="post-image" className="post-image" />

                <div className="post-heading-and-date">
                  <div className="post-heading">
                    <h1>{post.postHeading} </h1>
                  </div>
                  <div className="post-date">
                    <span> {dateFormat(post.createdAt, "d mmm")}</span>
                  </div>
                </div>

                <p className="post-description">
                  {readMore
                    ? post.postDescription
                    : post.postDescription.slice(0, 150)}
                  {readMore ? "" : "....."}{" "}
                  <Link onClick={() => setReadMore((prev) => !prev)} to={``}>
                    {readMore ? "Read Less" : "Read More"}
                  </Link>{" "}
                </p>
              </div>
            ))}
        </div>

        {/*  aside container */}
        <aside className="aside">
          <div className="recent-post-list-div">
            <h3>Recent Post</h3>
            <ul className="post-list">
              {Blogs.length &&
                Blogs.map((post) => (
                  <li key={post.id}>
                    {" "}
                    &gt; &nbsp;{" "}
                    <a href={`#${post.id}`}>
                      {" "}
                      {post.postHeading.slice(0, 20)}...
                    </a>
                  </li>
                ))}
            </ul>
          </div>
          <div className="categories-div">
            <h3>Categories</h3>
            <ul className="category-list">
              <li>
                {" "}
                &gt; &nbsp; <a href="">Fashion</a>
              </li>
            </ul>
          </div>
        </aside>
      </div>
      
    </div>
  );
};

export default BlogComponent;
