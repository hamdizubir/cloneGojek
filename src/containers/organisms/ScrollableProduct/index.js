import React, { Component } from 'react'
import { View, Image, Text, ScrollView } from 'react-native'
import ScrollableItem from '../../../components/molecules/ScrollableItem'

export default class ScrollableProduct extends Component {
    render() {
        return (
            <View style={{marginBottom: 20}}>
            <View
              style={{
                height: 15,
                width: 60,
                marginLeft: -4,
                marginLeft: 16,
              }}>
              <Image
                style={{
                  height: undefined,
                  width: undefined,
                  flex: 1,
                  // backgroundColor:'grey',
                  resizeMode: 'contain',
                }}
                source={require('../../../assets/logo/go-food.png')}></Image>
            </View>

            <View
              style={{
                flex: 1,
                flexDirection: 'row',
                justifyContent: 'space-between',
                marginBottom: 16,
              }}>
              <Text
                style={{
                  fontSize: 17,
                  fontWeight: 'bold',
                  marginHorizontal: 16,
                  color: '#1c1c1c',
                }}>
                Nearby Restaurant
              </Text>
              <Text
                style={{
                  fontSize: 17,
                  fontWeight: 'bold',
                  marginHorizontal: 16,
                  color: '#61A756',
                }}>
                See All
              </Text>
            </View>
            <ScrollView horizontal={true} style={{paddingHorizontal: 16}}>
              <ScrollableItem img={require('../../../assets/dummy/go-food-kfc.jpg')} title='KFC'></ScrollableItem>
              <ScrollableItem img={require('../../../assets/dummy/go-food-banka.jpg')} title='Martabak Bangka'></ScrollableItem>
              <ScrollableItem img={require('../../../assets/dummy/go-food-gm.jpg')} title='Bakmi GM'></ScrollableItem>
              <ScrollableItem img={require('../../../assets/dummy/go-food-orins.jpg')} title='Martabak Orins'></ScrollableItem>
              <ScrollableItem img={require('../../../assets/dummy/go-food-pak-boss.jpg')} title='Gehu Pak Boss'></ScrollableItem>
            </ScrollView>
          </View>
        )
    }
}
