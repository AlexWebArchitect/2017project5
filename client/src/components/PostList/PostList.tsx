import * as React from 'react'
import PostItem from './PostItem'
import * as styles from './postlist.css'

interface Props {
    posts: PostListItem[]
}
interface State {
    
}
export default class PostList extends React.Component<Props, State>{

    render(){
        const posts = this.props.posts.map(post => (
            <li key={post.id}
                className={styles.item}>
                <PostItem post={post}/>
            </li>
        ))
        return <ul className={styles.item}>{posts}</ul>
    }
}