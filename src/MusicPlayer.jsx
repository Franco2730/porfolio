import React, { useState, useRef, useEffect } from 'react';
import './MusicPlayer.css';

const tracks = [
    { title: "Guns N' Roses - Welcome To The Jungle", src: "/musica/Guns N' Roses - Welcome To The Jungle.mp3" },
    { title: "Guns N' Roses - Estranged", src: "/musica/Guns N' Roses - Estranged.mp3" },
    { title: "Bon Jovi - Wanted Dead Or Alive", src: '/musica/Bon Jovi - Wanted Dead Or Alive.mp3' },
    { title: "Bon Jovi - Born To Be My Baby", src: '/musica/Bon Jovi - Born To Be My Baby.mp3' },
    { title: "KISS - Crazy, Crazy Nights", src: '/musica/KISS - Crazy, Crazy Nights.mp3' },
    { title: "Kiss - Heaven's On Fire", src: "/musica/Kiss - Heaven's On Fire.mp3" },
    { title: "Alice Cooper - Poison", src: '/musica/Alice-Cooper-Poison.mp3' },
    { title: "BLACK SABBATH - Paranoid", src: '/musica/BLACK SABBATH - Paranoid.mp3' },
    { title: "Mötley Crüe - Kickstart My Heart", src: '/musica/Mötley Crüe - Kickstart My Heart.mp3' },
    { title: "Queen - I want to break free", src: '/musica/Queen - I want to break free.mp3' },
    { title: "Twisted Sister - I Wanna Rock", src: '/musica/Twisted Sister - I Wanna Rock.mp3' },
    { title: "Twisted Sister - We're Not Gonna Take it", src: "/musica/Twisted Sister - We're Not Gonna Take it.mp3" },
    { title: "Warren Zeiders - Outskirts of Heaven", src: '/musica/Warren Zeiders - Outskirts of Heaven.mp3' },
    { title: "Trace Adkins - Ladies Love Country Boys", src: '/musica/Trace Adkins - Ladies Love Country Boys.mp3' },
    { title: "Alan Jackson - Country Boy", src: '/musica/Alan Jackson - Country Boy.mp3' },
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
