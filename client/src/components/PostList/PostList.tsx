import * as React from 'react'
import PostItem from './PostItem'

interface Props {
    posts: PostListItem[]
}
interface State {
    
}
export default class PostList extends React.Component<Props, State>{

    render(){
        const posts = this.props.posts.map(post => (
            <li key={post.id}>
                <PostItem post={post}/>
            </li>
        ))
        console.log(this.props.posts.length)
        return <ul>{posts}</ul>
    }
}