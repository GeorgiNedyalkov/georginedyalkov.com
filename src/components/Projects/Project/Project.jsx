import "./Project.css";

const Project = ({ name, description, date, demo, code, imageUrl }) => {
  return (
    <article className="project">
      <div className="project__top">
        <h4 className="project__name">{name}</h4>
        <time className="project__date">{date}</time>
      </div>
      {/* <div className="project__image_container">
        <img className="project__image" src={imageUrl} alt={imageUrl} />
      </div> */}
      <p className="project__description">{description}</p>
      <ul className="project__links">
        <li className="project__link">
          <a href={demo}>Demo </a>
        </li>
        <li className="project__link">
          <a href={code}>Source</a>
        </li>
      </ul>
    </article>
  );
};

export default Project;
