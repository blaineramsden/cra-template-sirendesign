import "./location.scss";
import { useLayoutEffect } from "react";

const Location: React.FC = () => {
    useLayoutEffect(() => {
        window.scrollTo(0, 0)
    });
    
    return (
        <>
           <h1>
             Location
           </h1>
        </>
    );
};

export default Location;
