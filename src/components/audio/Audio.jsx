import React, { useRef, useEffect, useState } from "react";
import { CiPlay1, CiPause1 } from "react-icons/ci";

const AudioPlayer = () => {
  const audioRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);

  useEffect(() => {
    const audio = audioRef.current;

    
    audio.muted = true;
    audio.play()
      .then(() => {
        audio.muted = false;
        setIsPlaying(true);
      })
      .catch((error) => {
        console.warn("Autoplay blocked. Waiting for user interaction.", error);
      });

    const enableAudio = () => {
      if (!isPlaying) {
        audio.play();
        setIsPlaying(true);
        document.removeEventListener("click", enableAudio);
      }
    };

    document.addEventListener("click", enableAudio);

    return () => {
      document.removeEventListener("click", enableAudio);
    };
  }, [isPlaying]);

  const playAudio = () => {
    audioRef.current.play();
    setIsPlaying(true);
  };

  const pauseAudio = () => {
    audioRef.current.pause();
    setIsPlaying(false);
  };

  return (
    <div className="flex justify-center items-center gap-2">
      <audio ref={audioRef} src="/music.mp3" type="audio/mp3" preload="auto" />
      <button
        className="bg-white flex justify-center items-center py-1 px-3 rounded-md hover:bg-blue-500 hover:text-white"
        onClick={playAudio}
      >
        Play <CiPlay1 />
      </button>
      <button
        className="bg-white flex justify-center items-center py-1 px-3 rounded-md hover:bg-red-600 hover:text-white"
        onClick={pauseAudio}
      >
        Pause <CiPause1 />
      </button>
    </div>
  );
};

export default AudioPlayer;
