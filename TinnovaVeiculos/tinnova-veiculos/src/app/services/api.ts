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
export async function getAll<Type>(controllerUrl: string, filters?: {}) {
  const { data } = await api.get(`${controllerUrl}`, {
    params: filters,
  });
  return fetchAllData<Type>(data);
}


//GET BY ID
export async function getById<Type>(
  controllerUrl: string,
  id: number,
  params?: {}
) {
  const { data } = await api.get(`/${controllerUrl}/${id}`, {
    params: params,
  });
  return fetchData<Type>(data);
}

function fetchData<Type>(arg: Type): Type {
  return arg;
}

//CREATE
export async function createEntity<Type>(controllerUrl: string, body: Type) {
  const { data } = await api.post(`/${controllerUrl}`, body);
}

//UPDATE
export async function updateEntity<Type>(controllerUrl: string, body: Type) {
  const { data } = await api.put(`/${controllerUrl}`, body);
}

//DELETE
export async function deleteEntity<Type>(controllerUrl: string, body: Type) {
  const { data } = await api.delete(`/${controllerUrl}`, body);
}
