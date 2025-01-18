import   {FC} from 'react';
import {IPost} from "../../models/IPost.ts";

type PostProp = {
    item: IPost;
}

const PostComponent:FC<PostProp> = ({item}) => {
    return (
        <div>
            {
                item.title
            }
            </div>
    );
};

export default PostComponent;