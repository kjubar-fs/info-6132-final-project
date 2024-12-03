import { Text, Image, Pressable } from "react-native";

export const BigImageButton = ({onPress = ()=>{console.log("Pressed")}, label, image, isDaylight}) => {

    return(
        <Pressable
        onPress={onPress}
        style={{
            flexDirection: 'column',
            width: '25%',
            height: 100,
        }}
        >
            <Text
                style={{
                    fontSize: 20, 
                    textAlign: "center",
                    color: isDaylight ? "black" : "white",
                    marginVertical: 10,
                }}
            >{label}</Text>
            <Image
            source={image}
            style={{
                width: '100%',
                height: '100%',
                resizeMode: 'contain',
            }}
            />
        </Pressable>
    )
}