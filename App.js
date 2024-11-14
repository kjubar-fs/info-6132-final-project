import ClockScreen from './Screens/ClockScreen/ClockScreen';
import LoadingScreen from './Screens/LoadingScreen/LoadingScreen';
import { useState } from 'react';

export default function App() {

  const [loading, setLoading] = useState(true)

  setTimeout(()=>{
    setLoading(false)
  },2500)


  if(loading){
    return <LoadingScreen/>
  }
  else{
    return <ClockScreen/>
  }
}