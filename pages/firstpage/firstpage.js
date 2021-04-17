import React from 'react';
import {StyleSheet,Text,View} from 'react-native';

export default class FirstPage extends React.Component{
render (){
return(
<View style={styles.container}>
 <Text>FirstPage</Text>
</View>
);
}
}

const styles =StyleSheet.create({
container: {
flex: 1
}
});