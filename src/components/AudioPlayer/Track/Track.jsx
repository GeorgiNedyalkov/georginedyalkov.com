const Track = ({
  track,
  audioRef,
  setDuration,
  progressBarRef,
  handleNext,
}) => {
  const onLoadedMetadata = () => {
    const seconds = audioRef.current.duration;
    setDuration(seconds);
    progressBarRef.current.max = seconds;
  };

  return (
    <article className="track">
      <div className="track__top">
        <div className="track__left">
          <h4 className="track__artist">{track.artist}</h4>
          <h5 className="track__title">{track.title}</h5>
          <audio
            src={track.src}
            ref={audioRef}
            onLoadedMetadata={onLoadedMetadata}
            onEnded={handleNext}
          />
        </div>
        <div className="track__right">
          <div className="track__img_container">
            <img
              className="track__thumbnail"
              src={track.thumbnail}
              alt={`A picture of ${track.artist}`}
            />
          </div>
        </div>
      </div>
      <div className="track__bottom"></div>
    </article>
  );
};

export default Track;
