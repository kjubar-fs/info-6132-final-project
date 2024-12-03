import { useEffect, useState } from "react";
import { Image, Platform, StyleSheet, View } from "react-native";
import { cardImages } from "../../../utils/imageMaps";
import { HoveringPersona } from "../HoveringPersona/HoveringPersona";

export const AnimatedArcana = ({personaImg, arcana, delayContent = false}) => {

    const cardBackground = cardImages["CardBack"]
    const arcanaImage = cardImages[arcana]

    const [animatedValue, setAnimatedValue] = useState(0)
    const [extraYRotation, setExtraYRotation] = useState(0)
    const [showContent, setShowContent] = useState(!delayContent)
    const [displayImage, setDisplayImage] = useState(arcanaImage)

    useEffect(() => {
        const interval = setInterval(()=>{
            setAnimatedValue(prev => {
                if(prev < 1){
                    return prev + 0.01
                }
                else{
                    setShowContent(true)
                    // starts rotating the card on its Y axis after completing the initial animation
                    // Due to an issue with zIndex introduced in Expo 52, this feature has been limited in iOS
                    if(Platform.OS === 'android'){
                        setExtraYRotation(prevY => prevY + 0.1)
                    }
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
            marginRight: animatedValue*1000 - 800,
            zIndex: 100,
            width: 150,
            height: 200,
            resizeMode: 'contain',
        },
        wrapper: {
            flex: 1,
            // width: '100%',
            height: 400,
            justifyContent: 'center',
            alignItems: 'center',
            zIndex: -100,
        }
    })

    return(
        <View style={styles.wrapper}>
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
                    <HoveringPersona personaImage={personaImg}/>
                }
            </View>
        </View>
    )
}
