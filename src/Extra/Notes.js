
import { useState, useEffect } from "react";
import Axios from "axios";

function Notes() {
  const [noteTitle, setNoteTitle] = useState("");
  const [noteContent, setNoteContent] = useState("");
  const [notes, setNotes] = useState([]);
  useEffect(() => {
    fetchNotes();
  }, []);

  function fetchNotes() {
    Axios.get("http://localhost:3001/notes").then((res) => {
      setNotes(res.data);
      console.log(res.data)
    });
  }
  return (
    <>
      <div className="text-lg text-center bg-teal-500 font-extrabold">Add Note</div>
      <div class=" m-auto mx-8">
        <form class="bg-white w-full shadow-md rounded px-8 pt-6 pb-8 mb-4">
          <div class="mb-4">
            <label
              class="block text-gray-700 text-sm font-bold mb-2"
              for="username"
            >
              Title
            </label>
            <input
              class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="username"
              type="text"
              placeholder="Title"
              onChange={(e) => setNoteTitle(e.target.value)}
              value={noteTitle}
            />
          </div>
          <div class="mb-6">
            <label
              class="block text-gray-700 text-sm font-bold mb-2"
              for="password"
            >
              Conten
            </label>
            <input
              class="shadow appearance-none border border-red-500 rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
              id="password"
              type="text"
              placeholder="Content"
              onChange={(e) => {
                setNoteContent(e.target.value);
              }}
              value={noteContent}
            />
            <p class="text-red-500 text-xs italic">Please write Content.</p>
          </div>
          <div class="flex items-center justify-between">
            <button
              class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              type="button"
              onClick={() => {
                Axios.post("http://localhost:3001/notes/add", {
                  title: noteTitle,
                  content: noteContent,
                })
                  .then((res) => {
                    console.log(res);
                    setNoteTitle("");
                    setNoteContent("");
                  })
                  .then(() => {
                    fetchNotes();
                  });
              }}
            >
              Add Note
            </button>
          </div>
        </form>
      </div>
      <div className="text-lg text-center bg-teal-500 font-extrabold">All Notes</div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mx-4">
        {notes?.map((note, i) => {
          return <Note note={note} key={i} fetchNotes={fetchNotes} />;
        })}
      </div>
    </>
  );
}
const Note = ({ note, fetchNotes }) => {
  const [edit, setEdit] = useState(false);
  const [nTitle, setNTitle] = useState(note.title);
  const [nContent, setNContent] = useState(note.content);
  return (
    <div class="max-w-sm rounded overflow-hidden shadow-lg m-auto">
      <div class="px-6 py-4">
        <div class="font-bold text-xl mb-2">{note.title}</div>
        <p class="text-gray-700 text-base">{note.content}</p>
      </div>
      <div class="px-6 pt-4 pb-2">
        <span
          onClick={() => {
            Axios.delete(`http://localhost:3001/notes/delete/${note._id}`).then(
              () => {
                fetchNotes();
              }
            );
          }}
          class=" bg-red-200 cursor-pointer inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2"
        >
          Delete
        </span>
        <span
          onClick={() => {
            setEdit(!edit);
          }}
          class=" cursor-pointer inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2"
        >
          Edit
        </span>
      </div>
      {edit && (
        <div>
          <div class="mb-3 xl:w-96">
            <label
              for="exampleFormControlInput4"
              class="form-label inline-block mb-2 text-gray-700 text-sm mx-4"
            >
              Title
            </label>
            <input
              type="text"
              class="
          form-control
          block
          w-full
          px-2
          py-1
          text-sm
          font-normal
          text-gray-700
          bg-white bg-clip-padding
          border border-solid border-gray-300
          rounded
          transition
          ease-in-out
          mx-4
          focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none
        "
              id="exampleFormControlInput4"
              placeholder="Title here..."
              onChange={(e) => {
                setNTitle(e.target.value);
              }}
              value={nTitle}
            />
          </div>
          <div class="mb-3 xl:w-96">
            <label
              for="exampleFormControlInput3"
              class="form-label inline-block mb-2 text-gray-700 text-sm mx-4"
            >
              Content
            </label>
            <input
              type="text"
              class="
          form-control
          block
          w-full
          px-2
          py-1
          text-sm
          font-normal
          text-gray-700
          bg-white bg-clip-padding
          border border-solid border-gray-300
          rounded
          transition
          ease-in-out
          mx-4
          focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none
        "
              id="exampleFormControlInput3"
              placeholder="Content here...."
              onChange={(e) => {
                setNContent(e.target.value);
              }}
              value={nContent}
            />
          </div>
          <button
            class="mx-4 mb-2 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
            onClick={() => {
              console.log({
                id: note._id,
                title: nTitle,
                content: nContent,
              });
              Axios.put("http://localhost:3001/notes/edit", {
                id: note._id,
                title: nTitle,
                content: nContent,
              }).then(() => {
                fetchNotes();
                setEdit(!edit)
              });
            }}
          >
            Save
          </button>
        </div>
      )}
    </div>
  );
};

export default Notes;
