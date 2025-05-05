import { useRouter } from "next/router";

const BookDetailPage = () => {
    // Use Next.js router to access query parameters
    // This allows us to get the book details from the URL
    const router = useRouter();
    const {
        title,
        author,
        genre,
        description,
        isbn,
        published,
        publisher,
        image,
    } = router.query;

    // Define styles for elements
    const containerStyle: React.CSSProperties = {
        padding: '32px',
        maxWidth: '800px',
        margin: '40px auto',
        backgroundColor: '#f8f8f8',
        borderRadius: '8px',
        boxShadow: '0 2px 6px rgba(0, 0, 0, 0.1)',
    };

    const titleStyle: React.CSSProperties = {
        fontSize: '32px',
        fontWeight: 'bold',
        marginBottom: '16px',
    };

    const detailStyle: React.CSSProperties = {
        marginBottom: '12px',
    };

    const labelStyle: React.CSSProperties = {
        fontWeight: 'bold',
        display: 'inline-block',
        width: '120px',
    };

    return (
        <div style={containerStyle}>
            <h1 style={titleStyle}>{title}</h1>
            {/* Display the book image */}
            <img src={image as string} alt={title as string} />

            <p style={detailStyle}>
                <span style={labelStyle}>Author:</span> {author}
            </p>
            <p style={detailStyle}>
                <span style={labelStyle}>Genre:</span> {genre}
            </p>
            <p style={detailStyle}>
                <span style={labelStyle}>Description:</span> {description}
            </p>
            <p style={detailStyle}>
                <span style={labelStyle}>ISBN:</span> {isbn}
            </p>
            <p style={detailStyle}>
                <span style={labelStyle}>Published Date:</span> {published}
            </p>
            <p style={detailStyle}>
                <span style={labelStyle}>Publisher:</span> {publisher}
            </p>
        </div>
    );
};

export default BookDetailPage;
