import React, { useState } from 'react'
import { Text } from 'native-base'
import { TabView, TabBar } from 'react-native-tab-view'
import SearchView from '../views/SearchView'
import ShowView from '../views/ShowView'
import { MOVIES_OPTIONS, TV_SHOWS_OPTIONS } from '../../config/config'

const renderLabel = ({ route }) => <Text color={'gray.900'}>{route.title}</Text>
const renderTabBar = (props) => (
    <TabBar
        {...props}
        indicatorStyle={{ backgroundColor: '#2c3e50', height: 4 }}
        style={{ backgroundColor: 'white' }}
        renderLabel={renderLabel}
    />
)

// const renderScene = SceneMap({
//     movies: MoviesView,
//     searchResults: SearchView,
//     tvShows: TVShowsView,
// })

const HomeScreen = (props) => {
    const renderScene = ({ route }) => {
        switch (route.key) {
            case 'movies':
                return (
                    <ShowView
                        showType="movie"
                        showOptions={MOVIES_OPTIONS}
                        defaultValue={MOVIES_OPTIONS.nowPlaying.value}
                        navigation={props.navigation}
                    />
                )
            case 'searchResults':
                return <SearchView navigation={props.navigation} />
            case 'tvShows':
                return (
                    <ShowView
                        showType="tv"
                        showOptions={TV_SHOWS_OPTIONS}
                        defaultValue={TV_SHOWS_OPTIONS.popular.value}
                        navigation={props.navigation}
                    />
                )
            default:
                return null
        }
    }
    const [index, setIndex] = useState(0)
    const [routes] = useState([
        { key: 'movies', title: 'Movies' },
        { key: 'searchResults', title: 'Search Results' },
        { key: 'tvShows', title: 'TV Shows' },
    ])
    return (
        <>
            <TabView
                navigationState={{ index, routes }}
                renderScene={renderScene}
                renderTabBar={renderTabBar}
                onIndexChange={setIndex}
                swipeEnabled={true}
            />
        </>
    )
}

export default HomeScreen
