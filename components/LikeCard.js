import React from 'react';
import { View, Image, Text, StyleSheet, TouchableOpacity, Alert } from 'react-native'
import { firebase_db } from "../firebaseConfig"
import Constants from 'expo-constants';

//MainPage로 부터 navigation 속성을 전달받아 Card 컴포넌트 안에서 사용
export default function LikeCard({content,navigation,reload}){

  const remove = () => {
    const user_id = Constants.installationId;
    firebase_db.ref('/like/'+user_id+'/'+content.idx).remove().then(function(){
      Alert.alert("삭제완료!");
      // navigation.navigate('LikePage')로 대체해서 적어도 가능
      reload()
    })
  }

    return(
        <View style={styles.card}>
            <Image style={styles.cardImage} source={{uri:content.image}}/>
            <View style={styles.cardText}>
                <Text style={styles.cardTitle} numberOfLines={1}>{content.title}</Text>
                <Text style={styles.cardDesc} numberOfLines={3}>{content.desc}</Text>
                <Text style={styles.cardDate}>{content.date}</Text>
                <View style={styles.buttonBox}>
                    <TouchableOpacity style={styles.button} onPress={()=>{navigation.navigate('DetailPage',{idx:content.idx})}}><Text style={styles.buttonText}>자세히보기</Text></TouchableOpacity>
                    <TouchableOpacity style={styles.button} onPress={()=>remove()}><Text style={styles.buttonText}>찜 해제</Text></TouchableOpacity>
                </View>
            </View>
        </View>
    )
}


const styles = StyleSheet.create({
    
    card:{
      flex:1,
      flexDirection:"row",
      margin:10,
      borderBottomWidth:0.5,
      borderBottomColor:"#eee",
      paddingBottom:10
    },
    cardImage: {
      flex:1,
      width:100,
      height:100,
      borderRadius:10,
    },
    cardText: {
      flex:2,
      flexDirection:"column",
      marginLeft:10,
    },
    cardTitle: {
      fontSize:20,
      fontWeight:"700"
    },
    cardDesc: {
      fontSize:15
    },
    cardDate: {
      fontSize:10,
      color:"#A6A6A6",
    },
    buttonBox:{
      flex:1,
      flexDirection:"row",
    },
    button:{
      width:90,
      marginTop:20,
      marginRight:10,
      marginLeft:10,
      padding:10,
      borderWidth:1,
      borderColor:'deeppink',
      borderRadius:7,
     
    },
    buttonText:{
        color:'deeppink',
        textAlign:'center'
    }
});