import { v4 as uuid } from "uuid";
import { formatDate } from "../utils/authUtils";

/**
 * Posts can be added here.
 * You can add default posts of your wish with different attributes
 * */

export const posts = [
  {
    _id: uuid(),
    content:"I am starting a band called 1023 MB , I dont think we will ever get a gig !!",
    likes: {
      likeCount: 0,
      likedBy: [],
      dislikedBy: [],
    },
    username: "adarshbalika",
    firstName: "Adarsh",
    lastName: "Balika",
    createdAt: formatDate(),
    updatedAt: formatDate(),
  },
  {
    _id: uuid(),
    content: "Q : Why do web developers always go into wrong hotel room Ans : Because they were in room 301",
       likes: {
      likeCount: 0,
      likedBy: [],
      dislikedBy: [],
    },
    username: "brucewayne",
    firstName: "bruce",
    lastName: "wayne",
    createdAt: formatDate(),
    updatedAt: formatDate(),
  },
  {
    _id: uuid(),
    content:" I love javascript , but THIS is horrible ",
    likes: {
      likeCount: 0,
      likedBy: [],
      dislikedBy: [],
    },
    userId: "adarsh-balika-test-userId",
    comments: [],
    postMedia: null,
    firstName: "Adarsh",
    lastName: "Balika",
    username: "adarshbalika",
    createdAt: "2022-05-15T16:43:34+05:30",
    updatedAt: "2022-05-15T16:43:34+05:30",
  },
  {
    _id: uuid(),
    content:"Why was the JavaScript developer sad? a. Because they didn't Node how to Express himself ",
    likes: {
      likeCount: 0,
      likedBy: [],
      dislikedBy: [],
    },
    userId: "adarsh-balika-test-userId",
    comments: [],
    postMedia: null,
    firstName: "Not Adarsh",
    lastName: "Balika",
    username: "notadarshbalika",
    createdAt: "2022-05-15T16:43:34+05:30",
    updatedAt: "2022-05-15T16:43:34+05:30",
  },
  {
    _id: uuid(),
    content:"Don't trust JavaScript programmers. All they do is promises but they never callback. ",
    likes: {
      likeCount: 0,
      likedBy: [],
      dislikedBy: [],
    },
    userId: "adarsh-balika-test-userId",
    comments: [],
    postMedia: null,
    firstName: "Not Adarsh",
    lastName: "Balika",
    username: "notadarshbalika",
    createdAt: "2022-05-15T16:43:34+05:30",
    updatedAt: "2022-05-15T16:43:34+05:30",
  },
];
