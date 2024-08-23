/* eslint-disable react/prop-types */
import { useEffect } from "react";
import axios from "axios";
import BookCard from "./BookCard";

const BookList = ({ books, setBooks }) => {
  useEffect(() => {
    fetchBooks();
  }, []);

  const fetchBooks = async () => {
    try {
      const res = await axios.get("http://localhost:5000/books");
      setBooks(res.data);
    } catch (err) {
      console.error(err);
    }
  };

  const handleDelete = async (id) => {
    try {
      await axios.delete(`http://localhost:5000/books/${id}`);
      setBooks(books.filter((book) => book._id !== id));
    } catch (err) {
      console.error(err);
    }
  };

  const handleEdit = async (book) => {
    const newTitle = prompt("Enter new title:", book.title);
    const newAuthor = prompt("Enter new author:", book.author);
    const newGenre = prompt("Enter new genre:", book.genre);

    if (newTitle && newAuthor && newGenre) {
      try {
        const res = await axios.patch(
          `http://localhost:5000/books/${book._id}`,
          {
            title: newTitle,
            author: newAuthor,
            genre: newGenre,
          }
        );
        setBooks(books.map((b) => (b._id === book._id ? res.data : b)));
      } catch (err) {
        console.error(err);
      }
    }
  };

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 p-6">
      {books.map((book) => (
        <BookCard
          key={book._id}
          book={book}
          onDelete={handleDelete}
          onEdit={handleEdit}
        />
      ))}
    </div>
  );
};

export default BookList;
