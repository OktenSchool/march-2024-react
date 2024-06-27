import React, {FC} from 'react';
import {IPost} from "../../models/IPost";

interface IProps {
    posts: IPost[]
}

const PostsComponent: FC<IProps> = ({posts}) => {
    return (
        <ul>
            {
                posts.map(value => <li key={value.id}>{value.id}: {value.title}</li>)
            }
        </ul>
    );
};

export default PostsComponent
