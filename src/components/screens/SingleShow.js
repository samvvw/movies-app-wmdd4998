import React, { useEffect, useState } from 'react'
import { Text } from 'native-base'
import { fetchMovieApi } from '../../services/movieApiServices'
import SingleShowCard from '../container/SingleShowCard'
import Loading from '../container/Loading'

const SingleShow = ({ navigation, route }) => {
    const { id, title, showType } = route.params

    const [show, setShow] = useState(null)
    const [isLoading, setIsLoading] = useState(false)

    useEffect(() => {
        ;(async () => {
            setIsLoading(true)
            const result = await fetchMovieApi(showType, null, null, id)
            setShow(result)

            setIsLoading(false)
        })()
    }, [])

    return (
        <>
            {isLoading ? (
                <Loading />
            ) : (
                show && <SingleShowCard show={show} showType={showType} />
            )}
        </>
    )
}

export default SingleShow
