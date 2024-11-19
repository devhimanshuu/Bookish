import React, { useEffect, useState } from "react";

import { Checkbox, Table } from "flowbite-react";
const ManageBook = () => {
  var index = 1;
  const [books, setBooks] = useState([]);
  useEffect(() => {
    fetch("http://localhost:5000/all-books")
      .then((res) => res.json())
      .then((data) => setBooks(data));
  }, []);
  return (
    <div className="px-4 my-12">
      <h2 className="mb-8 text-3xl font-bold">Manage Your Books</h2>

      <div className="">
        <table>
          <thead>
            <tr>
              <th className="px-10 py-3 bg-slate-800 text-white rounded-l-lg">
                No.
              </th>
              <th className="px-10 py-3 bg-slate-800 text-white">Book Name</th>
              <th className="px-10 py-3 bg-slate-800 text-white">
                {" "}
                Author Name
              </th>
              <th className="px-10 py-3 bg-slate-800 text-white">Category</th>
              <th className="px-10 py-3 bg-slate-800 text-white rounded-r-lg">
                Edit/Manage
              </th>
            </tr>
          </thead>
          <tbody>
            {books.map((book) => (
              <tr key={books._id}>
                <td>{(index) => index + 1}</td>
                <td>{book.bookTitle}</td>
                <td>{book.authorName}</td>
                <td>{book.category}</td>
                <td>
                  <button>Edit</button>
                  <button>Delete</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ManageBook;
