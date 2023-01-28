import React, { useState, useEffect }  from 'react';

import { useParams, Link, useNavigate} from 'react-router-dom';
const Singlepage = () => {


    const {id} = useParams();
    const navigate = useNavigate();
    const [post, setPost] = useState(null);
    const goBack = () => navigate(-1)

    useEffect( () => {
        fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)
        .then(res => res.json())
        .then(data => setPost(data));
    }, [id] );

    return (
        <div>
            <h1>Singlepage</h1>
            <p>
                <button onClick={goBack}>Go back</button>
                {post && (
                    <>
                    {post.title}
                    <br />
                    {post.body}
                    <br />

                    </>
                
                )}
                <Link to="/Blog">К списку</Link>
            </p>
        </div>
    )
}

export {Singlepage}
