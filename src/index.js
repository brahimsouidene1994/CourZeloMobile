import * as React from 'react';
import SplashScreen from 'react-native-splash-screen';
import {Platform, StatusBar} from 'react-native';
import Navigator from '_navigations';
const App = () => {

    React.useEffect(() => {
        SplashScreen.hide();
    });

    return (
        <>
        {Platform.OS === 'ios' && <StatusBar barStyle="light-content" />}
        <Navigator />
        </>
    );
}
export default App;