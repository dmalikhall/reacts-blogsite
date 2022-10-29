import React from 'react';
import { useGlobalContext } from '../context';
import { Link } from 'react-router-dom';
import Loading from '../components/Loading'

const Architecture = () => {
  const { architectureBlogs,products_loading: loading } = useGlobalContext();

  if(loading) {
    return <Loading/>
  }


  return (
    <main className='navigation-category_container'>
      <div className="heading">
        <h2>Architecture</h2>
      </div>

      <section className='category-blog_container'>
        {architectureBlogs.map((category) => {
          const { image, title, description, id } = category;
          const { name } = category.author[0];

          return (
            <Link to={`/architecture/${category.id}`} className="category-blog_list" key={id}>
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
        <Link to="/"><button>Back To Blogs</button></Link>
      </div>

    </main>

  )
}

export default Architecture