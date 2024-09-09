import { Text, TextInput, TouchableOpacity, View } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { useState } from 'react'
import { SafeAreaView } from "react-native-safe-area-context";

import styled from "./styled";

export default () => {

    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [senha0, setSenha0] = useState('')
    const [senha1, setSenha1] = useState('')
    const [posicao, setPosicao] = useState(false)  //tem que altera esse estado

    const navigation = useNavigation()

    const toSingIn = () => {
        navigation.navigate("singIn")
    }

    const navegar = () => {
        if (posicao == 'Maid') {
            navigation.reset({
                routes: [{ name: '' }]
            })
        }
        if (posicao == 'User') {
            navigation.reset({
                routes: [{ name: '' }]
            })
        } else {
            alert("Selecione o tipo de conta!")
        }
    }

    const validar = async () => {
        if (name != '' && email != '' && senha0 != '' && senha1 != '') {
            if (senha0 == senha1) {
                alert("tudo certo") // chamar a API
                if (true) {
                    navegar()
                } else {
                    alert("Erro da API")
                }
            } else {
                alert("As senha devem ser iguais!")
            }
        } else {
            alert("Prencha todos os Campos!")
        }
    }

    return (
        <SafeAreaView style={styled.safeArea}>
            <View style={styled.inputContainer} >


                <TextInput
                    value={name}
                    style={styled.inputs}
                    placeholder="Digite seu Nome Completo"
                    onChangeText={t => setName(t)}
                />

                <TextInput
                    value={email}
                    style={styled.inputs}
                    placeholder="Digite seu Email"
                    onChangeText={t => setEmail(t)}
                />

                <TextInput
                    secureTextEntry={true} //adicionar um icon que mude esse estado
                    value={senha0}
                    style={styled.inputs}
                    placeholder="Digite seu Senha"
                    onChangeText={t => setSenha0(t)}

                />

                <TextInput
                    secureTextEntry={true} //adicionar um icon que mude esse estado
                    value={senha1}
                    style={styled.inputs}
                    placeholder="Confirme a senha"
                    onChangeText={t => setSenha1(t)}
                />

                <TextInput
                    value='Tipo do usuario'
                />
            </View>

            <TouchableOpacity onPress={validar} style={styled.buttonSingUp} >
                <Text style={{ fontSize: 25, fontWeight: 'bold' }}>Cadastrar</Text>
            </TouchableOpacity>

            <TouchableOpacity onPress={toSingIn} style={styled.singMessageButto}>
                <Text >Ainda não possui uma conta?</Text>
                <Text style={styled.singMessageButtonTextBold}>Cadastre-se.</Text>
            </TouchableOpacity>

        </SafeAreaView>
    )
}