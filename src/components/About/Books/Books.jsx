import Book from "./Book/Book";

import "./Books.css";

const Books = ({ books, handleMouseOver, currentBookIndex }) => {
  return (
    <div className="books__section">
      <div className="books__section-left">
        <ul className="books__list">
          {books.map((book) => {
            return (
              <li key={book.id} onMouseOver={() => handleMouseOver(book.id)}>
                <a className="link" href={book.link}>
                  {book.title}
                </a>
              </li>
            );
          })}
        </ul>
      </div>
      <div className="books__section-right">
        <Book {...books[currentBookIndex - 1]} />
      </div>
    </div>
  );
};

export default Books;
