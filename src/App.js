import { useState } from "react";
import Header from "./components/Header/Header";
import PlayerList from "./components/PlayerList/PlayerList";
import PlayerDetails from "./components/PlayerDetails/PlayerDetails";
import Signup from "./components/Signup/Signup";
import Welcome from "./components/Welcome/Welcome";
import { Switch, Route, Redirect } from "react-router-dom";
import EditProfile from "./components/EditProfile/EditProfile";

import "./App.scss";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const [currentUser, setCurrentUser] = useState({});

  const [checked, setChecked] = useState({
    badminton: false,
    tennis: false,
    squash: false,
    golf: false,
    bowling: false,
    tableTennis: false,
  });

  // const data = {
  //   _id: { $oid: "62f2f88be87bace95e1f61d0" },
  //   firstName: "Yasha",
  //   lastName: "Kuruvilla",
  //   email: "yasha.kuruvilla@gmail.com",
  //   postcode: "Sw8 2xs",
  //   bio: "sdfasdfasdf",
  //   latitude: { $numberDouble: "51.469729" },
  //   longitude: { $numberDouble: "-0.137402" },
  //   tennis: false,
  //   squash: false,
  //   badminton: false,
  //   tableTennis: false,
  //   bowling: true,
  //   golf: true,
  //   createdAt: { $date: { $numberLong: "1660090507814" } },
  //   updatedAt: { $date: { $numberLong: "1660090507814" } },
  //   __v: { $numberInt: "0" },
  // };

  return (
    <>
      <Header currentUser={currentUser} />
      <Switch>
        <Route
          path="/"
          exact
          render={() => (isLoggedIn ? <Redirect to="/players" /> : <Welcome />)}
        />
        <Route
          path="/users/:id/edit"
          exact
          render={() => (
            <EditProfile
              checked={checked}
              setChecked={setChecked}
              currentUser={currentUser}
              setCurrentUser={setCurrentUser}
            />
          )}
        />
        <Route path="/users/:id" exact render={() => <PlayerDetails />} />
        <Route
          path="/signup"
          exact
          render={() =>
            isLoggedIn ? (
              <Redirect to="/players" />
            ) : (
              <Signup
                checked={checked}
                setChecked={setChecked}
                setCurrentUser={setCurrentUser}
                setIsLoggedIn={setIsLoggedIn}
              />
            )
          }
        />
        <Route
          path="/players"
          render={() => <PlayerList currentUser={currentUser} />}
        />
      </Switch>

      {/* <PlayerList currentUser={currentUser} /> */}
    </>
  );
}

export default App;
