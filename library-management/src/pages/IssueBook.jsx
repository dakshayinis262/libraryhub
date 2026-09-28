import { useState } from "react";
import { supabase } from "../supabase";

function IssueBook() {

  const [memberName, setMemberName] = useState("");
  const [bookTitle, setBookTitle] = useState("");
  const [memberEmail, setMemberEmail] = useState("");
  const [issueDate, setIssueDate] = useState("");

  async function handleIssueBook() {

    if (!memberName || !bookTitle || !memberEmail || !issueDate) {
      alert("Please fill all the details");
      return;
    }

    const { data, error } = await supabase
      .from("library_transactions")
      .insert([
        {
          member_name: memberName,
          member_email: memberEmail,
          book_title: bookTitle,
          issue_date: issueDate,
          status: "Issued"
        }
      ]);

    if (error) {
      console.error(error);
      alert("Book issue failed");
      return;
    }

    alert("Book issued successfully!");

    setMemberName("");
    setBookTitle("");
    setMemberEmail("");
    setIssueDate("");
  }

  return (
    <main className="issue-page">

      <h1>Issue Book</h1>

      <div className="issue-form">

        <label htmlFor="memberName">
          Member Name
        </label>

        <input
          id="memberName"
          type="text"
          value={memberName}
          onChange={(e) => setMemberName(e.target.value)}
          placeholder="Enter member name"
        />

        <label htmlFor="memberEmail">
          Member Email
        </label>

        <input
          id="memberEmail"
          type="email"
          value={memberEmail}
          onChange={(e) => setMemberEmail(e.target.value)}
          placeholder="Enter member email"
        />

        <label htmlFor="bookTitle">
          Select Book
        </label>

        <select
          id="bookTitle"
          value={bookTitle}
          onChange={(e) => setBookTitle(e.target.value)}
        >

          <option value="">
            -- Select Book --
          </option>

          <option value="The Alchemist">
            The Alchemist
          </option>

          <option value="Wings of Fire">
            Wings of Fire
          </option>

          <option value="Atomic Habits">
            Atomic Habits
          </option>

          <option value="Rich Dad Poor Dad">
            Rich Dad Poor Dad
          </option>

        </select>

        <label htmlFor="issueDate">
          Issue Date
        </label>

        <input
          id="issueDate"
          type="date"
          value={issueDate}
          onChange={(e) => setIssueDate(e.target.value)}
        />

        <button onClick={handleIssueBook}>
          Issue Book
        </button>

      </div>

      <section className="issue-details">

        <h3>Issue Details</h3>

        <p>
          Member:
          <strong>{memberName || "-"}</strong>
        </p>

        <p>
          Email:
          <strong>{memberEmail || "-"}</strong>
        </p>

        <p>
          Book:
          <strong>{bookTitle || "-"}</strong>
        </p>

        <p>
          Issue Date:
          <strong>{issueDate || "-"}</strong>
        </p>

      </section>

    </main>
  );
}

export default IssueBook;