import * as React from 'react'

interface Props {
    post: PostListItem
}
interface State {
    // empty 
}
export default class PostItem extends React.Component<Props, State> {

    render() {
        const {post} = this.props
        return (
            <div className="well">
                <h4>{post.title}</h4>
                <div>{new Date(post.date).toDateString()}</div>
                <p>{post.content}</p>
            </div>
        )
    }
}