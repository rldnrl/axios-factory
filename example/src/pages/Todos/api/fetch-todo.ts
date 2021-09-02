import client from "../../../utils/axios-factory";
import { Todo } from "../types";

const fetchTodos = async () => {
  const response = await client.get<Todo[]>("/");
  return response.data;
};

export default fetchTodos;
