import React from 'react';
import {StyleSheet,Text,View} from 'react-native';

export default class RegisterPage extends React.Component{
render (){
return(
<View style={styles.container}>
 <Text>RegisterPage</Text>
</View>
);
}
}

const styles =StyleSheet.create({
container: {
flex: 1
}
});