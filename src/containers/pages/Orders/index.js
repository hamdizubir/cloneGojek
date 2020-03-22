import React from 'react'
import { Text, View, Button } from "react-native"
import NavBar from '../../organisms/NavBar';

const Orders = (props) =>{
    return(
        <View style={{flex:1}}>
            <View style={{flex:1}}>
                <Text>Order Page</Text>
                <Button title='go to detail' onPress={()=>props.navigation.navigate('OrderDetail')}></Button>
            </View>
            <NavBar></NavBar>
        </View>
    )
}

export default Orders;