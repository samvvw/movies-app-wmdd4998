import { StatusBar } from 'expo-status-bar'
import { NativeBaseProvider, extendTheme } from 'native-base'
import AppStack from './src/components/stacks/AppStack'

export default function App() {
    const theme = extendTheme({
        components: {
            FormControl: {
                baseStyle: {
                    fontSize: 'xl',
                },
            },
        },
    })
    return (
        <NativeBaseProvider>
            <AppStack />
            <StatusBar style="light" />
        </NativeBaseProvider>
    )
}
