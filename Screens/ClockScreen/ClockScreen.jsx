import { useEffect, useState } from "react";
import { View, ImageBackground, Text, StyleSheet } from "react-native";
import styles from "./ClockScreenStyles";

const ClockScreen = () => {

    // The hour in which the theme will change between day and night
    const SUNSET_HOUR = 18

    const [date, setDate] = useState(new Date())
    const [displayColon, setDisplayColon] = useState(true)
    const [isDaylight, setIsDaylight] = useState(new Date().getHours() < SUNSET_HOUR ? true : false)

    // Array of weekdays to be used with Date().getDay()
    const weekdays = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]

    useEffect(()=>{
        // updates the time every minute
        const refreshTime = setInterval(()=>{
            setDate(new Date())

            // Then checks if it's day/night already
            if(date.getHours() < SUNSET_HOUR){
                setIsDaylight(true)
            }
            else{
                setIsDaylight(false)
            }
        },1000 * 60)

        // blinking every second
        const blinking = setInterval(()=>{
            setDisplayColon(prev => !prev)
        },1000)


        // cleaning up after unmounting the component
        return () => {
            clearInterval(refreshTime)
            clearInterval(blinking)
        }
    },[])

    // Calculated values
    const day = date?.getDate()
    const weekday = weekdays[date?.getDay()]
    const month = date?.getMonth()
    const hour = date?.getHours()
    const minute = date?.getMinutes()

    // changing the background based on the time of the day
    const backgroundImage = isDaylight ? 
        require('../../assets/calendar_day.webp') :  
        require('../../assets/calendar_night.jpg')


    return(
        <View style={styles.container}>
            <ImageBackground
                style={styles.img}
                source={backgroundImage}
                alt="Calendar Background Image"
            >
                <View style={styles.textContainer}>
                    <Text style={{...styles.text, color: isDaylight ? 'black' : 'white'}}>{month}/{day}</Text>
                    <Text style={{...styles.text, color: isDaylight ? 'black' : 'white'}}>{weekday}</Text>
                    <Text style={{...styles.hourText, color: isDaylight ? 'black' : 'white'}}>{hour}{displayColon ? ":" : " "}{minute}</Text>
                </View>
            </ImageBackground>
        </View>
    )
}
export default ClockScreen