/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  Image,
  View,
  Text,
  StatusBar,
  TextInput,
  Button,
  TouchableOpacity,
} from 'react-native';

import {
  Header,
  LearnMoreLinks,
  Colors,
  DebugInstructions,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

const App: () => React$Node = () => {
  return (
    <>
      <View style={{flex: 1}}>
        <ScrollView style={{backgroundColor: 'white', flex: 1}}>
          <View
            style={{
              marginHorizontal: 17,
              flexDirection: 'row',
              paddingTop: 15,
            }}>
            {/* Search Bar */}
            <View style={{position: 'relative', flex: 1}}>
              <TextInput
                placeholder="What do you want to eat?"
                style={{
                  borderWidth: 1,
                  borderColor: '#e8e8e8',
                  borderRadius: 25,
                  height: 40,
                  fontSize: 13,
                  paddingLeft: 45,
                  paddingRight: 20,
                  backgroundColor: 'white',
                  marginRight: 18,
                }}></TextInput>
              <Image
                style={{top: 5, left: 12, position: 'absolute'}}
                source={require('./icon/search.png')}></Image>
            </View>
            {/* Promo */}
            <View
              style={{
                width: 35,
                alignItems: 'center',
                justifyContent: 'center',
              }}>
              <Image source={require('./icon/promo.png')}></Image>
            </View>
          </View>

          <View
            style={{
              marginHorizontal: 17,
              marginTop: 8,
            }}>
            {/* Gopay Section */}
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
                backgroundColor: '#2c5fb8',
                borderTopLeftRadius: 4,
                borderTopRightRadius: 4,
                padding: 14,
              }}>
              <Image source={require('./icon/gopay.png')}></Image>
              <Text style={{color: 'white', fontSize: 17, fontWeight: 'bold'}}>
                Rp 50.000
              </Text>
            </View>
            <View
              style={{
                flexDirection: 'row',
                paddingTop: 20,
                paddingBottom: 14,
                backgroundColor: '#2f65bd',
                borderBottomLeftRadius: 4,
                borderBottomRightRadius: 4,
              }}>
              <View style={{flex: 1, alignItems: 'center'}}>
                <Image source={require('./icon/pay.png')}></Image>
                <Text
                  style={{
                    fontSize: 13,
                    color: 'white',
                    marginTop: 15,
                    fontWeight: 'bold',
                  }}>
                  Pay
                </Text>
              </View>
              <View style={{flex: 1, alignItems: 'center'}}>
                <Image source={require('./icon/nearby.png')}></Image>
                <Text
                  style={{
                    fontSize: 13,
                    color: 'white',
                    marginTop: 15,
                    fontWeight: 'bold',
                  }}>
                  Nearby
                </Text>
              </View>
              <View style={{flex: 1, alignItems: 'center'}}>
                <Image source={require('./icon/topup.png')}></Image>
                <Text
                  style={{
                    fontSize: 13,
                    color: 'white',
                    marginTop: 15,
                    fontWeight: 'bold',
                  }}>
                  Top Up
                </Text>
              </View>
              <View style={{flex: 1, alignItems: 'center'}}>
                <Image source={require('./icon/more.png')}></Image>
                <Text
                  style={{
                    fontSize: 13,
                    color: 'white',
                    marginTop: 15,
                    fontWeight: 'bold',
                  }}>
                  More
                </Text>
              </View>
            </View>
          </View>
          {/* Main Feature */}
          <View style={{flexDirection: 'row', flexWrap: 'wrap', marginTop: 18}}>
            <View
              style={{
                justifyContent: 'space-between',
                flexDirection: 'row',
                width: '100%',
                marginBottom: 18,
              }}>
              <View style={{width: '25%', alignItems: 'center'}}>
                <View
                  style={{
                    width: 58,
                    height: 58,
                    borderWidth: 1,
                    borderColor: '#efefef',
                    borderRadius: 18,
                    justifyContent: 'center',
                    alignItems: 'center',
                  }}>
                  <Image source={require('./icon/go-ride.png')}></Image>
                </View>
                <Text
                  style={{
                    fontSize: 11,
                    fontWeight: 'bold',
                    textAlign: 'center',
                    marginTop: 6,
                  }}>
                  GO-RIDE
                </Text>
              </View>
              <View style={{width: '25%', alignItems: 'center'}}>
                <View
                  style={{
                    width: 58,
                    height: 58,
                    borderWidth: 1,
                    borderColor: '#efefef',
                    borderRadius: 18,
                    justifyContent: 'center',
                    alignItems: 'center',
                  }}>
                  <Image source={require('./icon/go-car.png')}></Image>
                </View>
                <Text
                  style={{
                    fontSize: 11,
                    fontWeight: 'bold',
                    textAlign: 'center',
                    marginTop: 6,
                  }}>
                  GO-CAR
                </Text>
              </View>
              <View style={{width: '25%', alignItems: 'center'}}>
                <View
                  style={{
                    width: 58,
                    height: 58,
                    borderWidth: 1,
                    borderColor: '#efefef',
                    borderRadius: 18,
                    justifyContent: 'center',
                    alignItems: 'center',
                  }}>
                  <Image source={require('./icon/go-bluebird.png')}></Image>
                </View>
                <Text
                  style={{
                    fontSize: 11,
                    fontWeight: 'bold',
                    textAlign: 'center',
                    marginTop: 6,
                  }}>
                  GO-BLUEBIRD
                </Text>
              </View>
              <View style={{width: '25%', alignItems: 'center'}}>
                <View
                  style={{
                    width: 58,
                    height: 58,
                    borderWidth: 1,
                    borderColor: '#efefef',
                    borderRadius: 18,
                    justifyContent: 'center',
                    alignItems: 'center',
                  }}>
                  <Image source={require('./icon/go-send.png')}></Image>
                </View>
                <Text
                  style={{
                    fontSize: 11,
                    fontWeight: 'bold',
                    textAlign: 'center',
                    marginTop: 6,
                  }}>
                  GO-SEND
                </Text>
              </View>
            </View>
            <View
              style={{
                justifyContent: 'space-between',
                flexDirection: 'row',
                width: '100%',
              }}>
              <View style={{width: '25%', alignItems: 'center'}}>
                <View
                  style={{
                    width: 58,
                    height: 58,
                    borderWidth: 1,
                    borderColor: '#efefef',
                    borderRadius: 18,
                    justifyContent: 'center',
                    alignItems: 'center',
                  }}>
                  <Image source={require('./icon/go-deals.png')}></Image>
                </View>
                <Text
                  style={{
                    fontSize: 11,
                    fontWeight: 'bold',
                    textAlign: 'center',
                    marginTop: 6,
                  }}>
                  GO-DEALS
                </Text>
              </View>
              <View style={{width: '25%', alignItems: 'center'}}>
                <View
                  style={{
                    width: 58,
                    height: 58,
                    borderWidth: 1,
                    borderColor: '#efefef',
                    borderRadius: 18,
                    justifyContent: 'center',
                    alignItems: 'center',
                  }}>
                  <Image source={require('./icon/go-pulsa.png')}></Image>
                </View>
                <Text
                  style={{
                    fontSize: 11,
                    fontWeight: 'bold',
                    textAlign: 'center',
                    marginTop: 6,
                  }}>
                  GO-PULSA
                </Text>
              </View>
              <View style={{width: '25%', alignItems: 'center'}}>
                <View
                  style={{
                    width: 58,
                    height: 58,
                    borderWidth: 1,
                    borderColor: '#efefef',
                    borderRadius: 18,
                    justifyContent: 'center',
                    alignItems: 'center',
                  }}>
                  <Image source={require('./icon/go-food.png')}></Image>
                </View>
                <Text
                  style={{
                    fontSize: 11,
                    fontWeight: 'bold',
                    textAlign: 'center',
                    marginTop: 6,
                  }}>
                  GO-FOOD
                </Text>
              </View>
              <View style={{width: '25%', alignItems: 'center'}}>
                <View
                  style={{
                    width: 58,
                    height: 58,
                    borderWidth: 1,
                    borderColor: '#efefef',
                    borderRadius: 18,
                    justifyContent: 'center',
                    alignItems: 'center',
                  }}>
                  <Image source={require('./icon/go-more.png')}></Image>
                </View>
                <Text
                  style={{
                    fontSize: 11,
                    fontWeight: 'bold',
                    textAlign: 'center',
                    marginTop: 6,
                  }}>
                  MORE
                </Text>
              </View>
            </View>
            <View style={{backgroundColor: 'grey', height: 30}}></View>
          </View>
          {/* Grey Space */}
          <View
            style={{
              backgroundColor: '#f2f2f4',
              height: 17,
              marginTop: 20,
            }}></View>
          {/* News Section */}
          <View>
            <View
              style={{
                paddingTop: 16,
                paddingHorizontal: 16,
                backgroundColor: 'white',
              }}>
              <View style={{position: 'relative'}}>
                <Image
                  source={require('./dummy/sepak-bola.jpg')}
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
                    source={require('./logo/white.png')}></Image>
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
                <Text
                  style={{fontSize: 16, fontWeight: 'bold', color: '#1c1c1c'}}>
                  GO-NEWS
                </Text>
                <Text
                  style={{
                    fontSize: 14,
                    fontWeight: 'normal',
                    color: '#7a7a7a',
                    marginBottom: 11,
                  }}>
                  Dimas Drajat selamatkan pinalti, Timnas U-23 kalahkan Brunei
                </Text>
                <TouchableOpacity
                  style={{
                    backgroundColor: '#61A756',
                    paddingHorizontal: 12,
                    paddingVertical: 11,
                    alignSelf: 'flex-end',
                    borderRadius: 4,
                  }}>
                  <Text style={{color: 'white', textAlign: 'center', fontWeight:'bold'}}>
                    READ
                  </Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>
          {/* Go-food banner */}
          <View style={{padding: 16}}>
            <View style={{position: 'relative'}}>
              <Image
                source={require('./dummy/food-banner.jpg')}
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
                  source={require('./logo/white.png')}></Image>
              </View>
              <View
                style={{
                  position: 'absolute',
                  bottom: 0,
                  width: '100%',
                  flexDirection: 'row',
                  alignItems:'center',
                  paddingHorizontal:16,
                  paddingBottom:16
                }}>
                <View>
                  <Text
                    style={{fontSize: 18, fontWeight: 'bold', color: 'white', marginBottom:8}}>
                    Free Go-food Voucher
                  </Text>
                  <Text
                    style={{fontSize: 14, fontWeight: '400', color: 'white'}}>
                    Quick, before they run out!
                  </Text>
                </View>
                <View style={{flex:1, paddingLeft:12,}}>
                  <TouchableOpacity
                    style={{
                      backgroundColor: '#61A756',
                      paddingHorizontal: 12,
                      paddingVertical: 11,
                      alignSelf: 'stretch',
                      borderRadius: 4,
                    }}>
                    <Text style={{color: 'white', textAlign: 'center', fontWeight:'bold', }}>
                      GET VOUCHER
                    </Text>
                  </TouchableOpacity>
                </View>
              </View>
            </View>
          </View>
          <View style={{borderBottomColor:'#e8e9ed',borderBottomWidth:1, marginBottom:20}}></View>
          
        </ScrollView>

        {/* Footer */}
        <View style={{height: 54, flexDirection: 'row'}}>
          <View
            style={{
              flex: 1,
              alignItems: 'center',
              justifyContent: 'center',
            }}>
            <Image
              style={{width: 26, height: 26}}
              source={require('./icon/home-active.png')}></Image>

            <Text style={{fontSize: 10, marginTop: 4, color: '#43ab4a'}}>
              Home
            </Text>
          </View>
          <View
            style={{
              flex: 1,
              alignItems: 'center',
              justifyContent: 'center',
            }}>
            <Image
              style={{width: 26, height: 26}}
              source={require('./icon/order.png')}></Image>

            <Text style={{fontSize: 10, marginTop: 4, color: '#545454'}}>
              Order
            </Text>
          </View>
          <View
            style={{
              flex: 1,
              alignItems: 'center',
              justifyContent: 'center',
            }}>
            <Image
              style={{width: 26, height: 26}}
              source={require('./icon/help.png')}></Image>

            <Text style={{fontSize: 10, marginTop: 4, color: '#545454'}}>
              Help
            </Text>
          </View>
          <View
            style={{
              flex: 1,
              alignItems: 'center',
              justifyContent: 'center',
            }}>
            <Image
              style={{width: 26, height: 26}}
              source={require('./icon/inbox.png')}></Image>

            <Text style={{fontSize: 10, marginTop: 4, color: '#545454'}}>
              Inbox
            </Text>
          </View>
          <View
            style={{
              flex: 1,
              alignItems: 'center',
              justifyContent: 'center',
            }}>
            <Image
              style={{width: 26, height: 26}}
              source={require('./icon/account.png')}></Image>

            <Text style={{fontSize: 10, marginTop: 4, color: '#545454'}}>
              Account
            </Text>
          </View>
        </View>
      </View>
    </>
  );
};

const styles = StyleSheet.create({});

export default App;
