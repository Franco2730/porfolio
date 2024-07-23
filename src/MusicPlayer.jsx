import React, { useState, useRef, useEffect } from 'react';
import './MusicPlayer.css';

const tracks = [
    { title: 'Welcome To The Jungle - Guns N\' Roses', src: "/musica/Guns N' Roses - Welcome To The Jungle.mp3" },
    { title: 'Estranged - Guns N\' Roses', src: "/musica/Guns N' Roses - Estranged.mp3" },
    { title: 'Wanted Dead Or Alive - Bon Jovi', src: '/musica/Bon Jovi - Wanted Dead Or Alive.mp3' },
    { title: 'Born To Be My Baby - Bon Jovi', src: '/musica/Bon Jovi - Born To Be My Baby.mp3' },
    { title: 'Crazy, Crazy Nights - KISS', src: '/musica/KISS - Crazy, Crazy Nights.mp3' },
    { title: 'Heaven\'s On Fire - Kiss', src: "/musica/Kiss - Heaven's On Fire.mp3" },
    { title: 'Poison - Alice Cooper', src: '/musica/Alice-Cooper-Poison.mp3' },
    { title: 'Paranoid - BLACK SABBATH', src: '/musica/BLACK SABBATH - Paranoid.mp3' },
    { title: 'Kickstart My Heart - Mötley Crüe', src: '/musica/Mötley Crüe - Kickstart My Heart.mp3' },
    { title: 'I want to break free - Queen', src: '/musica/Queen - I want to break free.mp3' },
    { title: 'I Wanna Rock - Twisted Sister', src: '/musica/Twisted Sister - I Wanna Rock.mp3' },
    { title: 'We\'re Not Gonna Take it - Twisted Sister', src: "/musica/Twisted Sister - We're Not Gonna Take it.mp3" },
    { title: 'Outskirts of Heaven - Warren Zeiders', src: '/musica/Warren Zeiders - Outskirts of Heaven.mp3' },
    { title: 'Ladies Love Country Boys - Trace Adkins', src: '/musica/Trace Adkins - Ladies Love Country Boys.mp3' },
    { title: 'Country Boy - Alan Jackson', src: '/musica/Alan Jackson - Country Boy.mp3' },
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
