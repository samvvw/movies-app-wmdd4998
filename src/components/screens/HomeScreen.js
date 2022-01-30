import React, { useState } from 'react'
import { Text, Box } from 'native-base'
import { TabView, SceneMap, TabBar } from 'react-native-tab-view'
import MoviesView from '../views/MoviesView'
import TVShowsView from '../views/TVShowsView'
import SearchView from '../views/SearchView'

const renderLabel = ({ route }) => <Text color={'gray.900'}>{route.title}</Text>
const renderTabBar = (props) => (
    <TabBar
        {...props}
        indicatorStyle={{ backgroundColor: '#2c3e50' }}
        style={{ backgroundColor: 'white' }}
        renderLabel={renderLabel}
    />
)

const renderScene = SceneMap({
    movies: MoviesView,
    searchResults: SearchView,
    tvShows: TVShowsView,
})

const HomeScreen = () => {
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
