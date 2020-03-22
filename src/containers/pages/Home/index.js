import React, {Component} from 'react';
import {ScrollView, View} from 'react-native';
import GoBanner from '../../../components/molecules/GoBanner';
import GoInfo from '../../../components/molecules/GoInfo';
import GoNews from '../../../components/molecules/GoNews';
import SearchFeature from '../../../components/molecules/SearchFeature';
import HomeGoPay from '../../../containers/organisms/HomeGoPay';
import HomeMainFeature from '../../../containers/organisms/HomeMainFeature';
import ScrollableProduct from '../../../containers/organisms/ScrollableProduct';
import NavBar from '../../../containers/organisms/NavBar';

export default class Home extends Component {
  render() {
    return (
      <View style={{flex: 1}}>
        <ScrollView style={{backgroundColor: 'white', flex: 1}}>
          {/* Search Bar */}
          <SearchFeature />
          {/* Gopay Section */}
          <HomeGoPay></HomeGoPay>
          {/* Main Feature */}
          <HomeMainFeature></HomeMainFeature>
          {/* Grey Space */}
          <View
            style={{
              backgroundColor: '#f2f2f4',
              height: 17,
              marginTop: 20,
            }}></View>
          {/* News Section */}
          <GoNews
            img={require('../../../assets/dummy/sepak-bola.jpg')}
            title="Dimas Drajat selamatkan pinalti, Timnas U-23 kalahkan Brunei"
            onPress={() => this.props.navigation.navigate('NewsDetail')}
            ></GoNews>
          {/* Internal information section */}
          <GoInfo
            img={require('../../../assets/dummy/facebook-connect.png')}
            mainTitle="COMPLETE YOUR PROFILE"
            title="Connect with Facebook"
            desc="Login faster without verification code"></GoInfo>

          {/* Grey Line */}
          <View
            style={{
              borderBottomColor: '#e8e9ed',
              borderBottomWidth: 1,
              marginBottom: 16,
            }}></View>

          {/* Go-food banner */}
          <GoBanner
            logo={require('../../../assets/dummy/food-banner.jpg')}
            img={require('../../../assets/logo/go-food.png')}
            title="Free Go-food Voucher"
            desc="Quick, before they run out!"></GoBanner>

          {/* Grey Line */}
          <View
            style={{
              borderBottomColor: '#e8e9ed',
              borderBottomWidth: 1,
              marginBottom: 20,
            }}></View>

          {/* Nearby go Food */}
          <ScrollableProduct></ScrollableProduct>

          {/* Grey Line */}
          <View
            style={{
              borderBottomColor: '#e8e9ed',
              borderBottomWidth: 1,
              marginBottom: 20,
            }}></View>
        </ScrollView>

        {/* Nav Bar */}
        <NavBar></NavBar>
      </View>
    );
  }
}
