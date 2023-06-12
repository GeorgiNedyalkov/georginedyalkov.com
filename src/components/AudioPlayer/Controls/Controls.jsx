import { useState, useRef, useEffect, useCallback } from "react";

import {
  IoPlaySharp,
  IoPauseSharp,
  IoPlayForward,
  IoPlayBack,
  IoPlaySkipForward,
  IoPlaySkipBack,
  IoVolumeMute,
  IoVolumeLow,
  IoVolumeHigh,
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
  const [volume, setVolume] = useState(60);
  const [mute, setMute] = useState(false);

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

  useEffect(() => {
    if (isPlaying) {
      audioRef.current.play();
    } else {
      audioRef.current.pause();
    }

    playAnimationRef.current = requestAnimationFrame(repeat);
  }, [isPlaying, audioRef, repeat]);

  useEffect(() => {
    if (audioRef) {
      audioRef.current.volume = volume / 100;
      audioRef.current.muted = mute;
    }
  }, [volume, audioRef, mute]);

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
      <div className="volume">
        <button className="audio__btn">
          {mute || volume < 5 ? (
            <IoVolumeMute />
          ) : volume < 40 ? (
            <IoVolumeLow />
          ) : (
            <IoVolumeHigh />
          )}
        </button>
        <input
          style={{
            background: `linear-gradient(to right, #BFCA38 ${volume}%, #6b7280 ${volume}%)`,
          }}
          type="range"
          min={0}
          max={100}
          value={volume}
          onChange={(e) => setVolume(e.target.value)}
        />
      </div>
    </div>
  );
};

export default Controls;
