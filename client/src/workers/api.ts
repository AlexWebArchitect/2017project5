import axios from 'axios'

export function loadLastPosts(): Promise<PostListItem[]>{
    const options = {
        url: '/posts',
        method: 'GET'
    }

    return axios(options)
    .then(response => response.data)
    .catch(console.error)
}
interface Post{
    title: string
    content: string
    subcategory_id?: string
    user_id?: string
}
export function addPosts(post:Post): Promise<PostListItem>{
    const options = {
        url: '/posts',
        method: 'POST',
        data: {...post, user_id:"1", subcategory_id:"1"}
    }

    return axios(options)
    .then(response => response.data)
    .catch(console.error)
}