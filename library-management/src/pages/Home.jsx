function Home() {
  return (
    <main className="home-page">

      <h1>Welcome to Library Management System</h1>

      <p>
        Manage books, issue books to members,
        and view library transaction history.
      </p>

      <div className="home-cards">

        <div className="home-card">
          <h2>📚 Books</h2>
          <p>View all available books in the library.</p>
        </div>

        <div className="home-card">
          <h2>👤 Members</h2>
          <p>Issue books to registered library members.</p>
        </div>

        <div className="home-card">
          <h2>📖 Transactions</h2>
          <p>View issued and returned book history.</p>
        </div>

      </div>

    </main>
  );
}

export default Home;