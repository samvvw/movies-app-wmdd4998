import React, { useState, useEffect } from 'react'
import { Box, ScrollView, Text, VStack } from 'native-base'
import { fetchMovieApi } from '../../services/movieApiServices'
import { TV_SHOWS_OPTIONS } from '../../config/config'
import SelectOption from '../forms/SelectOption'

const TVShowsView = () => {
    const [tvShows, setTvShows] = useState(null)
    const [option, setOption] = useState(TV_SHOWS_OPTIONS.popular.value)

    useEffect(() => {
        ;(async () => {
            try {
                const request = await fetchMovieApi('tv', option)
                console.log(request)
                setTvShows(request.results)
            } catch (error) {
                alert(error)
            }
        })()
    }, [option])

    return (
        <Box width="100%">
            <SelectOption
                options={TV_SHOWS_OPTIONS}
                handleOption={setOption}
                selected={option}
            />
            <ScrollView>
                <Text>{JSON.stringify(tvShows, null, 2)}</Text>
            </ScrollView>
        </Box>
    )
}

export default TVShowsView
