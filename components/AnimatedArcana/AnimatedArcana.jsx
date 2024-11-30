import { useEffect, useState } from "react";
import { Image, StyleSheet, View } from "react-native";

export const AnimatedArcana = () => {
    const testImg = "https://static.wikia.nocookie.net/megamitensei/images/5/53/Fool-0.png/revision/latest?cb=20160404201043"


    const [animatedValue, setAnimatedValue] = useState(0)

    useEffect(() => {
        const interval = setInterval(()=>{
            if(animatedValue < 1){
                setAnimatedValue(prev => {
                    return prev < 1 ? prev + 0.01 : prev
                })
            }
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
        //     marginRight: 50,
        // },
        img: {
            transform: [
                {skewX: `${animatedValue*5}deg`}, 
                {skewY: `${animatedValue*5}deg`},
                {rotateY: `${animatedValue*10}deg`},
                {rotateZ: `${705 - animatedValue*720}deg`}
            ],
            marginBottom: 100 - animatedValue*100,
            marginRight: animatedValue*850 - 800,
        }
    })


    return(
        <View style={{
            flex: 1,
            width: '100%',
            height: '100%',
            justifyContent: 'center',
            alignItems: 'center',
        }}>
            <Image
            style={styles.img}
            source={{uri: testImg}}
            width={150}
            height={200}
            resizeMode="contain"
            />
        </View>
    )
}
