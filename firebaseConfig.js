import firebase from "firebase/compat/app";

// 사용할 파이어베이스 서비스 주석을 해제합니다
//import "firebase/compat/auth";
import "firebase/compat/database";
//import "firebase/compat/firestore";
//import "firebase/compat/functions";
import "firebase/compat/storage";


// Initialize Firebase
//파이어베이스 사이트에서 봤던 연결정보를 여기에 가져옵니다
const firebaseConfig = {
  apiKey: "AIzaSyBKG2xY91x23W8PF1231k5OUJ5o9kHSKYQeNWUw",
  authDomain: "sparta-psytest-gun.firebaseapp.com",
  databaseURL: "https://sparta-myhoneytip-jiho-default-rtdb.asia-southeast1.firebasedatabase.app/",
  projectId: "sparta-psytest-gun",
  storageBucket: "sparta-psytest-gun.appspot.com",
  messagingSenderId: "781790378482",
  appId: "1:78179037128482:web:ddbca5330779f67b947136b",
  measurementId: "G-3F5L9F3340Q3"
};

//사용 방법입니다. 
//파이어베이스 연결에 혹시 오류가 있을 경우를 대비한 코드로 알아두면 됩니다.
if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig);
}

export const firebase_db = firebase.database()