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
                <h6>{new Date(post.date).toLocaleDateString('Ru')}</h6>
                <p>{post.content}</p>
            </div>
        )
    }
}