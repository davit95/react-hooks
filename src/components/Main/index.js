import React, {useEffect, useState} from "react";
import axios from 'axios';
import { Card, Spin, Divider, Input } from 'antd';
import { NEWS_API_KEY, NEWS_API_URL } from "../../constants/env";

export default function Index() {
    const [posts, setPosts] = useState([]);
    const [query, setQuery] = useState('');
    const [loading, setLoading] = useState(false);

    const getArticles = async () => {
        setLoading(true);
        const response = await axios.get(`${NEWS_API_URL}posts?count=5`);
        const posts = response.data;
        setPosts(posts);
        setLoading(false);

    }

    useEffect(() => {
        getArticles()
    }, []);

    const postCards = posts.map(post =>
        <Card style={{ maxWidth: '500px' }}
              key={post.id}
              title={post.title}>
            <p>{post.body}</p>
        </Card>
    );

    const handleQueryChange = (e) => {
        let query = e.target.value;
        setQuery(query);
    }

    return (
        loading ? <Spin /> : (
            <>
                <Input type="text" value={query} onChange={handleQueryChange} />
                <Divider />
                {postCards}
            </>
        )
    );
}