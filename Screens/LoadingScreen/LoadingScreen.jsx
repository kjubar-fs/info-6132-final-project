import { View } from "react-native";

// use expo-image library for GIF support on Android
// mostly the same properties as a RN Image component but more performant as well,
// with additional features too
// requires an explicit height AND width, not just one or the other
import { Image } from "expo-image";

import styles from "./LoadingScreenStyles";

export const LoadingScreen = () => {
    return(
        <View style={styles.background}>
            <Image
                source={require('../../assets/takeYourTime.png')}
                style={styles.splash}
                contentFit="contain"
                alt="Joker take your time"
            />
            
            <Image
                source={require('../../assets/hat_p5_logo.gif')}
                style={styles.loader}
                contentFit="contain"
                alt="Persona 5 Logo"
            />
        </View>
    )
}