import React from 'react';
import {Image, View, Text, TouchableOpacity} from 'react-native';
const GoBanner = props => {
  return (
    <View style={{paddingHorizontal: 16}}>
      <View style={{position: 'relative'}}>
        <Image
          source={props.logo}
          style={{height: 170, width: '100%', borderRadius: 6}}></Image>
        <View
          style={{
            width: '100%',
            height: '100%',
            position: 'absolute',
            top: 0,
            left: 0,
            backgroundColor: 'black',
            opacity: 0.15,
            borderRadius: 6,
          }}></View>
        <View
          style={{
            height: 15,
            width: 55,
            position: 'absolute',
            top: 16,
            left: 16,
          }}>
          <Image
            style={{
              height: undefined,
              width: undefined,
              resizeMode: 'contain',
              flex: 1,
            }}
            source={props.img}></Image>
        </View>
        <View
          style={{
            position: 'absolute',
            bottom: 0,
            width: '100%',
            flexDirection: 'row',
            alignItems: 'center',
            paddingHorizontal: 16,
            paddingBottom: 6,
            
          }}>
          <View>
            <Text
              style={{
                fontSize: 18,
                fontWeight: 'bold',
                color: 'white',
                marginBottom: 8,
              }}>
              {props.title}
            </Text>
            <Text style={{fontSize: 14, fontWeight: '400', color: 'white'}}>
              {props.desc}
            </Text>
          </View>
          <View style={{flex: 1, paddingLeft: 12}}>
            <TouchableOpacity
              style={{
                backgroundColor: '#61A756',
                paddingHorizontal: 12,
                paddingVertical: 11,
                alignSelf: 'stretch',
                borderRadius: 4,
              }}>
              <Text
                style={{
                  color: 'white',
                  textAlign: 'center',
                  fontWeight: 'bold',
                }}>
                GET VOUCHER
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </View>
  );
};
export default GoBanner;
