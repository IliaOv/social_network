import React, {Suspense} from "react";
import Preloader from "../App";

export const withSuspense = (Component) => {
    return (props) => {
        return <Suspense fallback={<Preloader/>}>
            <Component {...props} />
        </Suspense>
    }
};