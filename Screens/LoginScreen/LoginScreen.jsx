import { useState } from "react";
import { View, Text, ImageBackground, TextInput, StyleSheet, Pressable, Button } from "react-native";
import styles from "./LoginScreenStyles";


export const LoginScreen = () => {

    const [isReturningUser, setIsReturningUser] = useState(true)
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    const toggleScreen = () => { setIsReturningUser(prev => !prev)}
    

    return(
        <View style={styles.wrapper}>
            <ImageBackground
            source={isReturningUser ? require('../../assets/signInBg.jpg') : require('../../assets/signUpBg.jpg')}
            alt="Velvet Room image"
            style={styles.wrapper}>
                <Text style={styles.title}>Welcome to the Velvet Room</Text>
                <View style={styles.formContainer}>
                    <View style={styles.inputContainer}>
                        <Text style={styles.inputLabel}>Email</Text>
                        <TextInput
                        style={styles.inputField}
                        value={email}
                        onChange={setEmail}
                        />
                    </View>
                    <View style={styles.inputContainer}>
                        <Text style={styles.inputLabel}>Password</Text>
                        <TextInput
                        style={styles.inputField}
                        value={password}
                        onChange={setPassword}
                        secureTextEntry={true}
                        />
                    </View>
                    <View style={styles.btnContainer}>
                        <Button
                            title={isReturningUser ? "Login" : "Register"}
                            onPress={()=>{console.log(isReturningUser)}}
                        />
                    </View>
                </View>
                <Pressable
                    onPress={toggleScreen}
                >
                    <Text style={styles.loginToggle}>{isReturningUser ? "New to the app? Sign up" : "Already a user? Sign In"}</Text>
                </Pressable>
            </ImageBackground>
        </View>
    )
}