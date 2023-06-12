import { useState, useRef } from "react";

import Track from "./Track/Track";
import Controls from "./Controls/Controls";
import ProgressBar from "./ProgressBar/ProgressBar";

import { tracks } from "../../data/tracksList";

import "./AudioPlayer.css";

const AudioPlayer = () => {
  const [trackIndex, setTrackIndex] = useState(0);
  const [timeProgress, setTimeProgress] = useState(0);
  const [currentTrack, setCurrentTrack] = useState(tracks[trackIndex]);
  const [duration, setDuration] = useState(0);

  const progressBarRef = useRef();
  const audioRef = useRef();

  return (
    <div id="audio_player">
      <Track
        track={currentTrack}
        audioRef={audioRef}
        progressBarRef={progressBarRef}
        setDuration={setDuration}
      />
      <div className="audio__controls">
        <Controls
          audioRef={audioRef}
          duration={duration}
          progressBarRef={progressBarRef}
          setTimeProgress={setTimeProgress}
          tracks={tracks}
          trackIndex={trackIndex}
          setTrackIndex={setTrackIndex}
          setCurrentTrack={setCurrentTrack}
        />
        <ProgressBar
          audioRef={audioRef}
          progressBarRef={progressBarRef}
          timeProgress={timeProgress}
          duration={duration}
        />
      </div>
    </div>
  );
};

export default AudioPlayer;
