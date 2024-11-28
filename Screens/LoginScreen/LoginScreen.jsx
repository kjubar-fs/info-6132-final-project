import { useState } from "react";
import { View, Text, ImageBackground, TextInput, Pressable, Button } from "react-native";
import { areFieldsValid, signIn } from "../../services/auth/firebaseAuth";
import styles from "./LoginScreenStyles";


export const LoginScreen = () => {

    const [isReturningUser, setIsReturningUser] = useState(true)
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [alert, setAlert] = useState("")

    const toggleScreen = () => { setIsReturningUser(prev => !prev)}

    const loginAttempt = async() => {
        setAlert("")

        console.log(email,password)

        const validation = areFieldsValid(email, password)
        
        if(!validation.success){
            setAlert(validation.message)
            return
        }

        const loginResult = await signIn(email,password)
        if(!loginResult.success){
            setAlert(loginResult.message)
            return
        }
    }

    const registerAttempt = async() => {
        setAlert("")
        const validation = areFieldsValid(email, password)
        
        if(!validation.success){
            setAlert(validation.message)
            return
        }

        const registerResult = await signUp(email,password)
        if(!registerResult.success){
            setAlert(registerResult.message)
            return
        }
    }
    

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
                        keyboardType="email"
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
                            onPress={isReturningUser ? loginAttempt : registerAttempt}
                        />
                    </View>
                    <Text style={styles.alert}>{alert}</Text>
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