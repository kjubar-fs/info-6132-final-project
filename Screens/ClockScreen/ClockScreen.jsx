import { View, ImageBackground, Text, Image, Platform, TouchableOpacity } from "react-native";

import { useEffect, useState } from "react";

import { useNavigation } from "@react-navigation/native";

import { PhanSite } from "../../components/PhanSite/PhanSite";

import styles from "./ClockScreenStyles";

export const ClockScreen = () => {

    // The hour in which the theme will change between day and night
    const SUNSET_HOUR = 18

    const [date, setDate] = useState(new Date())
    const [displayColon, setDisplayColon] = useState(true)
    const [isDaylight, setIsDaylight] = useState(new Date().getHours() < SUNSET_HOUR ? true : false)

    // Array of weekdays to be used with Date().getDay()
    const weekdays = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]

    const navigation = useNavigation()

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
    let hour = date?.getHours()
    if(hour < 10){
        hour = '0' + hour
    }
    let minute = date?.getMinutes()
    if(minute < 10){
        minute = '0' + minute
    }

    // changing the background based on the time of the day
    const backgroundImage = isDaylight ? 
        require('../../assets/calendar_day.webp') :  
        require('../../assets/calendar_night.jpg')

    // setting different typefaces based on the OS
    const platformStyles = {
        ios: {
            date: {
                fontFamily: 'HelveticaNeue'
            },
            hour: {
                fontFamily: 'Avenir'
            }
        },
        android: {
            date: {
                fontFamily: 'Roboto'
            },
            hour: {
                fontFamily: 'monospace'
            }
        }
    }


    return(
        <View style={styles.container}>
            <ImageBackground
                style={styles.img}
                source={backgroundImage}
                alt="Calendar Background Image"
            >
                <View style={styles.textContainer}>
                    <View style={styles.daggerRow}>
                        <Text style={[styles.text, {color: isDaylight ? 'black' : 'white'}, platformStyles[Platform.OS].date]}>{month}/{day}</Text>
                        <Image
                            source={require('../../assets/calendarDagger.png')}
                            style={styles.dagger}
                        />
                    </View>

                    <Text style={[styles.text, {color: isDaylight ? 'black' : 'white'}, platformStyles[Platform.OS].date]}>{weekday}</Text>
                    <Text style={[styles.hourText, {color: isDaylight ? 'black' : 'white'}, platformStyles[Platform.OS].hour]}>{hour}{displayColon ? ":" : " "}{minute}</Text>
                </View>

                <View style={{gap: 20}}>
                    <TouchableOpacity onPress={() => navigation.navigate("PersonasScreen")}>
                        <Text style={{fontSize: 20, textAlign: "center"}}>Personas</Text>
                    </TouchableOpacity>
                    
                    <TouchableOpacity onPress={() => navigation.navigate("PartyScreen")}>
                        <Text style={{fontSize: 20, textAlign: "center"}}>Party</Text>
                    </TouchableOpacity>
                </View>

                <PhanSite/>
            </ImageBackground>
        </View>
    )
}