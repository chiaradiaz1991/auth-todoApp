import Head from "next/head";
import styles from "../styles/Home.module.css";
import NavBar from "../components/NavBar";
import Todo from "../components/Todo";
import { table, getRecords } from "../pages/api/utils/Airtable";
import { TodosContext } from "../contexts/TodosContext";
import { useEffect, useContext } from "react";

export default function Home({ initialTodos }) {
  const { todos, setTodos } = useContext(TodosContext);

  useEffect(() => {
    setTodos(initialTodos);
  }, []);
  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <NavBar />
      <main className={styles.main}>
        <h2>Todo App</h2>
        <ul>
          {todos && todos.map((todo) => <Todo key={todo.id} todo={todo} />)}
        </ul>
      </main>

      <footer className={styles.footer}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{" "}
          <img src="/vercel.svg" alt="Vercel Logo" className={styles.logo} />
        </a>
      </footer>
    </div>
  );
}

export async function getServerSideProps(ctx) {
  try {
    const todos = await table.select({}).firstPage();
    return {
      props: {
        initialTodos: getRecords(todos),
      },
    };
  } catch (err) {
    console.log(err);
    return {
      props: {
        err: '"Opss.. something went wrong!',
      },
    };
  }
}
