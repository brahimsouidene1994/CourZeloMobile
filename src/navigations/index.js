import * as React from 'react';

import AuthNavigator from './auth-navigator';
import AppNavigator from './app-navigator';
const a = false;
const RootNavigator = () => {
    return (
        a ?
            <AuthNavigator />
            :
            <AppNavigator />
    );
}

export default RootNavigator;