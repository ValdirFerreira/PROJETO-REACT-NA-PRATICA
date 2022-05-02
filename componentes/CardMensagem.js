import React from "react";
import { StyleSheet, Text, View } from "react-native-web";

export default function CardMensagem() {
    return (
        <View style={styles.cardMensagem}>
            <Text style={styles.tituloMensagem} >Post: User 01</Text>
            <Text style={styles.mensagem} >Canal Dev Net Core com muitas inoveções!</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    cardMensagem:
    {
        borderRadius: 10,
        borderWidth: 1,
        padding: 4,
        margin: 2,
        borderColor: 'gray',
        width: 320,
        height: 80,
        display: "flex",
        justifyContent: "center",
        backgroundColor: 'gray'
    },
    tituloMensagem:
    {
        fontSize: 16,
        textAlign:'center'
    },
    mensagem:
    {
        fontSize: 12,
        fontWeight:'normal',
        textAlign:'center'
    },
    


});