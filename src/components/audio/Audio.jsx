import React, { useRef, useEffect, useState } from "react";
import { CiPlay1, CiPause1 } from "react-icons/ci";

const AudioPlayer = () => {
  const audioRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);

  useEffect(() => {
    const audio = audioRef.current;
    
    
    const tryAutoplay = async () => {
      try {
        audio.muted = true; 
        await audio.play();
        audio.muted = false; 
        setIsPlaying(true);
      } catch (error) {
        console.warn("Autoplay blocked. Waiting for user interaction.");
      }
    };

    tryAutoplay();

    
    const enableAudio = () => {
      if (!isPlaying) {
        audio.play();
        setIsPlaying(true);
      }
      document.removeEventListener("click", enableAudio);
    };

    document.addEventListener("click", enableAudio);

    return () => {
      document.removeEventListener("click", enableAudio);
    };
  }, []);

  const togglePlayPause = () => {
    const audio = audioRef.current;
    if (isPlaying) {
      audio.pause();
    } else {
      audio.play();
    }
    setIsPlaying(!isPlaying);
  };

  return (
    <div className="flex justify-center items-center gap-2">
      <audio ref={audioRef} src="/music.mp3" type="audio/mp3" preload="auto" />
      <button
        className="bg-white flex justify-center items-center py-2 px-4 rounded-md hover:bg-gray-500"
        onClick={togglePlayPause}
      >
        {isPlaying ? (
          <>
            Pause <CiPause1 />
          </>
        ) : (
          <>
            Play <CiPlay1 />
          </>
        )}
      </button>
    </div>
  );
};

export default AudioPlayer;

