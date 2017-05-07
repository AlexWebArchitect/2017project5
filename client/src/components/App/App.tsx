import * as React from 'react'
import PostList from '../PostList'
import NewPostModal from '../NewPostModal'
import EditPostModal from '../EditPostModal'
import RegistrationModal from '../RegistrationModal'
import NavBar from '../NavBar'
import itworx from '../../workers/itworx'
import * as Actions from '../../constants/actions'

interface Props {}
interface State {
    posts: PostListItem[]
}

export default class App extends React.Component<Props, State> {

    constructor(props: Props) {
        super(props)
        this.state= {posts: []}

        this.loadLastPosts = this.loadLastPosts.bind(this)
    }

   componentDidMount(){
        itworx.subscribe(Actions.LOAD_LAST_POSTS, this.loadLastPosts)
        itworx.dispatch({type: Actions.LOAD_LAST_POSTS})
    }

    loadLastPosts(action: Action){
        this.setState({posts: action.payload})
    }

    renderPostList(){
        return !this.state.posts.length ? null : <PostList posts={this.state.posts}/>
    }

    render() {
        return (
            <div>
                <NavBar/>
                {this.renderPostList()}
                <NewPostModal/>
                <EditPostModal/>
                <RegistrationModal/>
            </div>
        )

        
    }
}