import { useState } from "react";
import { supabase } from "../supabase";

function LibraryHistory() {

  const [transactions, setTransactions] = useState([]);

  async function getTransactions() {

    const { data, error } = await supabase
      .from("library_transactions")
      .select("*")
      .order("created_at", { ascending: false });

    if (error) {
      console.error(error);
      alert("Failed to retrieve library history");
      return;
    }

    setTransactions(data);
  }

  return (
    <main className="history-page">

      <h1>Library History</h1>

      <button
        className="history-button"
        onClick={getTransactions}
      >
        View Library History
      </button>

      <div className="history-table-wrapper">

        <table className="history-table">

          <thead>
            <tr>
              <th>Member</th>
              <th>Email</th>
              <th>Book</th>
              <th>Issue Date</th>
              <th>Status</th>
            </tr>
          </thead>

          <tbody>

            {transactions.map((transaction) => (

              <tr key={transaction.id}>

                <td>
                  {transaction.member_name}
                </td>

                <td>
                  {transaction.member_email}
                </td>

                <td>
                  {transaction.book_title}
                </td>

                <td>
                  {transaction.issue_date}
                </td>

                <td>
                  {transaction.status}
                </td>

              </tr>

            ))}

          </tbody>

        </table>

      </div>

    </main>
  );
}

export default LibraryHistory;