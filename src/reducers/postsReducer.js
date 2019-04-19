const initState = {
    posts: [],
    isDark: false
}

export default function(state = initState, action){
    const { type, payload } = action
    switch(type){
        case 'UPDATE_POSTS': return { ...state, posts: payload }
        case 'UPDATE_THEME': return { ...state, isDark: payload }
        default: return state
    }
}