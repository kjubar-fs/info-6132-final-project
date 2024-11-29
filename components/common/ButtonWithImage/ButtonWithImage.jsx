import { Pressable, Text, Image } from 'react-native'
import styles from './ButtonWithImageStyles'


export const ButtonWithImage = ({label, imgUrl, showImageOnLeft = true, theme = "dark", funcToCall = ()=>{}}) => {

    return(
        <Pressable style={[styles[theme].wrapper, !showImageOnLeft ? {flexDirection: 'row-reverse'} : {}]}
            onPress={funcToCall}
        >
            {
                imgUrl &&
                <Image
                    style={styles[theme].image}
                    source={imgUrl}
                />
            }
            <Text style={styles[theme].label}>{label}</Text>
        </Pressable>
    )
}