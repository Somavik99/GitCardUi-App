import {  useState } from "react";
import CardGit from "../Cards/CardGit";
import "./Details.css";
import { Button } from "@chakra-ui/react";

const Details = () => {
  const [SearchInput, setSearchInput] = useState("");
  const [data, setData] = useState({});

  const onSubmitHandler = (e) => {
    e.preventDefault();
    fetch(`https://api.github.com/users/${SearchInput}`)
      .then((response) => {
        console.log(response);
        return response.json();
      })
      .then((value) => {
        console.log(value);
        setData(value);
      });
  };

  const SearchInputChange = (e) => {
    setSearchInput(e.target.value);
  };

  return (
    <form onSubmit={onSubmitHandler}>
      <header className="header">
        <h1 style={{ fontWeight: "bolder", fontSize: "30px" }}>
          Search GitCard
        </h1>
        <p>
          <input
            type="text"
            placeholder="Github username"
            value={SearchInput}
            id="w"
            onChange={SearchInputChange}
          />
          <Button type="submit">Search</Button>
        </p>
      </header>
      {setSearchInput ?<> (
        <div className="Card_Container">
          <CardGit data={data} />
        </div>)
      </> : ""}
    </form>
  );
};

export default Details;
