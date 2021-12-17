import React from 'react';
import { NavigationContainer } from '@react-navigation/native'

import { MyTabs } from './Tabs.routes'

export const Routes = () => {
    return (
        <NavigationContainer>
            <MyTabs />
        </NavigationContainer>
    )
}