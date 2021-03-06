import { v4 as uuid } from "uuid";
import { formatDate } from "../utils/authUtils";
/**
 * User Database can be added here.
 * You can add default users of your wish with different attributes
 * */

export const users = [
  {
    _id: "adarsh-balika-test-userId",
    firstName: "Adarsh",
    lastName: "Balika",
    username: "adarshbalika",
    password: "adarshBalika123",
    profileBackgroundUrl: "",
    bio: "You only live once, but if you do it right, once is enough.",
    websiteUrl: "https://www.google.com/",
    profileImage: {
      url: "https://i.pravatar.cc/1000",
      original_filename: "Pngtree—businessman",
    },
    createdAt: formatDate(),
    updatedAt: formatDate(),
  },
  {
    _id: uuid(),
    firstName: "Kumar",
    lastName: "Harsh",
    username: "haarshn",
    password: "harsh123",
    createdAt: formatDate(),
    updatedAt: formatDate(),
  },
  {
    _id: "harsh-kumar-test-userId",
    firstName: "Harsh",
    lastName: "Kumar",
    username: "harshkumar",
    password: "harsh@123",
    websiteUrl: "https://www.twitter.com/codeandchords",

    bio: "My Money dont jiggle jiggle , it goes !",
    createdAt: formatDate(),
    updatedAt: formatDate(),
  },
];
