import React from 'react';
import Article from '../../components/article/Article';
import { blog02, blog03, blog04, blog05 } from './imports';
import './blog.css';

const Blog = () => (
  <div className="gpt3__blog section__padding" id="blog">
    <div className="gpt3__blog-heading">
      <h2 className="gradient__text">A lot is happening We are blogging about it.</h2>
    </div>
    <div className="gpt3__blog-container">
      <div className="gpt3__blog-container_groupB">
        <Article imgUrl={blog02} date="Sep 26, 2021" text="Learn Something new for the future. Let us exlore how it is?" />
        <Article imgUrl={blog03} date="Sep 26, 2021" text="Learn Something new for the future. Let us exlore how it is?" />
        <Article imgUrl={blog04} date="Sep 26, 2021" text="Learn Something new for the future. Let us exlore how it is?" />

      </div>
    </div>
  </div>
);

export default Blog;
