import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect
} from "react-router-dom";
import { CustomApolloProvider } from "./core/apollo-provider";
import { ConnectivityMonitor } from "./core/connectivity-monitor";
import theme from "./core/mui-theme";
import { MuiThemeProvider } from "@material-ui/core/styles";
import AuthManager from "./core/auth-manager";
import Notifier from "./components/notifier";
import { LoginContainer } from "./routes/login/login-container";
import Dashboard from "./routes/dashboard/dashboard";
import Users from "./routes/users/users";
import UserDetail from "./routes/user-detail/user-detail";
import Applaud from "./routes/applaud/applaud";
import NotFoundRouteHandler from "./routes/not-found";
import LandingPage from "./routes/landing-page";

function App() {
  return (
    <MuiThemeProvider theme={theme}>
      <ConnectivityMonitor>
        <CustomApolloProvider>
          <Router>
            <AuthManager>
              <Switch>
                  <Route
                      path="/"
                      exact
                      render={() => <Redirect to="/home" />}
                  />
                  <Route path="/home" exact component={LandingPage} />
                  <Route path="/login" exact component={LoginContainer} />
                  <Route path="/dashboard" exact component={Dashboard} />
                  <Route path="/applaud" exact component={Applaud} />
                  <Route path="/users" exact component={Users} />
                  <Route path="/users/:id" exact component={UserDetail} />
                  <Route path="*" component={NotFoundRouteHandler} />
              </Switch>
            </AuthManager>
            <Notifier />
          </Router>
        </CustomApolloProvider>
      </ConnectivityMonitor>
    </MuiThemeProvider>
  );
}

export default App;
