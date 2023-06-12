import { formatTime } from "../../../utils/formatTime";

const ProgressBar = ({ audioRef, progressBarRef, timeProgress, duration }) => {
  const onProgressChange = () => {
    audioRef.current.currentTime = progressBarRef.current.value;
  };

  return (
    <div className="progress">
      <span className="time current">{formatTime(timeProgress)}</span>
      <input
        type="range"
        ref={progressBarRef}
        defaultValue={0}
        onChange={onProgressChange}
      />
      <span className="time">{formatTime(duration)}</span>
    </div>
  );
};

export default ProgressBar;
