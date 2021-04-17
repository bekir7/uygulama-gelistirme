import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import HomeScreen from "./src/screens/HomeScreen";
import {StyleSheet} from 'react-native';
import Indexs from "./src"
import React,{Component} from 'react';
import LoginPage1 from './src/pages/login/uyelogin';
import RegisterPage1 from './src/pages/register/uyeregister';
import LoginPage2 from './src/pages/login/yetkililogin';
import RegisterPage2 from './src/pages/register/yetkiliregister';
import {Scene,Router,Stack} from 'react-native-router-flux';
import{LogBox} from 'react-native'
LogBox.ignoreLogs(['Warning: isMounted(...) is deprecated','Module RCTImageLoader']) ;
export default class App extends Component{
render(){
return(
<Router navigationBarStyle={styles.navBar}>
<Stack key="root">
 <Scene key="index" component={Indexs} title="Anasayfa" initial/>
 <Scene key="uyelogin" component={LoginPage1} title="Uye Giris yapiniz" />
<Scene key="uyeregister" component={RegisterPage1} title="Uye Kayit olun" />
<Scene key="yetkililogin" component={LoginPage2} title="Yetkili Giris yapiniz" />
<Scene key="yetkiliregister" component={RegisterPage2} title="Yetkili Kayit olun" />
</Stack>
</Router>
);
}
}
const styles=StyleSheet.create({
navBar:{
backgroundColor: '#f4a460'
}
});
