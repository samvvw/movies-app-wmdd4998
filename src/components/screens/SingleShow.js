import React from 'react'
import { Text } from 'native-base'

const SingleShow = ({ navigation, route }) => {
    const { id, title } = route.params
    return (
        <>
            <Text>
                Single show {id}
                {title}
            </Text>
        </>
    )
}

export default SingleShow
