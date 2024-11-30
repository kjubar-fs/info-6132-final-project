import { useState } from 'react';

import { Animated, useAnimatedValue } from 'react-native';

import { ClockScreen } from './Screens/ClockScreen/ClockScreen';
import { LoadingScreen } from './Screens/LoadingScreen/LoadingScreen';

// TODO: REMOVE IMPORTS AFTER TESTING
import { AnimatedArcana } from './components/AnimatedArcana/AnimatedArcana';
import { HoveringPersona } from './components/HoveringPersona/HoveringPersona';
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

    // TODO: REMOVE THIS RETURN AFTER TESTING (OR MOVE IT TO THE PROPER SCREEN)
    return(
        <AnimatedArcana delayContent={true} delayBackground={false}>
            <HoveringPersona personaImage={{uri: "https://megatenwiki.com/images/thumb/b/b3/P3_Orpheus_Artwork.png/599px-P3_Orpheus_Artwork.png"}}/>
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