import { GiCandleLight } from "react-icons/gi";
import AudioPlayer from "./audio/audio";

function Navbar() {
  return (
    <div className="flex justify-between items-center py-7 px-5  border-b-2 md:px-20">
      <p className="text-white text-2xl font-bold flex justify-center items-center">
        Pulwama <GiCandleLight />
      </p>
      <AudioPlayer />
    </div>
  );
}

export default Navbar;
