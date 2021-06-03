import React, { useEffect, useState } from 'react'
import { useHistory } from 'react-router'
import { Box, Flex, Text } from '@chakra-ui/layout'
import { Button } from '@chakra-ui/button'
import { Input } from '@chakra-ui/input'
import { Textarea } from '@chakra-ui/textarea'
import { HiOutlineArrowNarrowRight } from 'react-icons/hi'
import { RiDeleteBin7Line, RiPencilLine } from 'react-icons/ri'
import { useToast } from "@chakra-ui/react"
import axios from 'axios'

function PostBody({ match }) {
    const toast = useToast()
    const history = useHistory()
    const URL = 'http://localhost:8000'
    const [post, setPost] = useState(null)

    useEffect(() => {
        let id = history.location.pathname.split('/').pop();
        axios.get(`${URL}/posts/${id}`).then(res => {
            setPost(res.data)
        }).catch(err => {
            console.log(err);
        })
    }, [history.location])

    const handleUpdate = () => {
        axios.put(`${URL}/posts/${post._id}`, post).then(res => {
            window.location.reload()
        }).catch(err => {
            console.log(err);
        })
    }

    const handleDelete = () => {
        axios.delete(`${URL}/posts/${post._id}`).then(res => {
            window.location.reload()
        }).catch(err => {
            console.log(err);
        })
    }
    return (
        <Box width='100%' height='100%'>
            {
                post ?
                    <Flex width='50%' flex='1' width='50%' margin='auto' alignItems='center' justifyContent='center' flexDirection='column'>
                        <Input value={post.title} placeholder='Add a title' fontSize='4xl' color='gray.900' opacity='.7' fontWeight='600' onChange={e => setPost({ ...post, title: e.currentTarget.value })} />
                        <Textarea value={post.body} color='gray.900' placeholder='Start your blog' my={4} fontWeight='400' rows={16} onChange={e => setPost({ ...post, body: e.currentTarget.value })} />
                        <Flex width='100%'>
                            <Button className='post-btn' leftIcon={<RiPencilLine />} width='100%' background='#4e35d7' color='white' onClick={handleUpdate}>Update blog</Button>
                            <Button ml={4} leftIcon={<RiDeleteBin7Line />} width='100%' colorScheme='red' color='white' onClick={handleDelete}>Delete Blog</Button>
                        </Flex>
                    </Flex>
                    :
                    <Flex height='100%' width='100%' alignItems='center' justifyContent='center' flexDirection='column' opacity='.7'>
                        <Text fontSize='2xl' fontWeight='600'>No post selected.</Text>
                        <Text fontSize='l'>Please select a post to get started.</Text>
                    </Flex>
            }
        </Box>
    )
}

export default PostBody
