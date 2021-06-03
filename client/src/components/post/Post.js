import { Box, Flex } from '@chakra-ui/layout'
import React from 'react'
import PostList from './post-list/PostList';
import PostBody from './post-body/PostBody'
import Topbar from '../common/Topbar';

function Post() {
    return (
        <Box minHeight='100vh'>
            <Topbar type='posts' />
            <Flex minHeight='calc(100vh - 64px)' alignItems='center'>
                <PostList />
                <PostBody />
            </Flex>
        </Box>
    )
}

export default Post
