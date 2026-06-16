import { useState } from "react";

function App() {
  const [query, setQuery] = useState("");
  const [response, setResponse] = useState("");

  const handleSubmit = async () => {
  const res = await fetch(
    "https://jsonplaceholder.typicode.com/posts/1"
  );

  const data = await res.json();

  setResponse(data.title);
};

const postData = async () => {
  const res = await fetch(
    "https://jsonplaceholder.typicode.com/posts",
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        title: query,
        body: "Sample body",
        userId: 1,
      }),
    }
  );

  const data = await res.json();

  setResponse(JSON.stringify(data));
};
const updateData = async () => {
  const res = await fetch(
    "https://jsonplaceholder.typicode.com/posts/1",
    {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        id: 1,
        title: query,
        body: "Updated body",
        userId: 1,
      }),
    }
  );

  const data = await res.json();
  setResponse(JSON.stringify(data, null, 2));
};

const deleteData = async () => {
  await fetch(
    "https://jsonplaceholder.typicode.com/posts/1",
    {
      method: "DELETE",
    }
  );

  setResponse("Record Deleted Successfully");
};
  return (
  <div style={{ padding: "30px", fontFamily: "Arial" }}>
    <h1>Query Form</h1>

    <label>Enter Query:</label>
    <br />
    <input
      type="text"
      placeholder="Type here..."
      value={query}
      onChange={(e) => setQuery(e.target.value)}
      style={{
        padding: "8px",
        width: "300px",
        marginTop: "10px",
        marginBottom: "15px",
      }}
    />

    <br />

    <button
      onClick={handleSubmit}
      style={{ padding: "8px 15px", marginRight: "10px" }}
    >
      GET API
    </button>

    <button
      onClick={postData}
      style={{ padding: "8px 15px" }}
    >
      POST API
    </button>

    <button
  onClick={updateData}
  style={{ padding: "8px 15px", marginLeft: "10px" }}
>
  PUT API
</button>

<button
  onClick={deleteData}
  style={{ padding: "8px 15px", marginLeft: "10px" }}
>
  DELETE API
</button>

    <h3>Response:</h3>

    <pre
      style={{
        backgroundColor: "#f4f4f4",
        padding: "15px",
        borderRadius: "5px",
      }}
    >
      {response}
    </pre>
  </div>
);
}

export default App;