import { sleep } from "../utils/apiUtil";
import axiosClient from "./axiosClient";
import { books, booksForYou } from "./fake-api";

const noteAPI = {
  getNotesInBookcase: () => {
    const url = "/notes";
    return axiosClient.get(url);
  },
  createNote: (note) => {
    const url = "/notes";
    const req = { name: note.name, book: note.book, image: note.image };
    return axiosClient.post(url, req);
  },
  getNotesActive: () => {
    const url = "/notes/getNotesActive";
    return axiosClient.get(url);
  },
  getNoteDetail: (_id) => {
    const url = "/notes/getDetail/" + _id;
    return axiosClient.get(url);
  },
  putNote: (note) => {
    const url = "/notes";
    const req = {
      _id: note._id,
      name: note.name,
      content: note.content,
      page: note.page,
    };
    return axiosClient.put(url, req);
  },
  putNoteContent: (note) => {
    const url = "/notes/content";
    const req = {
      _id: note._id,
      content: note.content,
    };
    return axiosClient.put(url, req);
  },
  putNoteNumberPage: (note) => {
    const url = "/notes/page";
    const req = {
      _id: note._id,
      page: note.page,
    };
    return axiosClient.put(url, req);
  },
  deleteNote: (_id) => {
    const url = "/notes/" + _id;
    return axiosClient.delete(url);
  },
  changeNoteInfo: (note) => {
    const url = "/notes/changeInfo";
    const req = { _id: note._id, image: note.image, name: note.name };
    return axiosClient.put(url, req);
  },
  closeNote: (_id) => {
    const url = "/notes/close/" + _id;
    return axiosClient.get(url);
  },
};

export default noteAPI;
