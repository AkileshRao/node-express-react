import { Box, Text } from '@chakra-ui/layout'
import React from 'react'
import { useHistory } from 'react-router-dom'

function PostItem({ post }) {
    const history = useHistory()

    return (
        <Box color='white' p={3} cursor='pointer' className='post-item' onClick={() => {
            console.log(post._id);
            history.push(`/posts/${post._id}`)
        }} >
            <Text fontSize='l' fontWeight='600'>{post.title}</Text>
            <Text fontSize='sm' opacity='.7'>{post.body}</Text>
        </Box>
    )
}

export default PostItem
