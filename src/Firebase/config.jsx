import {initializeApp} from 'firebase/app';

const firebaseConfig = {
    apiKey: "AIzaSyDvmjsacvkNbKDOIWywKhrSCBazQLsIq60",
    authDomain: "react-js-57e94.firebaseapp.com",
    projectId: "react-js-57e94",
    storageBucket: "react-js-57e94.appspot.com",
    messagingSenderId: "931648515686",
    appId: "1:931648515686:web:530dc80b20396edab0c7a7",
    measurementId: "G-XJ20PB79EL"
  };
  
  const app = initializeApp(firebaseConfig);

  export default function getFiresotreApp(){
      return app
  }