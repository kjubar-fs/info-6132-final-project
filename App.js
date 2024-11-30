import { useState } from 'react';

import { Animated, useAnimatedValue } from 'react-native';

import { ClockScreen } from './Screens/ClockScreen/ClockScreen';
import { LoadingScreen } from './Screens/LoadingScreen/LoadingScreen';

// TODO: REMOVE IMPORTS AFTER TESTING
import { AnimatedArcana } from './components/AnimatedArcana/AnimatedArcana';
import { TestChildrenForArcana } from './components/AnimatedArcana/TestChildrenForArcana';
// END OF TODO

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

    // TODO: REMOVE THIS RETURN AFTER TESTING
    return(
        <AnimatedArcana delayContent={true} delayBackground={false}>
            <TestChildrenForArcana/>
        </AnimatedArcana>
    )
    // END OF TODO

    return (
        <>
            <AppLoader onLoaded={fadeOutLoading} />
            <ClockScreen />
            {loading &&
                <Animated.View style={{position: "absolute", width: "100%", height: "100%", opacity: fadeAnim}}>
                    <LoadingScreen />
                </Animated.View>}
        </>
    );
}