import AsyncStorage from "@react-native-async-storage/async-storage";
import { SafeAreaView } from "react-native-safe-area-context";
import { View, ActivityIndicator, Text } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { useEffect } from 'react'

import styled from "./styled";

export default () => {

    const navigation = useNavigation()

    const clearData = async () => {
        try {
            await AsyncStorage.multiRemove(await AsyncStorage.getAllKeys())
        } catch (error) {
            console.log(error)
        }
    }

    useEffect(() => {
            console.log("preload")
            const checktoken = async () => {
                const token = false //aqui tem que puxar o token com Async
                if (token) {
                    //validar o token
                } else {
                    clearData()
                    setTimeout(() => {
                        navigation.navigate('singIn')
                    }, 2000)
                }
            }
            checktoken()
        }, [])
    
    return (
        <SafeAreaView style={styled.safeConteiner} >
            <View >
                <Text> Carregando! </Text>
                <ActivityIndicator style={{ marginTop: 15 }} size={'large'} color={'#ffffff'} />
            </View>
        </SafeAreaView>
    )
}