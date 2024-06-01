import React, { useState } from "react";
import { Button, Label, TextInput, Select, Textarea } from "flowbite-react";
const UploadBook = () => {
  const bookCategories = [
    "Fiction",
    "Non-Fiction",
    "Mystery",
    "Programming",
    "Comics",
    "Science Fiction",
    "Self-Help",
    "Fantasy",
    "Horror",
    "Biography",
    "AutoBiography",
    "History",
    "Memorial",
    "Bussiness",
    "Children Books",
    "Travel",
    "Religions",
    "Art and Design",
  ];
  const [SelectBookCategory, setSelectedBookCategory] = useState(
    bookCategories[0]
  );
  const handleChangeSelectedValue = (e) => {
    setSelectedBookCategory(e.target.value);
  };

  {
    /*Handle Book submit */
  }
  const handleBookSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    const bookTitle = form.bookTitle.value;
    const authorName = form.authorName.value;
    const bookDescription = form.bookDescription.value;
    const imageUrl = form.imageUrl.value;
    const category = form.categoryName.value;
    const bookPdfUrl = form.bookPdfUrl.value;
    const bookObject = {
      bookTitle,
      authorName,
      imageUrl,
      category,
      bookDescription,
      bookPdfUrl,
    };
    console.log(bookObject);

    //Send this data in database
    fetch("http://localhost:5000/upload-book", {
      method: "POST",
      headers: { "Content-type": "application/json" },
      body: JSON.stringify(bookObject),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        alert("Book Uploaded Successfully");
        form.reset();
      });
  };
  return (
    <div className="px-4 my-12">
      <h2 className="mb-8 text-3xl font-bold">Upload a Book</h2>
      <form
        onSubmit={handleBookSubmit}
        className="flex lg:w-[1180px] flex-col flex-wrap gap-4"
      >
        {/*First Row  */}
        <div className="flex gap-8">
          <div className="lg:w-1/2">
            <div className="mb-2 block">
              <Label htmlFor="bookTitle" value="Book Title" />
            </div>
            <TextInput
              id="bookTitle"
              type="text"
              placeholder="Book Name"
              name="bookTitle"
              required
            />
          </div>
          <div className="lg:w-1/2">
            <div className="mb-2 block">
              <Label htmlFor="authorName" value="Author Name" />
            </div>
            <TextInput
              id="authorName"
              type="text"
              placeholder="Author Name"
              name="authorName"
              required
            />
          </div>
        </div>
        {/*Second Row */}
        <div className="flex gap-8">
          <div className="lg:w-1/2">
            <div className="mb-2 block">
              <Label htmlFor="imageUrl" value="Book Image URL" />
            </div>
            <TextInput
              id="imageUrl"
              type="text"
              placeholder="Book Image URL"
              name="imageUrl"
              required
            />
          </div>
          <div className="lg:w-1/2">
            <div className="mb-2 block">
              <Label htmlFor="inputState" value="Book Category" />
            </div>
            <Select
              id="inputState"
              name="categoryName"
              className="w-full rounded"
              value={SelectBookCategory}
              onChange={handleChangeSelectedValue}
            >
              {bookCategories.map((options) => (
                <option key={options} value={options}>
                  {options}
                </option>
              ))}
            </Select>
          </div>
        </div>
        {/* Book Description */}
        <div>
          <div className="mb-2 block">
            <Label htmlFor="bookDescription" value="Book Description" />
          </div>
          <Textarea
            id="bookDescription"
            placeholder="Write your book description...."
            required
            className="w-full"
            rows={6}
          />
        </div>
        {/*Book PDF link */}
        <div className="">
          <div className="mb-2 block">
            <Label htmlFor="bookPdfUrl" value="Book PDF URL" />
          </div>
          <TextInput
            id="bookPdfUrl"
            name="bookPdfUrl"
            type="text"
            // rightIcon={HiMail}
            placeholder="Book Pdf Url"
            required
          />
        </div>
        <Button
          type="submit"
          className="mt-5 text-white bg-blue-700 hover:bg-black transition-all ease-in duration-200 rounded-r-lg"
        >
          Upload Book
        </Button>
      </form>
    </div>
  );
};

export default UploadBook;
