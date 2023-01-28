import React, { useState, useEffect }  from 'react';
import { Link} from 'react-router-dom';

const Blog = () => {

    const [posts, setPosts] = useState([]);

    useEffect( () => {
        fetch('https://jsonplaceholder.typicode.com/posts')
        .then(res => res.json())
        .then(data => setPosts(data));
    }, [] );



    return (
        <div>
            <h1>Blog page me</h1>
            <p>
                This is the blog page
                <ul>
                    {
                        posts.map( post => (
                            <li><Link to={`/blog/${post.id}`}>{post.title}</Link></li>
                        ))
                    }
                    
                    
                </ul>
            </p>
        </div>
    )
}

export {Blog}
