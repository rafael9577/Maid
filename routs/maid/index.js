import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

export default () => {

    const tabs = createBottomTabNavigator()

    return(
        <tabs.Navigator>
            <tabs.Screen name="Main" component={''} />
        </tabs.Navigator>
    )
}
