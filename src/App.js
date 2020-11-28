import "./App.css";
import { characters } from "./characters";
import avatar from "./avatar.png";
import { useState } from "react";
import btn from "./play-button.png";
import song from "./audio/GOT.mp3";

function App() {
  // const audio = new Audio("/GOT.mp3");
  const [playing, setPlaying] = useState(false);
  const [audio, setAudio] = useState(new Audio(song));

  const play = () => {
    audio.play();
    setPlaying(true);
    console.log("play");
  };

  const pause = () => {
    audio.pause();
    setPlaying(false);
    console.log("pause");
  };

  return (
    <div className="container">
      <h1 onClick={playing ? pause : play}>
        Game of Thr
        <img src={btn} alt="" />
        nes
      </h1>

      <div className="card-group">
        {characters.map((character, index) => (
          <div key={index} className="card">
            {/* Card Front side */}
            <div className="card-front">
              <img
                className="card-img"
                src={
                  character.characterImageFull
                    ? character.characterImageFull
                    : avatar
                }
                alt={character.characterName}
              />
              <h4 className="card-title">{character.characterName}</h4>
              <p>Actor: {character.actorName}</p>
            </div>

            {/* Card back side */}
            {/* <div className="card-back">
              <p>{character.actorName}</p>
            </div> */}
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
