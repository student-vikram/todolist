 import React from 'react'
 
 export default function Header() {
   return (
     <div>
<nav style={{ backgroundColor: "#333", color: "#fff", padding: "10px 20px" }}>
  <ul
    style={{
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center"
    }}
  >
     <li style={{ marginRight: 15, display: "inline-block" }}>
      <a 
        href="/"  
        style={{
          color: "#fff",
          fontSize: 20,
          fontWeight: "bold",
          padding: 10,
          textDecoration: "none"
        }}
      >
        Todo List
      </a>
    </li>
    <li style={{ marginRight: 15, display: "inline-block" }}>
      <a
        href="/"
        style={{
          color: "#fff",
          fontSize: 16,
          fontWeight: "bold",
          padding: 10,
          textDecoration: "none"
        }}
      >
        Home
      </a>
    </li>
    <li style={{ marginRight: 15, display: "inline-block" }}>
      <a
        href="/about"
        style={{
          color: "#fff",
          fontSize: 16,
          fontWeight: "bold",
          padding: 10,
          textDecoration: "none"
        }}
      >
        About
      </a>
    </li>
    <li>
      <form style={{ display: "flex" }}>
        <input
          type="search"
          placeholder="Search"
          aria-label="Search"
          style={{
            border: "none",
            borderRadius: 25,
            backgroundColor: "#eee",
            padding: "5px 10px"
          }}
        />
        <button
          type="submit"
          style={{
            border: "none",
            borderRadius: 25,
            backgroundColor: "#337ab7",
            color: "#fff",
            padding: "5px 10px",
            marginLeft: 5
          }}
        >
          Search
        </button>
      </form>
    </li>
  </ul>
</nav>


     </div>
   )
 }
 