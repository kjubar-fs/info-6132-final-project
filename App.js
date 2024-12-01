import { useEffect, useState } from 'react';

import { auth } from './config/firebase';
import { onAuthStateChanged } from 'firebase/auth';

import { NavigationContainer } from '@react-navigation/native';

import { Animated, useAnimatedValue } from 'react-native';

import { signOutUser } from './services/auth/firebaseAuth';

import { LoginScreen } from './Screens/LoginScreen/LoginScreen';
import { HomeScreen } from './Screens/HomeScreen';
import { LoadingScreen } from './Screens/LoadingScreen/LoadingScreen';

import { AppLoader } from './components/AppLoader';

export default function App() {
    const [loading, setLoading] = useState(true);
    const [userAuth, setUserAuth] = useState(undefined) 

    const fadeAnim = useAnimatedValue(1);

    const fadeOutLoading = () => {
        Animated.timing(fadeAnim, {
            toValue: 0,
            duration: 1500,
            useNativeDriver: true,
        }).start(() => {
            setLoading(false);
        });
    };

    const logoutUser = async() => {
        await signOutUser(setUserAuth)
    }

    useEffect(()=>{
        // subscribe to the onAuthStateChanged event
        const loginSub = onAuthStateChanged(auth, (firebaseUser) => {
            if (firebaseUser) {
                // and if the user is authenticated, stores their data and moves to the next screen
                setUserAuth(firebaseUser)
            }
        })
    
        // clean up when unmounting
        return loginSub

    },[])

    // If there's no user logged in, returns the LoginScreen
    if(!userAuth){
        return(
            <LoginScreen/>
        )
    }

    // Otherwise, it keeps the usual app flow
    return (
        <NavigationContainer>
            <AppLoader onLoaded={fadeOutLoading} />
            <HomeScreen logout={logoutUser} />
            {loading &&
                <Animated.View style={{position: "absolute", width: "100%", height: "100%", opacity: fadeAnim}}>
                    <LoadingScreen />
                </Animated.View>}
        </NavigationContainer>
    );
}