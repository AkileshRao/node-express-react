import React, { useEffect, useState } from 'react'
import { Box, Text } from "@chakra-ui/react"
import axios from 'axios'
import PostItem from '../post-item/PostItem'
import { useHistory } from 'react-router-dom'

function PostList() {
    const URL = 'http://localhost:8000'
    const history = useHistory()
    const [posts, setPosts] = useState([])

    useEffect(() => {
        axios.get(`${URL}/posts`).then(res => {
            setPosts(res.data)
        }).catch(err => {
            console.log(err);
        })
    }, [])

    return (
        <Box className='post-list' background='#4e35d7' minHeight='calc(100vh - 64px)' width='25%'>
            { posts.length <= 0 ?
                <Box>
                    <Text fontSize='xl' color='white' textAlign='center' py={4}>No posts found.</Text>
                </Box> :
                <Box>
                    {
                        posts && posts.map(post => {
                            return <PostItem post={post} key={post._id} />
                        })
                    }
                </Box>}
        </Box>
    )
}

export default PostList
