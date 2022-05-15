export const routes = [
  {
    component: "Home",
    path: "/",
  },
  {
    component: "LoginPage",
    path: "/login",
  },
  {
    component: "LogoutPage",
    path: "/logout",
  },
  {
    component: "ChooseRolePage",
    path: "/role",
  },
  {
    component: "DonatorRegistrationPage",
    path: "/donator/register",
  },
  {
    component: "DonatorHomePage",
    path: "/donator",
  },
  {
    component: "DonatorSubscriptionPage",
    path: "/donator/subscription",
  },
  {
    component: "DonateeRegistrationPage",
    path: "/donatee/register",
  },
  {
    component: "BuyerPage",
    path: "/donatee/details",
  },
  {
    component: "DonateeHomePage",
    path: "/donatee",
  },
  { 
    component: "ChildRegistrationPage", 
    path: "/donatee/register_child" 
  },
  { 
    component: "DonateeChildPostPage", 
    path: "/donatee/child/:id/update" 
  },
];
