import React, { useRef, useEffect } from "react";
import { CiPlay1 } from "react-icons/ci";
import { CiPause1 } from "react-icons/ci";

const AudioPlayer = () => {
  const audioRef = useRef(null);

  useEffect(() => {
    const audio = audioRef.current;
    audio.play();
  }, []);

  const playAudio = () => {
    audioRef.current.play();
  };

  const pauseAudio = () => {
    audioRef.current.pause();
  };

  return (
    <div className="flex justify-center items-center gap-2">
      <audio ref={audioRef}>
        <source src="/music.mp3" type="audio/mp3" />
      </audio>
      <br />
      <button
        className="bg-white flex justify-center items-center py-1 px-3 rounded-md hover:bg-blue-500 hover:text-white"
        onClick={playAudio}
      >
        Play
        <CiPause1 />
      </button>
      <button
        className="bg-white flex justify-center items-center py-1 px-3 rounded-md hover:bg-red-600 hover:text-white"
        onClick={pauseAudio}
      >
        Pause
        <CiPlay1 />
      </button>
    </div>
  );
};

export default AudioPlayer;
