import React from 'react'
import {
    Image,
    View,
    Text,
  } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';

const GopayFeature = (props) => {
  return (
    <View style={{flex: 1, alignItems: 'center'}}>
      <TouchableOpacity onPress={props.onPress}>
      <Image source={props.img}></Image>
      <Text
        style={{
          fontSize: 13,
          color: 'white',
          marginTop: 15,
          fontWeight: 'bold',
          textAlign:'center'
        }}>
        {props.title}
      </Text>
    </TouchableOpacity>
    </View>
  );
};

export default GopayFeature;