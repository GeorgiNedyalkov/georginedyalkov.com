import Book from "./Book/Book";
import "./Books.css";

const Books = ({ books, onBookMouseOver, currentBookIndex }) => {
    const bookList = (
        <ul className="books__list">
            {books.map((book) => {
                return (
                    <li
                        key={book.id}
                        onMouseOver={() => onBookMouseOver(book.id)}
                    >
                        <a className="link" href={book.link}>
                            {book.title}
                        </a>
                    </li>
                );
            })}
        </ul>
    );

    return (
        <div className="about__section">
            <h3 className="about__heading">Books</h3>
            <div className="books__section">
                <div className="books__section-left">{bookList}</div>
                <div className="books__section-right">
                    <Book {...books[currentBookIndex - 1]} />
                </div>
            </div>
        </div>
    );
};

export default Books;
