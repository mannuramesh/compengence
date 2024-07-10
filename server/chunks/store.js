import { w as writable } from "./index.js";
const posts = writable([]);
const users = writable([]);
const comments = writable([]);
export {
  comments as c,
  posts as p,
  users as u
};
