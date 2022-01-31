import React, { useState } from 'react'
import { Box, Text } from 'native-base'
import ShowSearch from '../forms/ShowSearch'
import { SEARCH_OPTIONS } from '../../config/config'
import ShowList from '../lists/ShowList'
import { fetchMovieApi } from '../../services/movieApiServices'
import Loading from '../container/Loading'

const SearchView = ({ navigation }) => {
    const [option, setOption] = useState(null)
    const [searchInput, setSearchInput] = useState(null)

    const [inputInvalid, setInputInvalid] = useState(false)
    const [optionInvalid, setOptionInvalid] = useState(false)
    const [isLoading, setIsLoading] = useState(false)
    const [shows, setShows] = useState(null)

    const onSubmit = async () => {
        if (searchInput === '' || searchInput === null) {
            setInputInvalid(true)
        } else {
            setInputInvalid(false)
        }
        if (option === null) {
            setOptionInvalid(true)
        } else {
            setOptionInvalid(false)
        }

        if (searchInput && option) {
            try {
                setIsLoading(true)
                const request = await fetchMovieApi(
                    'search',
                    option,
                    searchInput
                )
                setShows(request.results)
                setIsLoading(false)
            } catch (error) {
                alert(error)
            }
        }
    }
    return (
        <Box width="100%" style={{ flex: 1 }}>
            <ShowSearch
                options={SEARCH_OPTIONS}
                handleOption={setOption}
                selected={option}
                handleInput={setSearchInput}
                searchInput={searchInput}
                inputInvalid={inputInvalid}
                optionInvalid={optionInvalid}
                onSubmit={onSubmit}
            />
            {!shows ? (
                <Box
                    style={{ flex: 1 }}
                    justifyContent={'center'}
                    alignItems={'center'}
                >
                    <Text fontSize={'3xl'} mb="40" fontWeight={'bold'}>
                        Please initiate a search
                    </Text>
                </Box>
            ) : isLoading ? (
                <Loading />
            ) : (
                <ShowList
                    shows={shows}
                    showType={option === 'movies' ? 'movie' : 'tv'}
                    navigation={navigation}
                />
            )}
        </Box>
    )
}

export default SearchView
