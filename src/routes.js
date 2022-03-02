/*!

=========================================================
* Now UI Dashboard PRO React - v1.5.0
=========================================================

* Product Page: https://www.creative-tim.com/product/now-ui-dashboard-pro-react
* Copyright 2021 Creative Tim (https://www.creative-tim.com)

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/
import Dashboard from "views/Dashboard/Dashboard.js";
import Buttons from "views/Components/Buttons.js";
import GridSystem from "views/Components/GridSystem.js";
import Panels from "views/Components/Panels.js";
import SweetAlert from "views/Components/SweetAlertPage.js";
import Notifications from "views/Components/Notifications.js";
import Icons from "views/Components/Icons.js";
import Typography from "views/Components/Typography.js";
import RegularForms from "views/Forms/RegularForms.js";
import ExtendedForms from "views/Forms/ExtendedForms.js";
import ValidationForms from "views/Forms/ValidationForms.js";
import Wizard from "views/Forms/Wizard/Wizard.js";
import RegularTables from "views/Tables/RegularTables.js";
import ExtendedTables from "views/Tables/ExtendedTables.js";
import ReactTable from "views/Tables/ReactTable.js";
import GoogleMaps from "views/Maps/GoogleMaps.js";
import FullScreenMap from "views/Maps/FullScreenMap.js";
import VectorMap from "views/Maps/VectorMap.js";
import Charts from "views/Charts/Charts.js";
import Calendar from "views/Calendar/Calendar.js";
import Widgets from "views/Widgets/Widgets.js";
import UserPage from "views/Pages/UserPage.js";
import TimelinePage from "views/Pages/TimelinePage.js";
import RTL from "views/Pages/RTL.js";
import PricingPage from "views/Pages/PricingPage.js";
import LoginPage from "views/Pages/LoginPage.js";
import RegisterPage from "views/Pages/RegisterPage.js";
import LockScreenPage from "views/Pages/LockScreenPage.js";
import Article from "views/Articles/Article.js";
import Factsheet from "views/Factsheets/Factsheet.js";
import Feedback from "views/Feedbacks/Feedback.js";

let routes = [
  {
    path: "/home-page",
    name: "Home page",
    icon: "now-ui-icons design_app",
    component: Dashboard,
    layout: "/admin",
  },
  {
    path: "/article",
    name: "Articles",
    icon: "now-ui-icons design_image",
    component: Article,
    layout: "/admin",
  },
  {
    path: "/factsheet",
    name: "Factsheet wiki",
    icon: "now-ui-icons files_single-copy-04",
    component: Factsheet,
    layout: "/admin",
  },
  {
    path: "/upload",
    name: "Upload video/image",
    icon: "now-ui-icons design_bullet-list-67",
    component: Dashboard,
    layout: "/admin",
  },
  {
    collapse: true,
    path: "/pages",
    name: "Management",
    state: "openPages",
    icon: "now-ui-icons business_chart-pie-36",
    views: [
      {
        path: "/management/feedback",
        name: "Feedbacks",
        mini: "FB",
        component: Feedback,
        layout: "/admin",
      },
      {
        path: "/management/article",
        name: "Articles",
        mini: "AT",
        component: Dashboard,
        layout: "/admin",
      },
      {
        path: "/management/factsheet",
        name: "Factsheets",
        mini: "FS",
        component: Dashboard,
        layout: "/admin",
      },
      {
        path: "/management/season",
        name: "Season and sessions",
        mini: "SS",
        component: Dashboard,
        layout: "/admin",
      },
      {
        path: "/management/tag",
        name: "Tag",
        mini: "TA",
        component: Dashboard,
        layout: "/admin",
      },
    ],
  },
  {
    path: "/login-page",
    name: "Login/register",
    icon: "now-ui-icons users_single-02",
    layout: "/auth",
    component: LoginPage
  },
];

export default routes;
