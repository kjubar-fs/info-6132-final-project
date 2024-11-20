import ClockScreen from './Screens/ClockScreen/ClockScreen';
import LoadingScreen from './Screens/LoadingScreen/LoadingScreen';
import { useState } from 'react';
import TransitionScreen from './Screens/TransitionScreen/TransitionScreen';

export default function App() {

  const [loading, setLoading] = useState(true)
  const [showTransition, setShowTransition] = useState(true)

  setTimeout(()=>{
    setLoading(false)
  },3000)

  setTimeout(()=>{
    setShowTransition(false)
  },10000)

  if(loading){
    return <LoadingScreen/>
  }

  if(showTransition){
    return <TransitionScreen duration={8000}/>
  }
  else{
    return <ClockScreen/>
  }
}