import { createBrowserRouter } from "react-router-dom";
import Layout from "../components/layout/index.jsx";
import LayoutSeven from "../components/layout/multi-page/LayoutSeven.jsx";
import HomeSeven from "../page/home/HomeSeven.jsx";
import ContactUs from "../page/contact-us/index.jsx";
import TermsAndConditionPage from "../page/utility/TermsAndCondition.jsx";
import ErrorPage from "../error-page.jsx";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <LayoutSeven />,
        children: [
          {
            path: "/",
            element: <HomeSeven />, // HomeSeven as the default page
          },
          {
            path: "contact-us",
            element: <ContactUs />,
          },
          {
            path: "terms-and-conditions",
            element: <TermsAndConditionPage />,
          },
          {
            path: "*",
            element: <ErrorPage />, // Catch-all route for 404 errors
          },
        ],
      },
    ],
  },
]);
