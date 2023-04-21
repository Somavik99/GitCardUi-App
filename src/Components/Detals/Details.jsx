import axios from "axios";
import { useEffect, useState } from "react";
import CardGit from "../Cards/CardGit";

const Details = () => {
  const [ViewDetails, setViewDetails] = useState([]);

  const HomePage = async () => {
    await axios
      .get("https://api.github.com/users")
      .then((res) => {
        console.log(res.data);
        setViewDetails(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    HomePage();
  }, []);

  return (
    <div>
      {ViewDetails.map((user, index) => {
        return (
          <CardGit
            key={index}
            image={user.avatar_url}
            UserName={user.login}
            repos={user.repos_url}
            gists={user.gists_url}
          />
        );
      })}
    </div>
  );
};

export default Details;
