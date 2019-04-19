import axios from 'axios'

export const fetchPosts = () => (dispatch) => {
    axios.get('https://jsonplaceholder.typicode.com/posts').then((response) => {
        dispatch({ type: 'UPDATE_POSTS', payload: response.data.sort(() => (0.5 - Math.random())) })
        let toBeCachedData = response.data.sort(function() {return 0.5 - Math.random()}).splice(5, 10)
        localStorage.setItem('posts', JSON.stringify(toBeCachedData))
    }).catch((err) => {
        console.error(err)
    })
}