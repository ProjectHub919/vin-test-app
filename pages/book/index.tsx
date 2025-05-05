// imports
import { GetServerSideProps } from "next";
import Link from "next/link";

// Define the Book type
type Book = {
    id: number;
    title: string;
    author: string;
    genre: string;
    description: string;
    isbn: string;
    published: string;
    publisher: string;
    image: string;
};

// Array of books
type BookListProps = {
    books: Book[];
};

export const getServerSideProps: GetServerSideProps<BookListProps> = async () => {
    // Fetch the book data from the API
    const res = await fetch("https://fakerapi.it/api/v1/books");
    const data = await res.json();

    // Return the book data as props
    return {
        props: {
            books: data.data,
        },
    };
}

const BookListPage = ({ books }: BookListProps) => {
    return (
        <div style={{ padding: "20px" }}>
            <h1 style={{ textAlign: "center" }}>Book List</h1>
            <table border={1} cellPadding={10}>
                <thead>
                    <tr>
                        <th>Title</th>
                        <th>Author</th>
                        <th>Genre</th>
                        <th>Description</th>
                        <th>ISBN</th>
                        <th>Published Date</th>
                        <th>Publisher</th>
                    </tr>
                </thead>
                <tbody>
                    {books.map((book) => (
                        <tr key={book.id}>
                            <td>
                                {/* Link to the book detail page with query parameters */}
                                <Link href={{
                                    pathname: `/book/${book.id}`,
                                    query: {
                                        title: book.title,
                                        author: book.author,
                                        genre: book.genre,
                                        description: book.description,
                                        isbn: book.isbn,
                                        published: book.published,
                                        publisher: book.publisher,
                                        image: book.image,
                                    },
                                }}>
                                    {book.title}
                                </Link>
                            </td>
                            <td>{book.author}</td>
                            <td>{book.genre}</td>
                            <td>{book.description}</td>
                            <td>{book.isbn}</td>
                            <td>{new Date(book.published).toLocaleDateString('en-GB')}</td>
                            <td>{book.publisher}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div >
    );
}

export default BookListPage;