import { useEffect, useState } from "react";
import { View, Image } from "react-native";

const TransitionScreen = ({duration = 10000}) => {

    const INITIAL_POSITION = 900
    const FINAL_POSITION_OFFSET = -800
    const DISTANCE_PER_FRAME = 5
    const TOTAL_DISTANCE = INITIAL_POSITION - FINAL_POSITION_OFFSET
    const FRAME_RATE =  duration / (TOTAL_DISTANCE / DISTANCE_PER_FRAME)

    const [xPosition, setXPosition] = useState(INITIAL_POSITION)
    

    useEffect(()=>{
        // TODO: thinking about changing this interval with the Animation API
        // https://reactnative.dev/docs/animations
        const transition = setInterval(()=>{
            setXPosition(prev => { return prev > 0 ? prev - DISTANCE_PER_FRAME : prev })
        }, FRAME_RATE)

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
                    left: xPosition + FINAL_POSITION_OFFSET,
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