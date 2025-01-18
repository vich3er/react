import {useEffect, useState} from 'react';
import PostComponent from "./PostComponent.tsx";
import {IPost} from "../../models/IPost.ts";
import {postsService} from "../../services/api-servise.ts";

const PostsComponent = () => {

    const [posts, setPost] = useState<IPost[]>([])
    useEffect(() => {
        postsService.getPosts().then(res=>setPost(res))
    }, [])
    return (
        <div>
            {
                posts.map(post => { return <PostComponent item={post} key={post.id} /> })
            }
        </div>
    );
};

export default PostsComponent;