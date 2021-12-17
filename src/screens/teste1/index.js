import React, { useState } from 'react';
import { ScrollView, View } from 'react-native';

import { HomeHeader } from '../../components/HomeHeader'

export function Teste1() {
    const [screenPostion, setScreenPostion] = useState(0);

    function HanldeViewScroll(scrollY) {

        setScreenPostion(Math.round(scrollY))
    }

    return (
        <View style={{flex: 1, position: 'relative', zIndex: 1}}>
            <HomeHeader screenPosition={screenPostion} />
            <ScrollView style={{ position: 'relative' }} onScroll={event => HanldeViewScroll(event.nativeEvent.contentOffset.y)}>

                <View style={{ width: 300, height: 500, backgroundColor: '#d2d2d2', marginTop: 10 }} />
                <View style={{ width: 300, height: 500, backgroundColor: '#d2d2d2', marginTop: 10 }} />
                <View style={{ width: 300, height: 500, backgroundColor: '#d2d2d2', marginTop: 10 }} />
                <View style={{ width: 300, height: 500, backgroundColor: '#d2d2d2', marginTop: 10 }} />
                <View style={{ width: 300, height: 500, backgroundColor: '#d2d2d2', marginTop: 10 }} />
            </ScrollView>
        </View>
    );
}