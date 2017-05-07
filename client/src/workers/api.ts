import axios from 'axios'
const qs = require('qs')

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
export function addPosts(post:Post): Promise<PostListItem[]>{
    const data = qs.stringify({...post, user_id: "1", subcategory_id: "1"})
    const options = {
        url: '/posts',
        method: 'POST',
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded'
        }, data
    }
    return axios(options)
    .then(response => {
        if(response.data.error) throw new Error(response.data.error)
        return response.data
    })
    .catch(console.error)
}

export function deletePosts(id:string): Promise<PostListItem[]>{
   
    const options = {
        url: '/posts',
        method: 'DELETE',
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded'
        }, 
        data: qs.stringify({id})
    }
    return axios(options)
    .then(response => {
        console.log(response)
        if(response.data.error) throw new Error(response.data.error)
        return response.data
    })
    .catch(console.error)
}