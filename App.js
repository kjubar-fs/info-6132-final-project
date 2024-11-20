import ClockScreen from './Screens/ClockScreen/ClockScreen';
import LoadingScreen from './Screens/LoadingScreen/LoadingScreen';
import { useState } from 'react';
import TransitionScreen from './Screens/TransitionScreen/TransitionScreen';

export default function App() {

  const [loading, setLoading] = useState(true)
  const [showTransition, setShowTransition] = useState(true)

  const TRANSITION_DURATION_IN_MS = 7000

  setTimeout(()=>{
    setLoading(false)
    setTimeout(()=>{
      setShowTransition(false)
    },TRANSITION_DURATION_IN_MS)
  },3000)


  if(loading){
    return <LoadingScreen/>
  }

  if(showTransition){
    return <TransitionScreen duration={TRANSITION_DURATION_IN_MS}/>
  }
  else{
    return <ClockScreen/>
  }
}