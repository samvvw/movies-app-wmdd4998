import React from 'react'
import { HStack, Spinner, Text } from 'native-base'

const Loading = () => {
    return (
        <HStack space={2} justifyContent={'center'}>
            <Spinner color="indigo.500" />
            <Text>Loading</Text>
        </HStack>
    )
}

export default Loading
