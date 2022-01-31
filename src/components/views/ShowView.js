import React, { useState, useEffect } from 'react'
import { Box, ScrollView, Text, VStack } from 'native-base'
import { fetchMovieApi } from '../../services/movieApiServices'
import SelectOption from '../forms/SelectOption'
import ShowList from '../lists/ShowList'

const ShowView = ({
    showType,
    showOptions,
    defaultValue = null,
    navigation,
}) => {
    const [shows, setShows] = useState(null)
    const [option, setOption] = useState(defaultValue)
    const [isLoading, setIsLoading] = useState(false)

    useEffect(() => {
        ;(async () => {
            try {
                setIsLoading(true)
                const request = await fetchMovieApi(showType, option)
                // console.log(request.results[0])
                // console.log('fetch')
                setShows(request.results)
                setIsLoading(false)
            } catch (error) {
                alert(error)
            }
        })()
    }, [option])

    return (
        <Box width="100%" style={{ flex: 1 }}>
            <SelectOption
                alignSelf="center"
                options={showOptions}
                handleOption={setOption}
                selected={option}
                w="50%"
                my="5"
            />
            {isLoading ? (
                'Loading...'
            ) : (
                <ShowList
                    shows={shows}
                    showType={showType}
                    navigation={navigation}
                />
            )}
            {/* <Text>{JSON.stringify(shows[0], null, 2)}</Text> */}
        </Box>
    )
}

export default ShowView
