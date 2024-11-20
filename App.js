import { useState } from 'react';

import { Animated, useAnimatedValue } from 'react-native';

import { NavigationContainer } from '@react-navigation/native';

import { HomeScreen } from './Screens/HomeScreen';
import { LoadingScreen } from './Screens/LoadingScreen/LoadingScreen';

import { AppLoader } from './components/AppLoader';

export default function App() {
    const [loading, setLoading] = useState(true);

    const fadeAnim = useAnimatedValue(1);

    const fadeOutLoading = () => {
        Animated.timing(fadeAnim, {
            toValue: 0,
            duration: 1500,
            useNativeDriver: true,
        }).start(() => {
            setLoading(false);
        });
    };

    return (
        <NavigationContainer>
            <AppLoader onLoaded={fadeOutLoading} />
            <HomeScreen />
            {loading &&
                <Animated.View style={{position: "absolute", width: "100%", height: "100%", opacity: fadeAnim}}>
                    <LoadingScreen />
                </Animated.View>}
        </NavigationContainer>
    );
}