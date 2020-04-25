import React, {Component} from 'react';
import {Text, View, TouchableOpacity} from 'react-native';
import {RNCamera} from 'react-native-camera';

const IconWithText = (props) => {
  return (
    <View>
      <View
        style={{
          width: 60,
          height: 60,
          borderRadius: 600,
          backgroundColor: '#61A756',
        }}
      />
      <Text style={{maxWidth: 70, textAlign: 'center', marginTop: 10}}>
        {props.title}
      </Text>
    </View>
  );
};

const IconAction = () => {
  return (
    <View
      style={{
        width: 35,
        height: 35,
        borderRadius: 35,
        backgroundColor: 'white',
      }}></View>
  );
};

export default class ScanQRCode extends Component {
  state = {
    barcode: '',
  };
  render() {
    return (
      <View style={{flex: 1}}>
        <View style={{flex: 1, backgroundColor: 'grey'}}>
          {/* Camera */}
          <RNCamera
            ref={(ref) => {
              this.camera = ref;
            }}
            style={{
              justifyContent: 'flex-end',
              alignItems: 'center',
              width: '100%',
              height: '100%',
            }}
            type={RNCamera.Constants.Type.back}
            flashMode={RNCamera.Constants.FlashMode.on}
            androidCameraPermissionOptions={{
              title: 'Permission to use camera',
              message: 'We need your permission to use your camera',
              buttonPositive: 'Ok',
              buttonNegative: 'Cancel',
            }}
            androidRecordAudioPermissionOptions={{
              title: 'Permission to use audio recording',
              message: 'We need your permission to use your audio',
              buttonPositive: 'Ok',
              buttonNegative: 'Cancel',
            }}
            onBarCodeRead={({barcodes}) => {
              console.log(barcodes);
              this.setState({
                barcode: barcodes,
              });
              alert(barcodes)
            }}
          />
          <View
            style={{
              flexDirection: 'row',
              paddingHorizontal: 16,
              justifyContent: 'space-between',
              marginTop: 16,
              position: 'absolute',
              width: '100%',
            }}>
            <IconAction />
            <View
              style={{
                flexDirection: 'row',
                width: 80,
                justifyContent: 'space-between',
              }}>
              <IconAction />
              <IconAction />
            </View>
            {/* <View
              style={{flex: 0, flexDirection: 'row', justifyContent: 'center'}}>
              <TouchableOpacity
                onPress={this.takePicture.bind(this)}
                style={{flex: 0,
                  backgroundColor: '#fff',
                  borderRadius: 5,
                  padding: 15,
                  paddingHorizontal: 20,
                  alignSelf: 'center',
                  margin: 20,}}>
                <Text style={{fontSize: 14}}> SNAP </Text>
              </TouchableOpacity>
            </View> */}
          </View>
        </View>
        <View
          style={{
            height: 200,
            backgroundColor: 'white',
            paddingHorizontal: 16,
          }}>
          <View style={{alignItems: 'center'}}>
            <View
              style={{
                backgroundColor: 'grey',
                width: 45,
                height: 3,
                marginTop: 8,
              }}
            />
            <View
              style={{
                backgroundColor: 'grey',
                width: 45,
                height: 3,
                marginVertical: 2,
              }}
            />
          </View>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              alignItems: 'center',
            }}>
            <Text
              style={{
                fontSize: 24,
                fontWeight: 'bold',
              }}>{`More Options ${this.state.barcode}`}</Text>
            <Text style={{fontSize: 20, color: '#61A756', fontWeight: 'bold'}}>
              Shortcut
            </Text>
          </View>
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'flex-start',
              marginTop: 14,
              width: '100%',
            }}>
            <View
              style={{
                flexDirection: 'row',
                alignItems: 'flex-start',
                width: 160,
                justifyContent: 'space-between',
                paddingRight: 14,
              }}>
              <IconWithText title="Phone Number" />
              <IconWithText title="Gopay Code" />
            </View>
            <View style={{width: 2, height: 60, backgroundColor: 'grey'}} />
            <View style={{flex: 1, paddingLeft: 12}}>
              <Text>
                Your recent Go-Pay receivers will show here, no admin fees!
              </Text>
            </View>
          </View>
        </View>
      </View>
    );
  }
}
