import React, { Fragment } from "react";
import Login from "./pages/login";
import LandingPages from "./pages/LandingPages";
import Register from "./pages/register";
import ForgotPassword from "./pages/forgotpassword";
import { Switch, Route } from "react-router-dom";
import PrivateRoute from "./middlewares/PrivateRoute";
import CreatePin from "./pages/createPin";
import PinSuccess from "./pages/confirmPin";
import SearchReceiver from "./pages/searchReceiver";
import HowToTopUp from "./pages/howToTopUp";
import PersonalInfo from "./pages/personalnfo";
import ChangePassword from "./pages/changePassword";
import ManagePhone from "./pages/managePhoneNumber";
function App() {
  return (
    <Fragment>
        <Switch>
          <Route exact path="/" component={LandingPages}/>
          <Route path="/login" component={Login} />
          <Route path="/register" component={Register} />
          <Route path="/forgot-password" component={ForgotPassword} />
          <Route path="/pin" component={CreatePin} />
          <Route path="/pin-success" component={PinSuccess} />
          <PrivateRoute version={2} path="/how-to" component={HowToTopUp} />
          <PrivateRoute version={2} path="/search-receiver" component={SearchReceiver} />
          <PrivateRoute version={2} path="/personal-info" component={PersonalInfo} />
          <PrivateRoute version={2} path="/change-password" component={ChangePassword} />
          <PrivateRoute version={2} path="/manage-phone-number" component={ManagePhone} />
        </Switch>      
    </Fragment>
  );
}

export default App;
