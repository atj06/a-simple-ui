import { useState } from "react";
import axios from "axios";

function App() {
  const [query, setQuery] = useState("");
  const [response, setResponse] = useState(null);
  const [method, setMethod] = useState("");
  const [tickets, setTickets] = useState([]);

  const analyzeTicket = async () => {
    try {
      const res = await axios.post(
        "http://localhost:8080/tickets",
        {
          description: query,
        }
      );

      console.log("API Response:", res.data);
      setResponse(res.data);
    } catch (error) {
      console.error(error);
      setResponse(null);
    }
  };

  const getTickets = async () => {
    try {
      const res = await axios.get("http://localhost:8080/tickets");

      console.log("All Tickets:", res.data);
      setTickets(res.data);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div
      style={{
        padding: "30px",
        fontFamily: "Arial",
      }}
    >
      <h1>API Tester - Ticket Summarizer</h1>

      <label>Select Method:</label>
      <br />
      <br />

      <select
        value={method}
        onChange={(e) => setMethod(e.target.value)}
        style={{
          padding: "8px",
          borderRadius: "5px",
        }}
      >
        <option value="">Select Method</option>
        <option value="POST">POST</option>
        <option value="GETALL">GET ALL</option>
      </select>

      <br />
      <br />

      {method === "POST" && (
        <>
          <label>Enter Ticket Description:</label>

          <br />
          <br />

          <textarea
            rows="5"
            cols="60"
            placeholder="Enter ticket details..."
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            style={{
              padding: "10px",
              borderRadius: "5px",
            }}
          />

          <br />
          <br />

          <button
            onClick={analyzeTicket}
            style={{
              padding: "10px 20px",
              cursor: "pointer",
            }}
          >
            Create Ticket
          </button>

          {response && (
            <div
              style={{
                backgroundColor: "#f4f4f4",
                padding: "20px",
                borderRadius: "10px",
                marginTop: "20px",
                width: "500px",
                boxShadow: "0 2px 5px rgba(0,0,0,0.2)",
              }}
            >
              <h3>Ticket Result</h3>

              <p>
                <b>Summary:</b> {response.summary}
              </p>

              <p>
                <b>Priority:</b> {response.priority}
              </p>

              <p>
                <b>Category:</b> {response.category}
              </p>
            </div>
          )}
        </>
      )}

      {method === "GETALL" && (
        <>
          <button
            onClick={getTickets}
            style={{
              padding: "10px 20px",
              cursor: "pointer",
            }}
          >
            View All Tickets
          </button>

          <br />
          <br />

          {tickets.length === 0 ? (
            <p>No tickets found.</p>
          ) : (
            tickets.map((ticket) => (
              <div
                key={ticket.id}
                style={{
                  backgroundColor: "#f4f4f4",
                  padding: "20px",
                  borderRadius: "10px",
                  marginBottom: "10px",
                  width: "500px",
                  boxShadow: "0 2px 5px rgba(0,0,0,0.2)",
                }}
              >
                <h4>Ticket #{ticket.id}</h4>

                <p>
                  <b>Summary:</b> {ticket.summary}
                </p>

                <p>
                  <b>Priority:</b> {ticket.priority}
                </p>

                <p>
                  <b>Category:</b> {ticket.category}
                </p>
              </div>
            ))
          )}
        </>
      )}
    </div>
  );
}

export default App;