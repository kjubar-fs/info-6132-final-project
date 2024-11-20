import { useState } from 'react';

import ClockScreen from './Screens/ClockScreen/ClockScreen';
import LoadingScreen from './Screens/LoadingScreen/LoadingScreen';

import { AppLoader } from './components/AppLoader';

export default function App() {
    const [loading, setLoading] = useState(true);

    let content = <ClockScreen />;
    if (loading) {
        content = <LoadingScreen />;
    }

    return (
        <>
            <AppLoader onLoaded={() => setLoading(false)} />
            {content}
        </>
    );
}