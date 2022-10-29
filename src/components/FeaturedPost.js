import React from 'react';
import { useGlobalContext } from '../context';
import {Link} from 'react-router-dom'

const FeaturedPost = () => {
    const { allBlogs } = useGlobalContext();


    let feat = Object.values(allBlogs)
    const newFeat = feat.splice(6,4)


    return (
        
        <div className="all-featured-posts">
            <div className="featured-header">
                <h3>featured posts</h3>
            </div>
            {newFeat.map((features) => {
                const { image, category, title, id } = features
                return (
                    <Link key={id} to={`/${features.id}`}>
                        <div className="featured-image">
                            <img src={image} alt={title}/>
                        </div>
                        <div className="featured-name">
                            <p className="category">{category}</p>
                            <p className="title">{title}</p>
                        </div>
                    </Link>
                )
            })}
        </div>
    )
}

export default FeaturedPost