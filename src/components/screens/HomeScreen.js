import React, { useState } from 'react'
import { Text, Box } from 'native-base'
import { TabView, SceneMap, TabBar } from 'react-native-tab-view'
import { render } from 'react-dom'

const Movies = () => (
    <Box width="100%">
        <Text>Movies Tab</Text>
    </Box>
)
const SearchResults = () => (
    <Box width="100%">
        <Text>Search Results Tab</Text>
    </Box>
)
const TVShows = () => (
    <Box width="100%">
        <Text>TV Shows Tab</Text>
    </Box>
)

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
    movies: Movies,
    searchResults: SearchResults,
    tvShows: TVShows,
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
                initialLayout={{ width: '100%' }}
                swipeEnabled={true}
            />
        </>
    )
}

export default HomeScreen
