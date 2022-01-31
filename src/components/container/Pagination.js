import React from 'react'
import { AntDesign } from '@expo/vector-icons'
import { HStack, Button, Icon, Text } from 'native-base'

const Pagination = ({ handlePage, pagination }) => {
    return (
        <HStack alignItems={'center'}>
            <Button
                onPress={() => handlePage('prev')}
                startIcon={<Icon as={AntDesign} name="arrowleft" size={'xs'} />}
                mr="2"
            />
            <Text>
                Page: {pagination.page}/{pagination.totalPages}
            </Text>
            <Button
                onPress={() => handlePage('next')}
                startIcon={
                    <Icon as={AntDesign} name="arrowright" size={'xs'} />
                }
                ml="2"
            />
        </HStack>
    )
}

export default Pagination
