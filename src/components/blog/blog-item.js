import React from "react";
import { Link } from 'react-router-dom';
import striptags from 'striptags';
import Truncate from'react-truncate';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const BlogItem = props => {
    const {
        id,
        blog_status,
        content,
        title,
        featured_image_url
    } = props.blogItem;
    
    return(
        <div className="blog-wrapper">
            <div className="left-blog">
                <Link to={`/b/${id}`}>
                    <h1>{title}</h1>
                </Link>
                <div>
                    <Truncate lines={5} ellipsis={
                        <span>
                            ...<Link to={`/b/${id}`}>Read More</Link>
                        </span>
                    }>
                        {striptags(content)}
                    </Truncate>
                </div>
            </div>
        </div>
    )
}

export default BlogItem;