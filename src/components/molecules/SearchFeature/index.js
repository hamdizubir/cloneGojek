import React from 'react'
import { View, TextInput, Image } from 'react-native';

const SearchFeature = (props) =>{
    return(
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
                source={require('../../../assets/icon/search.png')}></Image>
            </View>
            {/* Promo */}
            <View
              style={{
                width: 35,
                alignItems: 'center',
                justifyContent: 'center',
              }}>
              <Image source={require('../../../assets/icon/promo.png')}></Image>
            </View>
          </View>
    )
}

export default SearchFeature;