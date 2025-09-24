import A from "./screens/component.jsx";
import B from "./screens/b.jsx";

import { createNativeStackNavigator } from "@react-navigation/native-stack";
const Stack = createNativeStackNavigator();

export default function TabNavigator (){
    return (
        <Stack.Navigator
        initialRouteName="Tabs/A"
        screenOptions={{
            headerShown: false,
        }}>
            <Stack.Screen
                initialParams={{
                    screen: 'Tabs/A',
                }}
                options={{
                    unmountOnBlur: true,
                }}
                name="A"
                component={A}
            />

            <Stack.Screen
                initialParams={{
                    screen: 'Tabs/B',
                }}
                options={{
                    unmountOnBlur: true,
                }}
                name="B"
                component={B}
            />
        </Stack.Navigator>
    )
}