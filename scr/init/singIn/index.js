import { SafeAreaView, View, TextInput, TouchableOpacity, Text, Image } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useNavigation } from "@react-navigation/native";


export default () => {

    const navigate = useNavigation()

    const toSingUp = () => {
        navigate.navigate('singUp')
    }

    return(
        <SafeAreaView>
            <View>
                <TextInput/>
                <TextInput/>
            </View>
            <TouchableOpacity>
                <Text>Login</Text>
            </TouchableOpacity>

            <TouchableOpacity onPress={toSingUp} >
                <Text>Não tem conta? Casdastre-se!</Text>
            </TouchableOpacity>
        </SafeAreaView>
    )
}