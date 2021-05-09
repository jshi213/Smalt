import { useHistory } from "react-router-dom";
import React, { useEffect } from "react";
import styles from "./style.module.css";
import { LandingOptions } from "../../components";
import { useCookies } from 'react-cookie';
/* This HostPage function applies the CSS styles to the LandingOptions */

export default function LandingPage() {
    const history = useHistory();
    const [cookies, setCookie] = useCookies(['host']);
    useEffect(() => {
        if(cookies.host.username){
            history.push("/host");
        }
        console.log(cookies.host.username);
      }, []);
  
    return (
        <div className={styles.rootContainer} >
            <p className={styles.name} align="center"><i>Smalt</i></p>
            <LandingOptions />
        </div>
    );

}