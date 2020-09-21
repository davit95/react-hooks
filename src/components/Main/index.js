import React, {useEffect, useState} from "react";
import axios from 'axios';
import { Card, Spin, Divider, Input } from 'antd';
import { NEWS_API_URL } from "../../constants/env";
import useDebounce from "../../customHooks/useDebounce";

export default function Index() {
    const [posts, setPosts] = useState([]);
    const [query, setQuery] = useState('');
    const [loading, setLoading] = useState(false);
    const debouncedSearchTerm = useDebounce(query, 300);

    const getArticles = async () => {
        try {
            setLoading(true);
            const response = await axios.get(`${NEWS_API_URL}posts`);
            const posts = response.data;
            setPosts(posts);
            setLoading(false);
        } catch (e) {
            console.log('error')
        }
    }

    useEffect(() => {
        getArticles();
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

    useEffect(() => {
        if (debouncedSearchTerm) {
            getArticles();
        }
    }, [debouncedSearchTerm])

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