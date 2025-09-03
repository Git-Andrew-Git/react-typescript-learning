import { useEffect, useState } from "react";

import styles from "./ClockPage.module.css";

/**
 * Page présentant une horloge interactive
 */
const ClockPage = () => {
    const [date, setDate] = useState<Date>()
    const [running, setRunning] = useState<boolean>(true)
    // TODO déclarer un state permettant de stocker la date et l'heure actuelle
    // Indice sur ce qu'il faudrait stocker : https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Global_Objects/Date

    useEffect(() => {
        if (!running) {
            return
        }
        const timer = setInterval(()=>{
                setDate(new Date())
            }, 1000)

               

        return () => clearInterval(timer);
      
    }, [running]);

    /**
     * TODO fonction permettant de démarrer l'horloge
     */
    function handleStartClick(): void {
        setDate(new Date())
        setRunning(true)
        
    }

        
    /**
     * TODO fonction permettant de stopper l'horloge
     */
    function handleStopClick(): void {
        setRunning(false)
    }

    return (
      <div className={styles.clockContainer}>
        <h1>
          {date?.toLocaleTimeString()}
        </h1>
        <button onClick={handleStartClick}>Start</button>
        <> </>
        <button onClick={handleStopClick}>Stop</button>
        {/* TODO implémenter l'interface graphique de l'horloge */}
      </div>
    );
}

export default ClockPage;