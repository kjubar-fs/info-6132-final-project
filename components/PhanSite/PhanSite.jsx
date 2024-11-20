import { View, Text, ImageBackground } from "react-native";

import { useEffect, useState } from "react";
import { useBatteryLevel } from 'expo-battery';

import styles from "./PhanSiteStyles";

export const PhanSite = () => {

    const batteryLevel = useBatteryLevel()
    const [battery, setBattery] = useState(0)

    useEffect(()=>{
        // checks the battery level. If unavailable (such as on an iOS simulator, it returns -1)
        if(batteryLevel < 0){
            setBattery(Math.round(Math.random()*100))
        }
        else{
            // when available we set the battery level as the poll result
            setBattery(Math.round(batteryLevel * 100))
        }

    },[batteryLevel])



    return(
        <View style={styles.container}>
            <ImageBackground
                style={styles.img}
                source={require('../../assets/phan-site.png')}
            >
                <View style={{...styles.fill, width: `${(battery/100)*59}%` }}>
                </View>
                <Text style={{...styles.votes, marginLeft: 230-(battery*2)}}>{battery}%</Text>
            </ImageBackground>
        </View>
    )
}