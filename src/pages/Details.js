import React, {useState, useEffect} from "react";
import { useParams } from "react-router-dom";
import Footer from "../components/Footer";
import GameDetail from "../components/GameDetail";
import Navigation from "../components/Navigation";

const Detail = () => {
    const [games, setGames] = useState([]);
    const { gamesId } = useParams();

    useEffect(() => {
    fetch(`https://api.rawg.io/api/games/${gamesId}?key=e97712eaaec24a32b85389785cfea2d9`)
      .then((response) => response.json())
      .then((data) => setGames(data))
    }, []);

    return(
        <>
        <Navigation />
        <GameDetail key={gamesId} games={games}/>
        <Footer />
        </>
    );
}

export default Detail;