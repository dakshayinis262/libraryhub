function BookCard(props) {
  return (
    <div className="book-card">

      <h2>{props.title}</h2>

      <p>
        <strong>Author:</strong> {props.author}
      </p>

      <p>
        <strong>Category:</strong> {props.category}
      </p>

      <p>
        <strong>ISBN:</strong> {props.isbn}
      </p>

      <p>
        <strong>Available Copies:</strong> {props.copies}
      </p>

    </div>
  );
}

export default BookCard;