import React from 'react';
import { View, Image, Text } from 'react-native';

const ScrollableItem = props => {
  return (
    <View
      style={{
        justifyContent: 'center',
        alignItems: 'center',
        marginRight: 16,
      }}>
      <View
        style={{
          height: 150,
          width: 150,
        }}>
        <Image
          source={props.img}
          style={{
            borderRadius: 10,
            height: undefined,
            width: undefined,
            flex: 1,
            resizeMode: 'cover',
          }}></Image>
      </View>
      <Text
        style={{
          fontSize: 16,
          fontWeight: 'bold',
          color: '#1c1c1c',
          marginTop: 8,
        }}>
        {props.title}
      </Text>
    </View>
  );
};

export default ScrollableItem;
