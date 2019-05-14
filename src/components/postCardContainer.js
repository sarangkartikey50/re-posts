import React, { useEffect } from 'react'
import { withStyles } from '@material-ui/core/styles'
import PostCard from './postCard'
import { connect } from 'react-redux'
import { fetchPosts, updateCachedPosts } from '../actions/index'
import CircularProgress from '@material-ui/core/CircularProgress'
import { FixedSizeGrid } from 'react-window'

const styles = theme => ({
    root: {
        flexGrow: 1,
        padding: 20,
        background: (theme.palette.background)
    },
    progress: {
        display: 'block',
        margin: '0 auto',
        marginTop: '30%',
        color: '#ea4436'
    },
    progressContainer: {
        width: '100%'
    }
})

const mapStateToProps = (state) => {
    return {
        posts: state.postsReducer.posts
    }
}

const mapDispatchToProps = (dispatch) => {
    return  {
        fetchPosts: () => { dispatch(fetchPosts()) },
        updateCachedPosts: () => { dispatch(updateCachedPosts())}
    }
}

const PostCardContainer = (props) => {
    let { classes, posts } = props

    useEffect(() => {
        if(navigator.onLine){
            props.fetchPosts()
        } else {
            props.updateCachedPosts()
        }
    }, [])

    if(!posts.length) return <div className={classes.progressContainer}><CircularProgress className={classes.progress} /></div>

    return (
        <div>
            <div className={classes.root}>
                <FixedSizeGrid
                    height={window.innerHeight - 100}
                    rowCount={posts.length/3}
                    rowSize={200}
                    rowHeight={350}
                    width={window.innerWidth}
                    columnCount={4}
                    columnWidth={350}
                >
                        {({ rowIndex, columnIndex, style }) => (
                            <div style={style}>
                                <PostCard key={rowIndex*3 + columnIndex} post={posts[rowIndex*3 + columnIndex]} />
                            </div>
                        )}
                </FixedSizeGrid>
            </div>
        </div>
    )
}

export default connect(mapStateToProps, mapDispatchToProps)(withStyles(styles)(PostCardContainer))