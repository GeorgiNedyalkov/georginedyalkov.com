import "./Book.css";

const Book = ({ title, image, author, description }) => {
  return (
    <article className="book">
      <div className="book__image__container">
        <img
          src={image}
          alt={`${title} by ${author}`}
          className="book__image"
        />
      </div>
      <div className="book__info__container">
        <h4 className="book__title">{title}</h4>
        <p>
          by <span className="book__author">{author}</span>
        </p>
        <p className="description">{description}</p>
      </div>
    </article>
  );
};

export default Book;
