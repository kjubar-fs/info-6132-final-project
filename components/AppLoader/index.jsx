import { useEffect } from "react";

export function AppLoader({ onLoaded }) {
    useEffect(() => {
        // TODO: do API loading here
        // (async () => {
        //    // do operations

        //     onLoaded();
        // })();

        // TODO: remove this
        setTimeout(() => {
            onLoaded();
        }, 2500);
    }, []);

    return <></>;
}