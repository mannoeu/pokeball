import axios from "axios";

const api = axios.create({
  baseURL: "https://pokeapi.co/api/v2/",
  "Content-Type": "application/json",
});
// type water: baseURL/type/11
// type fire: baseURL/type/10
export default api;
