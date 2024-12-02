import { StyleSheet } from "react-native";

const imgSize = 30

const commonStyles = StyleSheet.create({
    wrapper: {
        alignSelf: 'flex-start',
        flexDirection: 'row',
        alignItems: 'center',
        margin: 10,
        borderRadius: 10,
    },
    image: {
        width: imgSize,
        height: imgSize,
        resizeMode: 'contain',
        marginHorizontal: 5,
    },
    label: {
        fontSize: 18,
    }
})

export default ButtonWithImageStyles = StyleSheet.create({
    dark: {
        wrapper: {
            ...commonStyles.wrapper,
        },
        image: {
            ...commonStyles.image,
        },
        label: {
            ...commonStyles.label,
            color: 'white',
        }
    },
    light: {
        wrapper: {
            ...commonStyles.wrapper,
        },
        image: {
            ...commonStyles.image,
        },
        label: {
            ...commonStyles.label,
            color: 'black',
        }      
    }
})