import * as Actions from '../constants/actions'
import axios from 'axios'
import * as api from './api'

interface State {
// data
    posts: Array<PostListItem>
// display
    newPostModalIsVisible: boolean
}

const state: State = {
    posts: [],
    newPostModalIsVisible: true
}

function onMessage(event) {
    const {type, payload}: Action = event.data
    switch(type){
// api        
        case Actions.LOAD_LAST_POSTS:
            api.loadLastPosts()
            .then(payload => self.postMessage.apply(null, [{type: Actions.LOAD_LAST_POSTS, payload}]))
            break
// display
        case Actions.SHOW_NEW_POST_MODAL:
            state.newPostModalIsVisible = payload
            self.postMessage.apply(null, [event.data])
            break
        default :
    }
}

self.addEventListener('message', onMessage)

