import { useEffect, useState } from "react";
import { View, ImageBackground, Text, StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
    },
    img: {
        width: '100%',
        height: '100%',
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
    },
    textContainer: {
        alignSelf: 'flex-start',
        marginTop: '50%',
    },
    text: {
        color: 'white',
        fontFamily: 'HelveticaNeue',
        fontSize: 24,
        textAlign: 'center',
    },
    hourText: {
        color: 'white',
        textAlign: 'center',
        fontSize: 48,
        fontFamily: 'Avenir',
    },
})


const ClockScreen = () => {

    const [date, setDate] = useState(new Date())
    const [displayColon, setDisplayColon] = useState(true)

    useEffect(()=>{
        // updates the time every minute
        const refreshTime = setInterval(()=>{
            setDate(new Date())
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


    return(
        <View style={styles.container}>
            <ImageBackground
                style={styles.img}
                source={require('../../assets/calendar_night.jpg')}
                alt="Calendar Background Image"
            >
                <View style={styles.textContainer}>
                    <Text style={styles.text}>{month}/{day}</Text>
                    <Text style={styles.text}>{weekday}</Text>
                    <Text style={styles.hourText}>{hour}{displayColon ? ":" : " "}{minute}</Text>
                </View>
            </ImageBackground>
        </View>
    )
}
export default ClockScreen

const weekdays = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]