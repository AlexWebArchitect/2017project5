import * as React from 'react'
import axios from 'axios'
import PostList from '../PostList'

interface Props {}
interface State {
    posts: PostListItem[]
}

export default class App extends React.Component<Props, State> {

    constructor(props: Props) {
        super(props)
        this.state= {posts: []}
    }

   componentDidMount(){
        const options = {
            url: '/posts.json',
            method: 'get'
            // headers: [
            //     "Content-Type": "aplication/json"
            // ]
        }
        axios(options)
        .then(response => {
            this.setState({posts: response.data})
        })
        .catch(console.error)
    }

    render() {
        console.log(this.state.posts.length)
        return !this.state.posts.length ? null : <PostList posts={this.state.posts}/>
    }
}