import React, { useState, useEffect } from "react";
import GameItem from "./GameItem";

const Games = () => {
  const [games, setGames] = useState([])
  const [search, setSearch] = useState([]);
  const [text, setText] = useState("");

  useEffect(() => {
    fetch("https://api.rawg.io/api/games?key=e97712eaaec24a32b85389785cfea2d9")
      .then((response) => response.json())
      .then((data) => {
        setGames(data.results)
        setSearch(data.results)
        })
  }, [])

  const handleSubmit = (e) => {
        e.preventDefault();

        setGames(search);
        const newResults = search.filter((games) =>
            games.name.includes(text)
        );
        setGames(newResults);

        setText("");
    };
    const handleChange = (e) => {
        setText(e.target.value);
    };

  return(
        <section className="py-5 bg-da">
            <div className="container px-4 px-lg-5 mt-5 mb-5">
              <h2>Search Game</h2>
        <form onSubmit={handleSubmit}>
          <input typt="text" className="form-control" placeholder="Search Game" onChange={handleChange} value={text}/>
        </form>
                <div className="row gx-4 gx-lg-5 row-cols-2 row-cols-md-3 row-cols-xl-4 justify-content-center my-4">
                  {games.map((game) => <GameItem key={game.id} game={game} />)}
                </div>
            </div>
        </section>
  );
}



export default Games;
 