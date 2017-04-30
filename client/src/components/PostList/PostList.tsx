import * as React from 'react'

interface Props {
    posts: PostListItem[]
}
interface State {
    
}
export default class PostList extends React.Component<Props, State>{

    render(){
        const posts = this.props.posts.map(post => (
            <li key={post.id}>{post.title}</li>
        ))
        console.log(this.props.posts.length)
        return <ul>{posts}</ul>
    }
}