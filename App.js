import { useEffect, useState } from 'react';

import { auth } from './config/firebase';
import { onAuthStateChanged } from 'firebase/auth';

import { Animated, Button, useAnimatedValue } from 'react-native';

import { LoginScreen } from './Screens/LoginScreen/LoginScreen';
import { ClockScreen } from './Screens/ClockScreen/ClockScreen';
import { LoadingScreen } from './Screens/LoadingScreen/LoadingScreen';

import { AppLoader } from './components/AppLoader';
import { signOutUser } from './services/auth/firebaseAuth';

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
        <>
            <AppLoader onLoaded={fadeOutLoading} />
            <ClockScreen />
            {/* DEBUG ONLY BUTTON. TODO: MOVE TO APPROPIATE PLACE AFTER TESTING */}
            <Button
                title='Log out'
                onPress={()=>{signOutUser(setUserAuth) /* TODO: RESET TRANSITION SCREEN VALUE */}}
            />
            {/* END OF DEBUG ONLY BUTTON */}
            {loading &&
                <Animated.View style={{position: "absolute", width: "100%", height: "100%", opacity: fadeAnim}}>
                    <LoadingScreen />
                </Animated.View>}
        </>
    );
}