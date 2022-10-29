import React from 'react';
import { useGlobalContext } from '../context';
import { Link } from 'react-router-dom'

const Ecobuilding = () => {
  const { ecobuildingBlogs } = useGlobalContext();
  return (
    <main className='navigation-category_container'>
      <div className="heading">
        <h2>Ecobuilding</h2>
      </div>

      <section className='category-blog_container'>
        {ecobuildingBlogs.map((category) => {
          const { image, title, description, id } = category;
          const { name } = category.author[0];

          return (
            <Link to={`/ecobuilding/${category.id}`} className="category-blog_list" key={id}>
              <div className="image">
                <img src={image} alt={title} />
              </div>

              <div className="category-blog_info">
                <p className="short-description">{description}</p>
                <p>By <span className='category-author'>{name}</span></p>
              </div>

            </Link>
          )

        })}

      </section>

      <div className="back-to-blog">
        <Link to="/all-post"><button>Back To Blog</button></Link>
      </div>

    </main>
  )
}

export default Ecobuilding