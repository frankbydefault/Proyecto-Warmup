import React, { useState } from 'react';
import { Text, TextInput, View,StyleSheet } from 'react-native';

const barraTexto = () =>{
    const [text,setText] = useState('');
    return(
        <TextInput
        style={{height: 60}}
        placeholder="Numero de cuotas"
        onChangeText={text => setText(text)}
        defaultValue={text}
      />
    );        
};

export default barraTexto;

const styles = StyleSheet.create({
    input:{
        height: 40,
        margin: 12,
        borderWidth: 1,
      },    
});