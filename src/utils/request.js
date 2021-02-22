import axios from "axios";
import { BLOG_BASE_URL } from "./url";

export const API = axios.create({
  baseURL: BLOG_BASE_URL,
});
