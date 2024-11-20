import { useEffect, useState } from "react";
import { View, Image } from "react-native";

const TransitionScreen = () => {

    const [xPosition, setXPosition] = useState(900)

    useEffect(()=>{
        // TODO: thinking about changing this interval with the Animation API
        // https://reactnative.dev/docs/animations
        const transition = setInterval(()=>{
            setXPosition(prev => { return prev > 0 ? prev - 5 : prev })
        },50)

        return () => {
            clearInterval(transition)
        }
    },[])


    return(
        <View
            style={{
                backgroundColor: '#cc0000',
                width: '100%',
                height: '100%',
            }}
        >
            <Image
                source={require('../../assets/jokerWalking.gif')}
                style={{
                    position: 'absolute',
                    left: xPosition -800,
                    width: 1200,
                    height: '100%',
                    paddingRight: 300,
                    backgroundColor: 'black',
                }}
            />
        </View>
    )
}

export default TransitionScreen