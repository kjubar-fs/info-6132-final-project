import { useEffect, useState } from "react";
import { Image, StyleSheet, View, ImageBackground } from "react-native";

export const AnimatedArcana = ({children, arcana = "https://static.wikia.nocookie.net/megamitensei/images/5/53/Fool-0.png/revision/latest?cb=20160404201043", background = require('../../assets/chainsBg.webp'), delayContent = false, delayBackground = false}) => {

    const [animatedValue, setAnimatedValue] = useState(0)
    const [showContent, setShowContent] = useState(!delayContent)
    const [showBackground, setShowBackground] = useState(!delayBackground)

    useEffect(() => {
        const interval = setInterval(()=>{
            setAnimatedValue(prev => {
                if(prev < 1){
                    return prev + 0.01
                }
                else{
                    setShowBackground(true)
                    setShowContent(true)
                    return prev
                }
            })
        },10)

        return ()=>{clearInterval(interval)}

      }, []);

    const styles = StyleSheet.create({
        // // Starting position
        // imgStart: {
        //     transform: [{skewX: '0deg'}, {skewY: '0deg'}, {rotateY: '0deg'}, {rotateZ: '720deg'}],
        //     marginBottom: 100,
        //     marginRight: -800,
        // },
        // // End position
        // imgEnd: {
        //     transform: [{skewX: '5deg'}, {skewY: '5deg'}, {rotateY: '10deg'}, {rotateZ: '-15deg'}],
        //     marginBottom: 0,
        //     marginRight: 100,
        // },
        img: {
            transform: [
                {skewX: `${animatedValue*5}deg`}, 
                {skewY: `${animatedValue*5}deg`},
                {rotateY: `${animatedValue*10}deg`},
                {rotateZ: `${705 - animatedValue*720}deg`}
            ],
            marginBottom: 100 - animatedValue*100,
            marginRight: animatedValue*900 - 800,
            zIndex: 100,
        }
    })


    return(
        <ImageBackground 
        source={background}
        style={{
            flex: 1,
            width: '100%',
            height: '100%',
            justifyContent: 'center',
            alignItems: 'center',
            zIndex: -100,
        }}>
            <Image
            style={styles.img}
            source={{uri: arcana}}
            width={150}
            height={200}
            resizeMode="contain"
            />
            <View style={{
                position: 'absolute',
                width: '100%',
                height: '100%',
                zIndex: 200,
            }}>
                {
                    showContent &&
                    children
                }
            </View>
        </ImageBackground>
    )
}
