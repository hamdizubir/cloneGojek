import React, { Component } from 'react';
import { View } from 'react-native';
import NavBarIcon from '../../../components/molecules/NavBarIcon';

export default class NavBar extends Component {
    render() {
        return (
            <View style={{ height: 54, flexDirection: 'row' }}>
                <NavBarIcon
                    img={require('../../../assets/icon/home-active.png')}
                    title="Home"
                    active></NavBarIcon>
                <NavBarIcon
                    img={require('../../../assets/icon/order.png')}
                    title="Order"></NavBarIcon>
                <NavBarIcon
                    img={require('../../../assets/icon/help.png')}
                    title="Help"></NavBarIcon>
                <NavBarIcon
                    img={require('../../../assets/icon/inbox.png')}
                    title="Inbox"></NavBarIcon>
                <NavBarIcon
                    img={require('../../../assets/icon/account.png')}
                    title="Account"></NavBarIcon>
            </View>
        );
    }
}
