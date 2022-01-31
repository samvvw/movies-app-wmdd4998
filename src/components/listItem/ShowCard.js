import { Box, Button, HStack, VStack, Image, Text } from 'native-base'
import React from 'react'
import placeholder from '../../../assets/placeholder.png'

const ShowCard = ({
    image,
    title,
    popularity,
    releaseDate,
    id,
    navigation,
}) => {
    const imageSource = `https://image.tmdb.org/t/p/w300${image}`
    return (
        <Box borderBottomWidth="1" borderColor="gray.400">
            <HStack alignItems={'center'}>
                <Image
                    alt={title}
                    source={image ? { url: imageSource } : placeholder}
                    size={'xl'}
                    m="3"
                />
                <VStack m="3" alignContent={'center'} w="60%">
                    <Text
                        fontWeight={'bold'}
                        fontSize={'lg'}
                        maxW="90%"
                        isTruncated
                    >
                        Title:{title}
                    </Text>
                    <Text>Popularity:{popularity}</Text>
                    <Text>Release Date:{releaseDate}</Text>
                    <Button
                        onPress={() => {
                            navigation.navigate('Single', {
                                id,
                                title,
                            })
                        }}
                        w="90%"
                    >
                        More Details
                    </Button>
                </VStack>
            </HStack>
        </Box>
    )
}

export default ShowCard
