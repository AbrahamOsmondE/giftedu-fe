import React from "react";
import { Switch, Route } from "react-router-dom";
import { withRouter } from "react-router";

// pages
import {
  Home,
  NotFound,
  LoginPage,
  ChooseRolePage,
  LogoutPage,
  DonatorRegistrationPage,
  DonatorHomePage,
  DonateeRegistrationPage,
  DonatorChildPage,
  DonateeHomePage,
  ChildRegistrationPage,
  DonatorSubscriptionPage,
  DonateeChildPostPage,
  DonateeChildPage,
} from "pages";

// routes config
import { routes } from "./routesConfig";

const components = {
  Home,
  LoginPage,
  ChooseRolePage,
  LogoutPage,
  DonatorRegistrationPage,
  DonatorHomePage,
  DonateeRegistrationPage,
  DonatorChildPage,
  DonateeHomePage,
  ChildRegistrationPage,
  DonatorSubscriptionPage,
  DonateeChildPostPage,
  DonateeChildPage,
};

function Routes() {
  return (
    <main className="w-full">
      <Switch>
        {routes.map(({ component, path }, index) => {
          const Component = components[component];
          return (
            <Route key={index} exact path={path}>
              <Component />
            </Route>
          );
        })}
        <Route path="*">
          <NotFound />
        </Route>
      </Switch>
    </main>
  );
}

export default withRouter(Routes);
