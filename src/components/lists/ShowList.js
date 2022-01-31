import React, { useMemo, useCallback } from 'react'
import { FlatList } from 'native-base'
import ShowCard from '../listItem/ShowCard'

const ShowList = ({ shows, navigation }) => {
    const renderList = useCallback(({ item }) => {
        const keys = Object.keys(item)
        if (keys.includes('first_air_date')) {
            return (
                <ShowCard
                    image={item.poster_path}
                    title={item.original_name}
                    popularity={item.popularity}
                    releaseDate={item.first_air_date}
                    navigation={navigation}
                    id={item.id}
                    showType="tv"
                />
            )
        } else if (keys.includes('release_date')) {
            return (
                <ShowCard
                    image={item.poster_path}
                    title={item.title}
                    popularity={item.popularity}
                    releaseDate={item.release_date}
                    navigation={navigation}
                    id={item.id}
                    showType="movie"
                />
            )
        } else if (keys.includes('known_for')) {
            return (
                <ShowCard
                    image={item.profile_path}
                    title={item.name}
                    popularity={item.popularity}
                    releaseDate={item.media_type}
                    navigation={navigation}
                    id={item.id}
                    showType="person"
                />
            )
        }
    }, [])
    return (
        <FlatList
            data={shows}
            renderItem={renderList}
            keyExtractor={(item) => item.id}
            showsVerticalScrollIndicator={false}
            w="100%"
        />
    )
}

export default ShowList
