import React, { useRef, useEffect, useState } from "react";
import { CiPlay1, CiPause1 } from "react-icons/ci";

const AudioPlayer = () => {
  const audioRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);

  useEffect(() => {
    const playAudioOnUserInteraction = () => {
      if (!isPlaying) {
        audioRef.current.play().catch((error) => {
          console.error("Autoplay failed:", error);
        });
        setIsPlaying(true);
        document.removeEventListener("click", playAudioOnUserInteraction);
      }
    };

    document.addEventListener("click", playAudioOnUserInteraction);

    return () => {
      document.removeEventListener("click", playAudioOnUserInteraction);
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
      <audio ref={audioRef} src="/music.mp3" type="audio/mp3" />
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

