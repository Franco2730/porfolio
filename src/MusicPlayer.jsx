import React, { useState, useRef, useEffect } from 'react';
import './MusicPlayer.css';

const tracks = [
    { title: 'Cancion 1', src: "/musica/Guns N' Roses - Welcome To The Jungle.mp3" },
    { title: 'Cancion 2', src: "/musica/Guns N' Roses - Estranged.mp3" },
    { title: 'Cancion 3', src: '/musica/Bon Jovi - Wanted Dead Or Alive.mp3' },
    { title: 'Cancion 4', src: '/musica/Bon Jovi - Born To Be My Baby.mp3' },
    { title: 'Cancion 5', src: '/musica/KISS - Crazy, Crazy Nights.mp3' },
    { title: 'Cancion 6', src: "/musica/Kiss - Heaven's On Fire.mp3" },
    { title: 'Cancion 7', src: '/musica/Alice-Cooper-Poison.mp3' },
    { title: 'Cancion 8', src: '/musica/BLACK SABBATH - Paranoid.mp3' },
    { title: 'Cancion 9', src: '/musica/Mötley Crüe - Kickstart My Heart.mp3' },
    { title: 'Cancion 10', src: '/musica/Queen - I want to break free.mp3' },
    { title: 'Cancion 11', src: '/musica/Twisted Sister - I Wanna Rock.mp3' },
    { title: 'Cancion 12', src: "/musica/Twisted Sister - We're Not Gonna Take it.mp3" },
    { title: 'Cancion 13', src: '/musica/Warren Zeiders - Outskirts of Heaven.mp3' },
    { title: 'Cancion 14', src: '/musica/Trace Adkins - Ladies Love Country Boys.mp3' },
    { title: 'Cancion 15', src: '/musica/Alan Jackson - Country Boy.mp3' },
];

function MusicPlayer({ onClose }) {
  const [currentTrackIndex, setCurrentTrackIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef(null);

  useEffect(() => {
    if (isPlaying) {
      audioRef.current.play();
    } else {
      audioRef.current.pause();
    }
  }, [isPlaying, currentTrackIndex]);

  const playTrack = () => {
    setIsPlaying(true);
  };

  const pauseTrack = () => {
    setIsPlaying(false);
  };

  const nextTrack = () => {
    setCurrentTrackIndex((currentTrackIndex + 1) % tracks.length);
    setIsPlaying(false);
  };

  const previousTrack = () => {
    setCurrentTrackIndex((currentTrackIndex - 1 + tracks.length) % tracks.length);
    setIsPlaying(false);
  };

  return (
    <div className="music-player">
      <div className="music-player-header">
        <img src="/iconos-ventanas/windows.png" alt="Windows Icon" className="windows-icon" />
        <button onClick={onClose} className="close-button">X</button>
      </div>
      <div className="music-player-content">
        <h2>Reproductor de Música</h2>
        <p>{tracks[currentTrackIndex].title}</p>
        <audio ref={audioRef} src={tracks[currentTrackIndex].src} controls />
        <div className="music-player-controls">
          <button onClick={previousTrack}>Anterior</button>
          <button onClick={isPlaying ? pauseTrack : playTrack}>{isPlaying ? 'Pausa' : 'Reproducir'}</button>
          <button onClick={nextTrack}>Siguiente</button>
        </div>
      </div>
    </div>
  );
}

export default MusicPlayer;
