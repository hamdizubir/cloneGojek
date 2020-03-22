import React from 'react';
import {Image, View, Text, TouchableOpacity} from 'react-native';

const GoInfo = props => {
  return (
    <View style={{marginBottom: 16, paddingHorizontal: 16}}>
      <View style={{height: 15, width: 60, marginLeft: -4}}>
        <Image
          style={{
            height: undefined,
            width: undefined,
            resizeMode: 'contain',
            flex: 1,
          }}
          source={require('../../../assets/logo/gojek.png')}></Image>
      </View>
      <Text
        style={{
          fontSize: 17,
          fontWeight: 'bold',
          color: '#1c1c1c',
          marginTop: 15,
          marginBottom: 20,
        }}>
        {props.mainTitle}
      </Text>
      <View style={{flexDirection: 'row'}}>
        <View>
          <Image source={props.img}></Image>
        </View>
        <View style={{marginLeft: 16, flex: 1, marginBottom: 16}}>
          <Text style={{fontSize: 15, fontWeight: 'bold', color: '#4a4a4a'}}>
            {props.title}
          </Text>
          <Text
            style={{
              fontSize: 15,
              fontWeight: 'normal',
              color: '#4a4a4a',
              width: '70%',
            }}>
            {props.desc}
          </Text>
        </View>
      </View>
      <TouchableOpacity
        style={{
          backgroundColor: '#61A756',
          paddingHorizontal: 12,
          paddingVertical: 11,
          alignSelf: 'flex-end',
          borderRadius: 4,
        }}>
        <Text
          style={{
            color: 'white',
            textAlign: 'center',
            fontWeight: 'bold',
          }}>
          CONNECT
        </Text>
      </TouchableOpacity>
    </View>
  );
};
export default GoInfo;
