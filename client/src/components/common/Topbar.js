import React from 'react'
import { Button, Flex, Text } from "@chakra-ui/react"
import { BiArrowBack } from 'react-icons/bi'
import { GrAdd } from 'react-icons/gr'
import { useHistory } from 'react-router-dom'

function Topbar({ type }) {
    const history = useHistory()

    return (
        <Flex className='topbar' background='#162170' color='white' px={4} py={3} justifyContent='space-between'>
            <Text fontSize="2xl" fontWeight='700'>List of Posts</Text>
            { type === "create" ?
                <Button leftIcon={<BiArrowBack />} onClick={() => history.push('/posts')} color='gray.700'>Back</Button> :
                <Button leftIcon={<GrAdd />} onClick={() => history.push('/create-post')} color='gray.700'>Create Post</Button>
            }
        </Flex>
    )
}

export default Topbar
