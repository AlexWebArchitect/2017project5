import * as Actions from '../constants/actions'
import axios from 'axios'
import * as api from './api'

interface State {
    posts: Array<PostListItem>
}

const state: State = {
    posts: []
}

function onMessage(event) {
    const {type, payload}: Action = event.data
    switch(type){
        case Actions.LOAD_LAST_POSTS:
            api.loadLastPosts()
            .then(payload => self.postMessage.apply(null, [{type: Actions.LOAD_LAST_POSTS, payload}]))
            break
        default :
    }
}

self.addEventListener('message', onMessage)

