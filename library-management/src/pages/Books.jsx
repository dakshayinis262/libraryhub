import BookCard from "../components/BookCard";

function Books() {
  return (
    <main className="books-page">

      <h1>Library Books</h1>

      <div className="books-grid">

        <BookCard
          title="The Alchemist"
          author="Paulo Coelho"
          category="Fiction"
          isbn="9780061122415"
          copies="5"
        />

        <BookCard
          title="Wings of Fire"
          author="A. P. J. Abdul Kalam"
          category="Biography"
          isbn="9788173711466"
          copies="3"
        />

        <BookCard
          title="Atomic Habits"
          author="James Clear"
          category="Self Help"
          isbn="9780735211292"
          copies="4"
        />

        <BookCard
          title="Rich Dad Poor Dad"
          author="Robert Kiyosaki"
          category="Finance"
          isbn="9781612680194"
          copies="2"
        />

      </div>

    </main>
  );
}

export default Books;