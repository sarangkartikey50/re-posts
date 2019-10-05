import React, { useEffect, useState } from 'react'
import { withStyles } from '@material-ui/core/styles'
import PostCard from './postCard'
import { connect } from 'react-redux'
import { fetchPosts, updateCachedPosts } from '../actions/index'
import CircularProgress from '@material-ui/core/CircularProgress'
import { FixedSizeGrid } from 'react-window'

const styles = theme => ({
    root: {
        flexGrow: 1,
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
    },
    grid: {
        display: 'block', 
        margin: '0 auto', 
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
    
    const [ height, setHeight ] = useState(0);
    const [ width, setWidth ] = useState(0);

    let updateWindowDimensions = () =>{        
        setHeight(window.innerHeight)
        setWidth(window.innerWidth)
    }

    useEffect(() => {
        if(navigator.onLine){
            props.fetchPosts()
        } else {
            props.updateCachedPosts()
        }
        updateWindowDimensions()
        window.addEventListener('resize', updateWindowDimensions);

        return ()=>{
            window.removeEventListener('resize', updateWindowDimensions);
        }
    }, [])
    

    if(!posts.length) return <div className={classes.progressContainer}><CircularProgress className={classes.progress} /></div>
    
    let columnCount = Math.floor(width/350)
    let rowCount = Math.floor(posts.length/columnCount) + posts.length % columnCount
    console.log(columnCount, rowCount)
    return (
        <div>
            <div className={classes.root}>
                <FixedSizeGrid
                    height={height - 60}
                    rowCount={rowCount}
                    rowSize={200}
                    rowHeight={350}
                    width={370*columnCount}
                    columnCount={columnCount}
                    columnWidth={350}
                    className={classes.grid}
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