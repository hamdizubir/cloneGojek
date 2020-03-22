import React from 'react';
import { View, Image, TouchableOpacity, Text } from 'react-native';
const GoNews = (props) => {
    return(
    <View
      style={{
        paddingTop: 16,
        paddingHorizontal: 16,
        backgroundColor: 'white',
        marginBottom: 16,
      }}>
      <View style={{position: 'relative'}}>
        <Image
          source={props.img}
          style={{height: 170, width: '100%', borderRadius: 6}}></Image>
        <View
          style={{
            width: '100%',
            height: '100%',
            position: 'absolute',
            top: 0,
            left: 0,
            backgroundColor: 'black',
            opacity: 0.2,
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
            source={require('../../../assets/logo/white.png')}></Image>
        </View>
      </View>
      <View
        style={{
          paddingTop: 16,
          paddingBottom: 20,
          borderBottomColor: '#e8e9ed',
          borderBottomWidth: 1,
          backgroundColor: 'white',
        }}>
        <Text style={{fontSize: 16, fontWeight: 'bold', color: '#1c1c1c'}}>
          GO-NEWS
        </Text>
        <Text
          style={{
            fontSize: 14,
            fontWeight: 'normal',
            color: '#7a7a7a',
            marginBottom: 11,
          }}>
          {props.title}
        </Text>
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
            READ
          </Text>
        </TouchableOpacity>
      </View>
    </View>
    );
};
export default GoNews;
