import React, { Component } from 'react'
import MainFeature from '../../../components/molecules/MainFeature'
import { View } from 'react-native'

export default class HomeMainFeature extends Component {
    render() {
        return (
            <View
            style={{
              flexDirection: 'row',
              flexWrap: 'wrap',
              marginTop: 18,
            }}>
            <MainFeature
              title="GO-RIDE"
              img={require('../../../assets/icon/go-ride.png')}></MainFeature>
            <MainFeature
              title="GO-CAR"
              img={require('../../../assets/icon/go-car.png')}></MainFeature>
            <MainFeature
              title="GO-BLUEBIRD"
              img={require('../../../assets/icon/go-bluebird.png')}></MainFeature>
            <MainFeature
              title="GO-SEND"
              img={require('../../../assets/icon/go-send.png')}></MainFeature>
            <MainFeature
              title="GO-DEALS"
              img={require('../../../assets/icon/go-deals.png')}></MainFeature>
            <MainFeature
              title="GO-PULSA"
              img={require('../../../assets/icon/go-pulsa.png')}></MainFeature>
            <MainFeature
              title="GO-FOOD"
              img={require('../../../assets/icon/go-food.png')}></MainFeature>
            <MainFeature
              title="MORE"
              img={require('../../../assets/icon/go-more.png')}></MainFeature>
          </View>
        )
    }
}
