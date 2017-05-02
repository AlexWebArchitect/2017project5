import axios from 'axios'

export function loadLastPosts(): Promise<PostListItem[]>{
    const options = {
        url: '/posts.json',
        method: 'GET'
    }

    return axios(options)
    .then(response => response.data)
    .catch(console.error)
}