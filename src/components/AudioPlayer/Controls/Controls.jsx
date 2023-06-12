import { useState, useRef, useEffect, useCallback } from "react";

import {
  IoPlaySharp,
  IoPauseSharp,
  IoPlayForward,
  IoPlayBack,
  IoPlaySkipForward,
  IoPlaySkipBack,
} from "react-icons/io5";

const Controls = ({
  audioRef,
  progressBarRef,
  duration,
  setTimeProgress,
  tracks,
  trackIndex,
  setTrackIndex,
  setCurrentTrack,
}) => {
  const [isPlaying, setIsPlaying] = useState(false);

  const playAnimationRef = useRef();

  const onPlay = () => {
    setIsPlaying((playing) => !playing);
  };

  const repeat = useCallback(() => {
    const currentTime = audioRef.current.currentTime;
    setTimeProgress(currentTime);
    progressBarRef.current.value = currentTime;
    progressBarRef.current.style.setProperty(
      "--range-progress",
      `${(progressBarRef.current.value / duration) * 100}%`
    );

    playAnimationRef.current = requestAnimationFrame(repeat);
  }, [audioRef, duration, progressBarRef, setTimeProgress]);

  useEffect(() => {
    if (isPlaying) {
      audioRef.current.play();
    } else {
      audioRef.current.pause();
    }

    playAnimationRef.current = requestAnimationFrame(repeat);
  }, [isPlaying, audioRef, repeat]);

  const handleNext = () => {
    if (trackIndex >= tracks.length - 1) {
      setTrackIndex(0);
      setCurrentTrack(tracks[0]);
    } else {
      setTrackIndex((prev) => prev + 1);
      setCurrentTrack(tracks[trackIndex + 1]);
    }
  };

  const handlePrevious = () => {
    if (trackIndex === 0) {
      let lastTrackIndex = tracks.length - 1;
      setTrackIndex(lastTrackIndex);
      setCurrentTrack(tracks[lastTrackIndex]);
    } else {
      setTrackIndex((prev) => prev - 1);
      setCurrentTrack(tracks[trackIndex - 1]);
    }
  };

  const skipForward = () => {
    audioRef.current.currentTime += 15;
  };
  const skipBackward = () => {
    audioRef.current.currentTime -= 15;
  };

  return (
    <div className="controls-wrapper">
      <div className="controls">
        <button onClick={handlePrevious} className="audio__btn">
          <IoPlaySkipBack />
        </button>
        <button onClick={skipBackward} className="audio__btn">
          <IoPlayBack />
        </button>
        <button onClick={onPlay} className="audio__btn">
          {isPlaying ? <IoPauseSharp /> : <IoPlaySharp />}
        </button>
        <button onClick={skipForward} className="audio__btn">
          <IoPlayForward />
        </button>
        <button onClick={handleNext} className="audio__btn">
          <IoPlaySkipForward />
        </button>
      </div>
    </div>
  );
};

export default Controls;
