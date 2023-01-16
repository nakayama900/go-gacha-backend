import { Component, createResource } from "solid-js";
import { createSolidTable } from "@tanstack/solid-table";
import { DefaultApiFp } from "../client";
// import second from 'first'

import logo from "./logo.svg";
import styles from "./App.module.css";
function fetchAll() { }
const App: Component = () => {
  const [record, { mutate, refetch }] = createResource(fetchAll);
  const table = createSolidTable({
    get data() {
      return data();
    },
    defaultData: data(),
  });
  return (
    <div class={styles.App}>
      <header class={styles.header}>
        <img src={logo} class={styles.logo} alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          class={styles.link}
          href="https://github.com/solidjs/solid"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn Solid
        </a>
      </header>
    </div>
  );
};

export default App;
