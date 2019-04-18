import React, { useEffect } from 'react'
import { withStyles } from '@material-ui/core/styles'
import Grid from '@material-ui/core/Grid'
import PostCard from './postCard'
import { connect } from 'react-redux'
import { fetchPosts } from '../actions/index'

const styles = {
    root: {
        flexGrow: 1,
        margin: 20
    },
    message: {
        textAlign: 'center',
        marginTop: '25%',
        fontSize: '1.5em'
    }
}

const mapStateToProps = (state) => {
    return {
        posts: state.postsReducer.posts
    }
}

const mapDispatchToProps = (dispatch) => {
    return  {
        fetchPosts: () => { dispatch(fetchPosts()) },
        updatePosts: (payload) => {dispatch({ type: 'UPDATE_POSTS', payload })}
    }
}

const PostCardContainer = (props) => {
    let { classes, posts } = props

    useEffect(() => {
        if(navigator.onLine){
            props.fetchPosts()
        } else {
            let cachedPosts = JSON.parse(localStorage.getItem('posts')) || []
            props.updatePosts(cachedPosts)
        }
    }, [])

    console.log('posts', posts)
    if(!posts.length) return <div className={classes.message}>Sorry! no posts to display.<span role='img' aria-label='sad-emoji'>🙄</span></div>

    return (
        <div className={classes.root}>
            <Grid container spacing={16}>
                {props.posts.map((post, index) => {
                    return (
                        <Grid key={index} item xs={12} sm={3}>
                            <PostCard post={post} />
                        </Grid>
                    )
                })}
            </Grid>
        </div>
    )
}

export default connect(mapStateToProps, mapDispatchToProps)(withStyles(styles)(PostCardContainer))