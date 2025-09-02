import { useState } from "react";

const CounterPage = () => {
    /**
     * TODO Déclaration de l'état stockant la valeur du compteur
     * 
     * Plus d'information sur la déclaration des useState : https://www.carlrippon.com/typed-usestate-with-typescript/
     */
    const [counter, setCounter] = useState(0);

    /**
     * TODO implémenter Fonction permettant d'incrémenter l'état du compteur.
     * 
     * Utilisée en tant que "handler" d'un évènement "click".
     * 
     * Pour un exemple d'implémentation d'un bouton vous pourrez vous inspirer de l'article suivant : https://www.kindacode.com/article/react-typescript-handling-onclick-event#example-1:-button-onclick
     */
    const counterHandler = (event: React.MouseEvent<HTMLButtonElement>) =>{
        event.preventDefault();


        setCounter(prev => prev + 1);
    };

    /**
     * TODO implémenter un fonction permettant d'incrémenter l'état du compteur
     * 
     * Utilisée en tant que "handler" d'un évènement "click".
     */


    /**
     * On renvoie le JSX correspond à ce qui est à afficher
     */
    return (
        <>
            <h2>Compteur :</h2>
            <button onClick={counterHandler} className="button" name = "button">Click me</button>
            
            <h1>
                {counter !== 0 ? `You clicked button "${counter}" times` : "You haven't clicked button yet"}
            </h1>
            {/* TODO compléter le code affichant le nombre de clics et des boutons */}
        </>
    )
}

export default CounterPage;