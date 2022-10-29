import React from 'react';
import { useGlobalContext } from '../context';
import { useParams } from 'react-router-dom';

const SingleBlog = () => {
  const { allBlogs } = useGlobalContext();
  const { blogId } = useParams();
  

  const blog = allBlogs.find((blog) => blog.id === blogId);

  const { image, category, title, description, theEnd } = blog;
  const { image: authorPic, name, postDate } = blog.author[0];
  const { firstParagraph, secondParagraph, thirdParagraph, fourthParagraph, quote } = blog.overview[0];
  return (
    <>
    
      <div className="blog-image">
        <img src={image} alt="blog post" />
      </div>

      <div className="container">
        <div className="header">
          <p className="category">{category}</p>
          <h1 className="title">{title}</h1>
          <p className="description">{description}</p>
          <div className="author-info">
            <div className="author-image">
              <img src={authorPic} alt={name}/>
            </div>
            <p>By <span>{name}</span> on {postDate}</p>
          </div>
        </div>
        <div className="overview">
          <h2>overview</h2>
          <p>{firstParagraph}</p>
          <p>{secondParagraph}</p>
          <div className="quote">{quote}</div>
          <p>{thirdParagraph}</p>
          <p>{fourthParagraph}</p>
        </div>
        <div className="the-end">
          <h3>The End</h3>
          <p>{theEnd}</p>
        </div>
        <div className="dots">...</div>
      </div>

    </>
  )
}

export default SingleBlog