import { VStack, Text, Image, ScrollView } from 'native-base'
import React from 'react'
import placeholder from '../../../assets/placeholder.png'

const SingleShowCard = ({ show, showType }) => {
    const title = showType === 'movie' ? show?.title : show?.name
    const image = showType === 'person' ? show?.profile_path : show?.poster_path
    const imageURL = `https://image.tmdb.org/t/p/w300${image}`
    const overview = showType === 'person' ? show?.biography : show?.overview
    const releaseDate =
        showType === 'person'
            ? show?.birthday
            : showType === 'movie'
            ? show?.release_date
            : show?.first_air_date

    return (
        <ScrollView>
            <VStack alignItems={'center'}>
                <Text fontWeight={'bold'} fontSize={'2xl'} my="8">
                    {title}
                </Text>
                <Image
                    source={image ? { uri: imageURL } : placeholder}
                    alt={title}
                    size={'2xl'}
                    mb="6"
                />
                <Text w="80%">{overview}</Text>
                <Text w="80%" mt="5">
                    Popularity: {show.popularity} |{' '}
                    {showType === 'person' ? 'Birthday:' : 'Release Date '}{' '}
                    {releaseDate}
                </Text>
            </VStack>
        </ScrollView>
    )
}

export default SingleShowCard
