import * as Actions from '../constants/actions'

interface State {
}

const state: State = {
}

function onMessage(event) {
    const {type, payload}: Action = event.data
    switch(type){
       
        case Actions.LOAD_LAST_POSTS:
            self.postMessage.apply(null, [{type: Actions.LOAD_LAST_POSTS, payload: []}])
            break
        default :
    }
}

self.addEventListener('message', onMessage)