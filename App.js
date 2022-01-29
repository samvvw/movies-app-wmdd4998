import { StatusBar } from 'expo-status-bar'
import { NativeBaseProvider } from 'native-base'
import AppStack from './src/components/stacks/AppStack'

export default function App() {
    return (
        <NativeBaseProvider>
            <AppStack />
            <StatusBar />
        </NativeBaseProvider>
    )
}
