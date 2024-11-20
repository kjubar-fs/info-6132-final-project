import { View, Image } from "react-native";

import styles from "./LoadingScreenStyles";

export const LoadingScreen = () => {
    return(
        <View style={styles.background}>
            <Image
                source={require('../../assets/takeYourTime.png')}
                style={styles.splash}
                resizeMode="contain"
                alt="Joker take your time"
            />
            
            <Image
                source={require('../../assets/hat_p5_logo.gif')}
                style={styles.loader}
                resizeMode="contain"
                alt="Persona 5 Logo"
            />
        </View>
    )
}