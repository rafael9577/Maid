import { createStackNavigator } from "@react-navigation/stack";

import preload from '../scr/init/preload'
import singIn from '../scr/init/singIn'
import singUp from '../scr/init/singUp'
import user from './user'
import maid from './maid'

export default () => {

    const stack = createStackNavigator()

    return (
        <stack.Navigator initialRouteName='preload' screenOptions={{ headerShown: false }}>
            <stack.Screen name="preload" component={preload} />
            <stack.Screen name="singIn" component={singIn} />
            <stack.Screen name="singUp" component={singUp} />
            <stack.Screen name="user" component={user} />
            <stack.Screen name="maid" component={maid} />
        </stack.Navigator>
    )

}