import "./Project.css";

const Project = ({ name, description, date, demo, code, imageUrl }) => {
  return (
    <article className="project">
      <time className="project__date">{date}</time>
      <h4 className="project__name">{name}</h4>
      <div className="project__image_container">
        <img className="project__image" src={imageUrl} alt={imageUrl} />
      </div>
      <p className="project__description">{description}</p>
      <ul className="project__links">
        <li className="project__link">
          <a href={demo}>Demo </a>
          <a href={code}>Github</a>
        </li>
      </ul>
    </article>
  );
};

export default Project;
