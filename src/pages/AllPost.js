import React from 'react';
import { useGlobalContext } from '../context';
import { Link } from 'react-router-dom';
import AllPostAuthors from '../components/AllPostAuthors';
import FeaturedPost from '../components/FeaturedPost';
import Loading from '../components/Loading'


const AllPost = () => {
  const { allBlogs, products_loading: loading} = useGlobalContext();

  if(loading) {
    return <Loading/>
  }

  return (
    <section className='all-posts_container'>
      <div className="all-posts_left">
        <div className="all-posts_header">
          <h3>All Posts</h3>
        </div>
        <div className="all-posts_content">
          {allBlogs.map((blog) => {
            const { image, category, title, description, id } = blog;
            return (
              <Link to={`/${blog.id}`} className='all-posts_list' key={id}>
                <div className="image">
                  <img src={image} alt={title} />
                </div>
                <div className="all-posts_info">
                  <p className="category">{category}</p>
                  <h2 className="title">{title}</h2>
                  <p className="description">{description}</p>
                  <p className="read-more">Read More</p>
                </div>
              </Link>

            )
          })}
        </div>
      </div>
      <div className="all-posts_right">
        <AllPostAuthors />
        <FeaturedPost/>

      </div>
    </section>
  )
}

export default AllPost