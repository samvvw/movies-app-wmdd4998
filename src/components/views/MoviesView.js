import React, { useState, useEffect } from 'react'
import { Box, ScrollView, Text, VStack } from 'native-base'
import { fetchMovieApi } from '../../services/movieApiServices'
import { MOVIES_OPTIONS } from '../../config/config'
import SelectOption from '../forms/SelectOption'

const MoviesView = () => {
    const [movies, setMovies] = useState(null)
    const [option, setOption] = useState(MOVIES_OPTIONS.nowPlaying.value)

    useEffect(() => {
        ;(async () => {
            try {
                const request = await fetchMovieApi('movie', option)
                console.log(request)
                setMovies(request.results)
            } catch (error) {
                alert(error)
            }
        })()
    }, [option])

    return (
        <Box width="100%">
            <SelectOption
                options={MOVIES_OPTIONS}
                handleOption={setOption}
                selected={option}
            />
            <ScrollView>
                <Text>{JSON.stringify(movies, null, 2)}</Text>
            </ScrollView>
        </Box>
    )
}

export default MoviesView
