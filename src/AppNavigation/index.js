
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import BlackScreen from '../BlackScreen'
import WhiteScreen from '../WhiteScreen'


const Stack = createNativeStackNavigator();

const AppNavigation = () => {
    return (

        <NavigationContainer>
            <Stack.Navigator
                screenOptions={{ headerShown: false }}
            >
                <Stack.Screen
                    name="BlackScreen"
                    component={BlackScreen}
                />
                <Stack.Screen
                    name="WhiteScreen"
                    component={WhiteScreen}
                />
            </Stack.Navigator>
        </NavigationContainer>

    )
}
export default AppNavigation;