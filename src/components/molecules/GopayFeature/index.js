import React from 'react'
import {
    Image,
    View,
    Text,
  } from 'react-native';

const GopayFeature = (props) => {
  return (
    <View style={{flex: 1, alignItems: 'center'}}>
      <Image source={props.img}></Image>
      <Text
        style={{
          fontSize: 13,
          color: 'white',
          marginTop: 15,
          fontWeight: 'bold',
        }}>
        {props.title}
      </Text>
    </View>
  );
};

export default GopayFeature;