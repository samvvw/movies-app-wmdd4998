import React, { useState, useEffect } from 'react'
import {
    Box,
    Button,
    HStack,
    ScrollView,
    Icon,
    Text,
    VStack,
} from 'native-base'
import { fetchMovieApi } from '../../services/movieApiServices'
import SelectOption from '../forms/SelectOption'
import ShowList from '../lists/ShowList'
import Loading from '../container/Loading'
import Pagination from '../container/Pagination'

const ShowView = ({
    showType,
    showOptions,
    defaultValue = null,
    navigation,
}) => {
    const [shows, setShows] = useState(null)
    const [option, setOption] = useState(defaultValue)
    const [isLoading, setIsLoading] = useState(false)
    const [pagination, setPagination] = useState({ page: 1, totalPages: 0 })

    useEffect(() => {
        ;(async () => {
            try {
                setIsLoading(true)
                const request = await fetchMovieApi(
                    showType,
                    option,
                    null,
                    null,
                    pagination.page
                )
                setPagination((prev) => ({
                    ...prev,
                    totalPages: request.total_pages,
                }))
                setShows(request.results)
                setIsLoading(false)
            } catch (error) {
                alert(error)
            }
        })()
    }, [option, pagination.page])

    const handlePage = (action) => {
        if (action === 'next') {
            setPagination((prev) => ({
                ...prev,
                page: prev.page <= prev.totalPages ? prev.page + 1 : prev.page,
            }))
        } else {
            setPagination((prev) => ({
                ...prev,
                page: prev.page > 1 ? prev.page - 1 : prev.page,
            }))
        }
    }

    return (
        <Box width="100%" style={{ flex: 1 }} alignItems={'center'}>
            <SelectOption
                alignSelf="center"
                options={showOptions}
                handleOption={setOption}
                setPagination={setPagination}
                selected={option}
                w="50%"
                my="5"
            />
            <Pagination handlePage={handlePage} pagination={pagination} />
            {isLoading ? (
                <Loading />
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
