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
    id?: string
    category_id?: string
    user_id?: string
}
export function addPosts(post:Post): Promise<PostListItem[]>{
    const data = qs.stringify(post)
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
            if(response.data.error) throw new Error(response.data.error)
            return response.data
        })
        .catch(console.error)
}

export function updatePosts(post: Post): Promise<PostListItem[]>{
   
    const options = {
        url: '/posts',
        method: 'PUT',
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded'
        }, 
        data: qs.stringify(post)
    }
    return axios(options)
        .then(response => {
            if(response.data.error) throw new Error(response.data.error)
            return response.data
        })
        .catch(console.error)
}

interface Auth {
    login: string
    password: string
}
export function registerNewUser(auth:Auth): Promise<PostListItem[]>{
   
    const options = {
        url: '/users',
        method: 'POST',
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded'
        }, 
        data: qs.stringify(auth)
    }
    return axios(options)
        .then(response => {
            if(response.data.error) throw new Error(response.data.error)
            return response.data
        })
        .catch(console.error)
}

export function loadCategories(): Promise<Category[]>{
   
    const options = {
        url: '/categories',
        method: 'GET',
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded'
        }
    }
    return axios(options)
        .then(response => {
            if(response.data.error) throw new Error(response.data.error)
            return response.data
        })
        .catch(console.error)
}