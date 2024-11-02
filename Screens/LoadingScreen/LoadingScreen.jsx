import { View, Image } from "react-native";
import styles from "./LoadingScreenStyles";


const LoadingScreen = () => {
    return(
        <View style={styles.container}>
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
export default LoadingScreen