import * as React from 'react'
import axios from 'axios'

interface Props {}
interface State {}

export default class App extends React.Component<Props, State> {

   componentDidMount(){
        const options = {
            url: '/posts.json',
            method: 'get'
            // headers: [
            //     "Content-Type": "aplication/json"
            // ]
        }
        axios(options)
        .then(console.log)
        .catch(console.error)
    }

    render() {
        return <h2> Hello </h2>
    }
}