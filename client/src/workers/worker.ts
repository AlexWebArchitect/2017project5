import * as Actions from '../constants/actions'
import axios from 'axios'
import * as api from './api'

interface State {
// data
    posts: Array<PostListItem>
    categories: Array<Category>
    current: Category
}

const state: State = {
    posts: [],
    categories: [],
    current: {id: '1', name: 'общая'}
}

function onMessage(event) {
    const {type, payload}: Action = event.data
    switch(type){
// api  
        case Actions.LOAD_CATEGORIES:
            api.loadCategories()
                .then(response => {
                    state.categories = [...response]
                    self.postMessage.apply(null, [{type: Actions.LOAD_CATEGORIES, payload: state.categories}])
                })
            break      
        case Actions.LOAD_LAST_POSTS:
            api.loadLastPosts()
            .then(response => {
                state.posts = response
                self.postMessage.apply(null, [{type: Actions.LOAD_LAST_POSTS, payload: getPosts(state)}])
            })
            break
        case Actions.DELETE_POST_ITEM:
            api.deletePosts(payload)
                .then(response => {
                    state.posts = state.posts.filter(item => item.id != payload)
                    self.postMessage.apply(null,[{type: Actions.LOAD_LAST_POSTS, payload: getPosts(state)}])
                })
            break
        case Actions.EDIT_POST_ITEM: 
            self.postMessage.apply(null, [event.data])
            break
        case Actions.UPDATE_POST_ITEM:
            api.updatePosts(payload)
                .then(response => {
                    const post = response[0]
                    const idx = state.posts.findIndex(item => item.id == post.id)
                    state.posts[idx] = post
                    self.postMessage.apply(null,[{type: Actions.LOAD_LAST_POSTS, payload: getPosts(state)}])
                })
            break
        case Actions.REGISTER_NEW_USER:
            api.registerNewUser(payload)
                .then(response => {
                    const user = response[0]
                    self.postMessage.apply(null,[{type: Actions.REGISTER_NEW_USER, payload: user}])
                }).catch(error => {
                    console.log('registration error send error to registration dialog')
                    console.error(error)
                })
            break
        case Actions.SEARCH_POST_ITEM: 
            self.postMessage.apply(null, [{
                type: Actions.LOAD_LAST_POSTS, 
                payload: state.posts.filter(item => (
                    item.category_id == state.current.id &&
                    item.title.toUpperCase().includes(payload.toUpperCase()) || 
                    item.content.toUpperCase().includes(payload.toUpperCase())))
            }])
            break
        case Actions.ADD_NEW_POST:
            api.addPosts({...payload, category_id: state.current.id})
                .then(response => {
                    state.posts = [...response,...state.posts]
                    self.postMessage.apply(null,[{type: Actions.LOAD_LAST_POSTS, payload: getPosts(state)}])
                })
            break
// display
        case Actions.SHOW_NEW_POST_MODAL:
            self.postMessage.apply(null, [event.data])
            break
        case Actions.SHOW_REGISTRATION_MODAL:
            self.postMessage.apply(null, [event.data])
            break
        case Actions.SORT_BY_USER:
            self.postMessage.apply(null, [{
                type: Actions.LOAD_LAST_POSTS, 
                payload: state.posts.filter(item => item.user_id == payload)
            }])
            break
        case Actions.SET_CURRENT_CATEGORY:
            state.current = payload
            self.postMessage.apply(null, [{type: Actions.SET_CURRENT_CATEGORY, payload }])
            self.postMessage.apply(null,[{type: Actions.LOAD_LAST_POSTS, payload: getPosts(state)}])
            break
    }
}

self.addEventListener('message', onMessage)

function getPosts(state: State): Array <PostListItem> {
   return state.posts.filter(item => item.category_id == state.current.id)
}
