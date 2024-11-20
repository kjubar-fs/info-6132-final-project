import { View, Image } from "react-native";

import styles from "./LoadingScreenStyles";

export const LoadingScreen = () => {
    return(
        <View style={styles.container}>
            <Image
                source={require('../../assets/takeYourTime.png')}
                style={styles.jokerImg}
                alt="Joker take your time"
            />
            <View style={styles.imgContainer}>
                <Image 
                    source={require('../../assets/hat_p5_logo.gif')}
                    style={styles.img}
                    alt="Persona 5 Logo"
                />
            </View>
        </View>
    )
}