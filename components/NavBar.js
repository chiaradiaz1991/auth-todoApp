import React from "react";

export default function NavBar() {
  return <>
  <nav>
    <p>My Todos</p>
    <div>
      <button><a href="/api/login">Log in</a></button>
      <button><a href="/api/logout">Log out</a></button>
    </div>
  </nav>
  </>;
}
