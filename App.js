/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React from 'react';
import { ScrollView, View } from 'react-native';
import GoBanner from './src/components/molecules/GoBanner';
import GoInfo from './src/components/molecules/GoInfo';
import GoNews from './src/components/molecules/GoNews';
import SearchFeature from './src/components/molecules/SearchFeature';
import HomeGoPay from './src/containers/organisms/HomeGoPay';
import HomeMainFeature from './src/containers/organisms/HomeMainFeature';
import NavBar from './src/containers/organisms/NavBar/Index';
import ScrollableProduct from './src/containers/organisms/ScrollableProduct';

const App: () => React$Node = () => {
  return (
    <>
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
            img={require('./src/assets/dummy/sepak-bola.jpg')}
            title="Dimas Drajat selamatkan pinalti, Timnas U-23 kalahkan Brunei"></GoNews>
          {/* Internal information section */}
          <GoInfo
            img={require('./src/assets/dummy/facebook-connect.png')}
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
            logo={require('./src/assets/dummy/food-banner.jpg')}
            img={require('./src/assets/logo/go-food.png')}
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
    </>
  );
};

export default App;
