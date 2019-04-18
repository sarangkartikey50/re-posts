const initState = {
    posts: []
}

export default function(state = initState, action){
    const { type, payload } = action
    switch(type){
        case 'UPDATE_POSTS': return { ...state, posts: payload }
        default: return state
    }
}