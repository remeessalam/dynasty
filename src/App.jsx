import { Suspense, lazy } from "react";
import { createBrowserRouter } from "react-router-dom";
import AppLayout from "./Layout/AppLayout";
import Loader from "./Components/Loader";
import { Toaster } from "react-hot-toast";
import ServiceDetailsPage from "./Pages/ServiceDetailsPage";
import BlogDetails from "./Pages/BlogDetails";
import LandingPage from "./landingpage/LandingPage";

const HomePage = lazy(() => import("./Pages/HomePage"));
const AboutUsPage = lazy(() => import("./Pages/AboutUsPage"));
const ContactUsPage = lazy(() => import("./Pages/ContactUsPage"));
const ThankYouPage = lazy(() => import("./Pages/ThankYouPage"));

const AppRouter = createBrowserRouter([
  {
    path: "/",
    element: (
      <Suspense fallback={<Loader />}>
        <Toaster
          position="top-bottom"
          toastOptions={{
            style: {
              zIndex: "10000",
              background: "#010C2A",
              color: "#ffffff",
            },
          }}
        />
        <AppLayout />
      </Suspense>
    ),

    children: [
      {
        path: "/",
        element: <HomePage />,
      },
      {
        path: "/about-us",
        element: <AboutUsPage />,
      },
      {
        path: "/services",
        children: [
          {
            path: ":service",
            element: <ServiceDetailsPage />,
          },
        ],
      },
      {
        path: "/contact-us",
        element: <ContactUsPage />,
      },
      {
        path: "/blogs",
        children: [
          {
            path: ":id",
            element: <BlogDetails />,
          },
        ],
      },
      {
        path: "/thank-you",
        element: <ThankYouPage />,
      },
    ],
  },
  {
    path: "/web-development",
    element: (
      <Suspense fallback={<Loader />}>
        <LandingPage page={"web"} />
      </Suspense>
    ),
  },
  {
    path: "/app-development",
    element: (
      <Suspense fallback={<Loader />}>
        <LandingPage page={"app"} />
      </Suspense>
    ),
  },
]);

export default AppRouter;
