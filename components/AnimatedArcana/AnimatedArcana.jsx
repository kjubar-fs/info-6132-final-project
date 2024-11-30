import { useEffect, useState } from "react";
import { Image, StyleSheet, View, ImageBackground } from "react-native";
import { cardImage } from "../../utilities/arcanasImages";

// TODO: CLEAR THE DEFAULT PROPS FOR arcana AND background AFTER TESTING
export const AnimatedArcana = ({children, arcana, background = require('../../assets/chainsBg.webp'), delayContent = false, delayBackground = false}) => {

    const cardBackground = cardImage["CardBack"]
    const arcanaImage = cardImage[arcana]

    const [animatedValue, setAnimatedValue] = useState(0)
    const [extraYRotation, setExtraYRotation] = useState(0)
    const [showContent, setShowContent] = useState(!delayContent)
    const [showBackground, setShowBackground] = useState(!delayBackground)
    const [displayImage, setDisplayImage] = useState(arcanaImage)

    useEffect(() => {
        const interval = setInterval(()=>{
            setAnimatedValue(prev => {
                if(prev < 1){
                    return prev + 0.01
                }
                else{
                    setShowBackground(true)
                    setShowContent(true)
                    // starts rotating the card on its Y axis after completing the initial animation
                    setExtraYRotation(prevY => prevY + 0.1)
                    return prev
                }
            })
        },10)

        return ()=>{clearInterval(interval)}

      }, []);

    useEffect(()=>{
        // Whenever the card flips, changes the image to display from the front to the back of the card
        // The comparison is made against 8 because the card should change at 90deg and the final position has a 10deg offset already
        if(extraYRotation.toFixed(1) % 18 === 8){
            setDisplayImage(prev => prev === arcanaImage ? cardBackground : arcanaImage)
        }
    },[extraYRotation])

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
                // animatedValue will increase from 0 to 1, so we multiply it by a scaling factor
                {skewX: `${animatedValue*5}deg`}, 
                {skewY: `${animatedValue*5}deg`},
                {rotateY: `${(extraYRotation + animatedValue)*10}deg`},
                {rotateZ: `${705 - animatedValue*720}deg`}
            ],
            marginBottom: 100 - animatedValue*100,
            marginRight: animatedValue*900 - 800,
            zIndex: 100,
            width: 150,
            height: 200,
            resizeMode: 'contain',
        },
        wrapper: {
            flex: 1,
            width: '100%',
            height: '100%',
            justifyContent: 'center',
            alignItems: 'center',
            zIndex: -100,
        }
    })

    const content = () => {
        return(
            <>
            <Image
            style={styles.img}
            source={displayImage}
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
            </>
        )
    }


    return(
        <>
        { showBackground &&
            <ImageBackground 
            source={background}
            style={styles.wrapper}>
                {content()}
            </ImageBackground>
        }
        {
            !showBackground &&
            <View style={styles.wrapper}>
                {content()}
            </View>
        }
        </>
    )
}
