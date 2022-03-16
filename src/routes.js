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
import Upload from "views/Upload/Upload.js";
import SendFactsheet from "views/SendFactsheets/SendFactsheet.js";
import ManageAccount from "views/ManageAccounts/ManageAccount.js";
import SendFeedback from "views/SendFeedbacks/SendFeedback";
import CreateArticle from "views/CreateArticles/CreateArticle";
import ManageArticle from "views/ManageArticles/ManageArticle";

/* Sidebar for admin */
export let adminRoutes = [
  {
    path: "/home-page",
    name: "Dashboard",
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
    name: "Factsheets",
    icon: "now-ui-icons files_single-copy-04",
    component: Factsheet,
    layout: "/admin",
  },
  {
    collapse: true,
    path: "/pages",
    name: "Manager",
    state: "openPages",
    icon: "now-ui-icons business_chart-pie-36",
    views: [
      {
        path: "/management/article",
        name: "Articles",
        mini: "AT",
        component: ManageArticle,
        layout: "/admin",
      },
      {
        path: "/management/factsheet",
        name: "Factsheet",
        mini: "FS",
        component: Dashboard,
        layout: "/admin",
      },
      {
        path: "/management/account",
        name: "Accounts",
        mini: "AC",
        component: ManageAccount,
        layout: "/admin",
      },
      {
        path: "/management/feedback",
        name: "Feedbacks",
        mini: "FB",
        component: Feedback,
        layout: "/admin",
      },
      {
        path: "/management/season",
        name: "Season and session",
        mini: "SS",
        component: Dashboard,
        layout: "/admin",
      },
      {
        path: "/management/statistic",
        name: "Statistics",
        mini: "ST",
        component: Dashboard,
        layout: "/admin",
      }
    ],
  },
];

/* Sidebar for researcher */
export let researcherRoutes = [
  {
    path: "/home-page",
    name: "Dashboard",
    icon: "now-ui-icons design_app",
    component: Dashboard,
    layout: "/researcher",
  },
  {
    path: "/article",
    name: "Articles",
    icon: "now-ui-icons design_image",
    component: Article,
    layout: "/researcher",
  },
  {
    path: "/factsheet",
    name: "Factsheets",
    icon: "now-ui-icons files_single-copy-04",
    component: Factsheet,
    layout: "/researcher",
  },
  {
    path: "/send-feedback",
    name: "Feedbacks",
    icon: "now-ui-icons files_single-copy-04",
    component: SendFeedback,
    layout: "/researcher",
  },
  {
    collapse: true,
    path: "/pages",
    name: "Manager",
    state: "openPages",
    icon: "now-ui-icons business_chart-pie-36",
    views: [
      {
        path: "/management/contribute-article",
        name: "Articles",
        mini: "AT",
        component: CreateArticle,
        layout: "/researcher",
      },
      {
        path: "/management/contribute-factsheet",
        name: "Factsheets",
        mini: "FS",
        component: SendFactsheet,
        layout: "/researcher",
      },
      {
        path: "/management/label",
        name: "Label image",
        mini: "LI",
        component: ManageAccount,
        layout: "/researcher",
      },
    ],
  },
];