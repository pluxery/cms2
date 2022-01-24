import React, {useEffect, useState} from 'react';
import axios from 'axios';

function List() {
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            const result = await axios(
                'http://localhost:5000/api/pizza',
            );
            setPosts(result.data);
        };
        fetchData();
    }, []);

    return (
        <div className="App">
            {posts.map(item => (
                <div key={item.id}>
                    {item.name};
                </div>
            ))}
        </div>
    );
}

export default List;
