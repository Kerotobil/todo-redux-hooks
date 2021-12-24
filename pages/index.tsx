import { ToDoList } from "../components/todo";
import { Layout } from "../components/layouts";

export default function Home() {
  return (
    <Layout variant="home">
      <div className="my-auto py-24">
        <ToDoList />
      </div>
    </Layout>
  );
}
