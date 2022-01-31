import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import HomeScreen from '../screens/HomeScreen'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import SingleShow from '../screens/SingleShow'

const Stack = createNativeStackNavigator()

const AppStack = () => (
    <NavigationContainer>
        <Stack.Navigator>
            <Stack.Screen
                name="Home"
                component={HomeScreen}
                options={{
                    title: 'Movies App',
                    headerStyle: {
                        backgroundColor: '#2c3e50',
                    },
                    headerTitleStyle: {
                        color: '#fff',
                    },
                }}
            />
            <Stack.Screen name="Single" component={SingleShow} />
        </Stack.Navigator>
    </NavigationContainer>
)

export default AppStack
