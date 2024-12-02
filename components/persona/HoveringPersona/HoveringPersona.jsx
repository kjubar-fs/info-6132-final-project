import { useState, useEffect } from 'react'
import { View, Image } from 'react-native'

export const HoveringPersona = ({personaImage}) => {

    const [yPos, setYPos] = useState({value: 0, direction: true})

    const DELTA = 0.2
    const MARGIN = 10

    useEffect(()=>{
        const hover = setInterval(()=>{
            setYPos(prev => {
                if(prev.direction){
                    if(prev.value < MARGIN){
                        return { direction: prev.direction, value: prev.value + DELTA }
                    }
                    else{
                        return {value: prev.value - DELTA, direction: !prev.direction}
                    }
                }
                else{
                    if(prev.value > -MARGIN){
                        return {direction: prev.direction, value: prev.value - DELTA}
                    }
                    else{
                        return {value: prev.value + DELTA, direction: !prev.direction}
                    }
                }
            })
        },10)

        return ()=>{clearInterval(hover)}
        
    },[])

    return(
        <View style={{
            width: '100%',
            flex: 1,
            justifyContent: 'center',
            alignItems: 'center',
        }}>
            <Image
                source={personaImage}
                placeholder={require("../../../assets/loading/takeYourTime.png")}
                style={{
                    marginTop: 100 - yPos.value,
                    marginLeft: 100,
                    width: 200,
                    height: 400,
                    resizeMode: 'contain',
                }}
            />
        </View>
    )
}
