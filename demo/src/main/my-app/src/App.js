import { useState } from "react";
import "./App.css";
import SearchBody from "./components/SearchBody";
import SearchResults from "./components/SearchResults";

function App() {
  const [results, setResults] = useState([
    {
      name: "nathan",
      id: "1",
      associateId: "CTS2536",
      email: "chainathanss@gmail.com",
      mobNum: 7868844671,
      angular: null,
      aptitude: null,
      aws: null,
      communication: null,
      docker: null,
      git: null,
      hibernate: null,
      html: null,
      jenkins: null,
      react: null,
      restful: null,
      spoken: null,
      spring: null,
    },
  ]);
  return (
    <div className="App">
      <div className="title">Admin Functionality</div>
      <SearchBody setResults={setResults} />
      <SearchResults results={results} />
    </div>
  );
}

export default App;
