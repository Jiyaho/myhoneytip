import React, { useState, useEffect } from 'react';
import { StyleSheet, ScrollView } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import LikeCard from '../components/LikeCard';
import {firebase_db} from "../firebaseConfig"
import Constants from 'expo-constants';
import Loading from '../components/Loading';


export default function LikePage({navigation,route}) {

    const [tip, setTip] = useState([])
    const [ready, setReady] = useState(true)

    useEffect(()=>{
        navigation.setOptions({
            title:"꿀팁 찜",
                headerStyle: {
                    backgroundColor: 'white',
                    shadowColor: 'white',
                },
                headerTintColor: 'black',
            })
        const user_id = Constants.installationId;
            firebase_db.ref('/like/'+user_id).once('value').then((snapshot) => {
                console.log("파이어베이스에서 데이터 가져왔습니다!!")
                let tip = snapshot.val();
                console.log(tip)
                if(tip.length > 0) {
                    setTip(tip)
                    setReady(false)
                }
            })
        },[])

    return ready ? <Loading/> :  (
        // ScrollView에서의 flex 숫자는 의미가 없습니다. 정확히 보여지는 화면을 몇등분 하지 않고
        // 화면에 넣은 컨텐츠를 모두 보여주려 스크롤 기능이 존재하기 때문입니다. 
        // 여기선 내부의 컨텐츠들 영역을 결정짓기 위해서 height 값과 margin,padding 값을 적절히 잘 이용해야 합니다. 

        <ScrollView style={styles.container}>
            <StatusBar style="black" />
            {
                tip.map((content,i)=>{
                    return(<LikeCard content={content} key={i} navigation={navigation}/>)
                })
            }
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    container:{
        backgroundColor:"#fff"
    }    
})