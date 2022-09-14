import axios from "axios";

export const api = axios.create({
  baseURL: "https://localhost:5001/",
  headers: {
    "Content-Type": "application/json",
  },
});

function fetchAllData<Type>(arg: Type[]): Type[] {
  return arg;
}

//GET ALL
export async function getAll<Type>(controllerUrl: string, params?: {}) {
  const { data } = await api.get(`${controllerUrl}`, {
    params: params,
  });
  return fetchAllData<Type>(data);
}