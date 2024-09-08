import { View, Image, SafeAreaView, ActivityIndicator } from "react-native";
import { useNavigation } from "@react-navigation/native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useEffect } from 'react'

export default () => {

    const navigation = useNavigation()

    const clearData = async () => {
        try {
            await AsyncStorage.multiRemove( await AsyncStorage.getAllKeys())
        } catch (error) {
            console.log(error)
        }

        useEffect(() => {
            const checktoken = async () => {
                const token = false //aqui tem que puxar o token com Async
                if (token) {
                    //validar o token
                } else {
                    clearData()
                    setTimeout(() => {
                        navigation.navigate('SingIn')
                    }, 2000)
                }
            }
            checktoken()
        }, [])

        return (
            <SafeAreaView>
                <View>
                    <Image />
                    <Text> Carregando! </Text>
                    <ActivityIndicator style={{ marginTop: 15 }} size={'large'} color={'#ffffff'} />
                </View>
            </SafeAreaView>
        )
    }
}