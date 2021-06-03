import { Button } from '@chakra-ui/button'
import { Input } from '@chakra-ui/input'
import { Box, Flex, Text } from '@chakra-ui/layout'
import { Textarea } from '@chakra-ui/textarea'
import React, { useState } from 'react'
import Topbar from '../../common/Topbar'
import { HiOutlineArrowNarrowRight } from 'react-icons/hi'
import { useToast } from "@chakra-ui/react"
import axios from 'axios'
function CreatePost() {
    const URL = 'http://localhost:8000'
    const toast = useToast()
    const [title, setTitle] = useState('')
    const [body, setBody] = useState('')

    const handleSubmit = () => {
        if (!(title && body)) {
            toast({
                title: "Error",
                description: "Please fill the form correctly.",
                status: "error",
                duration: 5000,
                isClosable: true,
                position: 'top-right'
            })
        } else {
            axios.post(`${URL}/posts/add-post`, { title, body }).then(res => {
                setTitle(''); setBody('');
                toast({
                    title: "Success",
                    description: "Post has been created.",
                    status: "success",
                    duration: 5000,
                    isClosable: true,
                    position: 'top-right'
                })
                console.log(res);
            }).catch(err => {
                console.log(err);
            })
        }
    }

    return (
        <Flex minHeight='calc(100vh)' flexDirection='column'>
            <Topbar type="create" />
            <Flex width='50%' flex='1' width='50%' margin='auto' alignItems='center' justifyContent='center' flexDirection='column'>
                <Input value={title} placeholder='Add a title' fontSize='4xl' color='gray.900' opacity='.7' fontWeight='600' onChange={e => setTitle(e.currentTarget.value)} />
                <Textarea value={body} color='gray.900' placeholder='Start your blog' my={4} fontWeight='400' rows={16} onChange={e => setBody(e.currentTarget.value)} />
                <Button className='post-btn' rightIcon={<HiOutlineArrowNarrowRight />} width='100%' background='#4e35d7' color='white' onClick={handleSubmit}>Post your blog</Button>
            </Flex>
        </Flex>
    )
}

export default CreatePost
