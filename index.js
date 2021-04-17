import React from 'react';
import {StyleSheet,Text,View,TouchableOpacity} from 'react-native';


export default class FirstPage extends React.Component{
render (){
return(
<View style={styles.container}>
 <TouchableOpacity
style={styles.buttonContainer}
onPress={()=>Actions.uyelogin()}
>
<Text style={styles.buttonText}>Uye Girisi</Text>
</TouchableOpacity>
 
<TouchableOpacity
style={styles.buttonContainer}
onPress={()=>Actions.yetkililogin()}
>
<Text style={styles.buttonText}>Yetkili Girisi</Text>
</TouchableOpacity>

 <TouchableOpacity
style={styles.buttonContainer}
onPress={()=>Actions.yetkiliregister()}
>
<Text style={styles.buttonText}>Yetkili Kayit</Text>
</TouchableOpacity>

<TouchableOpacity
style={styles.buttonContainer}
onPress={()=>Actions.uyeregister()}
>
<Text style={styles.buttonText}>Uye Kayit</Text>
</TouchableOpacity>

</View>
);
}
}

const styles =StyleSheet.create({
container: {
flex: 1,
alignItems:'center',
justifyContent:'center'
},
buttonContainer:{
width:300,
backgroundColor:'#f4a460',
borderRadius:25,
marginVertical:10,
paddingVertical:13
},
buttonText:{
textAlign:'center',
color:'#fff',
fontWeight:'500',
fontSize:16
}
});