import React,{useEffect} from 'react';
import { StyleSheet, View, Text, Image, TouchableOpacity } from 'react-native'
import aboutImage from '../assets/aboutImage.png'
import { StatusBar } from 'expo-status-bar';
import * as Linking from 'expo-linking';

export default function AboutPage({navigation,route}) {

    useEffect(()=>{
        navigation.setOptions({
            title:"소개 페이지",
            headerStyle: {
                backgroundColor: 'navy',
                shadowColor: "#000",
            },
            headerTintColor: "#fff",
        })
    },[])

    const link = () => {
        Linking.openURL("https://jiyaho.tistory.com/")}

    return (
        <View style={styles.container}>
            <StatusBar style="light" />
            <Text style={styles.title}>Hi! 스파르타코딩 앱개발반에 오신것을 환영합니다</Text>
            <View style={styles.middleContainer}>
                <Image style={styles.aboutImage} source={aboutImage} />
                <Text style={styles.middleText1}>많은 내용을 간결하게 담아내려 노력했습니다!</Text>
                <Text style={styles.middleText2}>꼭 완주 하셔서 꼭 여러분것으로 만들어가시길 바랍니다</Text>
                <TouchableOpacity style={styles.button1}>
                    <Text style={styles.buttonText1} onPress={()=>link()}>여러분의 인스타계정</Text>
                </TouchableOpacity>
            </View>
        </View>
        )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: "navy",
        width: "100%",
        height: "100%"
    },
    title: {
        fontSize: 31,
        color: "white",
        fontWeight: "bold",
        marginTop: 25,
        marginLeft: 30,
        marginRight: 30
    },
    middleContainer: {
        width: "83%",
        height: 520,
        margin: 30,
        marginTop: 45,
        borderRadius: 20,
        borderColor: "red",
        backgroundColor: "white",
        padding: 30
    },
    aboutImage: {
        width: 160,
        height: 150,
        alignSelf:"center",
        marginTop: 60,
        marginBottom: 20,
        borderRadius: 25
    },
    middleText1: {
        fontSize: 20,
        fontColor: "black",
        fontWeight: "bold",
        textAlign: "center",
        marginBottom: 17
    },
    middleText2: {
        fontColor: "black",
        fontSize: 15,
        fontWeight: "bold",
        textAlign: "center",
        marginBottom: 20
    },
    button1: {
        width:140,
        height:50,
        padding:17,
        backgroundColor:"#fdc453",
        borderColor:"deeppink",
        borderRadius:15,
        alignSelf: "center"
    },
    buttonText1: {
        fontSize: 13,
        fontWeight: "bold",
        color: "white",
        textAlign: "center"
    }
})