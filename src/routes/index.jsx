import { Switch, Route } from "react-router-dom";
import Home from "../pages/Home";
import Dashboard from "../pages/Dashboard";
import Login from "../pages/Login";
import Signup from "../pages/Signup";
import UserGroups from "../pages/UserGroups";
import Groups from "../pages/Groups";
import LoadUserData from "../components/LoadUserData";
import GroupDetails from "../pages/GroupDetails";

import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Routes = () => {
  return (
    <>
      <LoadUserData />
      <Switch>
        <Route path="/login">
          <Login />
        </Route>
        <Route path="/signup">
          <Signup />
        </Route>
        <Route path="/groups">
          <Groups />
        </Route>
        <Route path="/dashboard/groups">
          <UserGroups />
        </Route>
        <Route path="/dashboard">
          <Dashboard />
        </Route>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/group/:groupId">
          <GroupDetails />
        </Route>
      </Switch>
      <ToastContainer
        position="top-center"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
    </>
  );
};

export default Routes;
