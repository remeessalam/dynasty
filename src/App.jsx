import { Suspense, lazy } from "react";
import { createBrowserRouter } from "react-router-dom";
import AppLayout from "./Layout/AppLayout";
import Loader from "./components/Loader";
import { Toaster } from "react-hot-toast";
import ServiceDetailsPage from "./Pages/ServiceDetailsPage";
import BlogDetails from "./Pages/BlogDetails";
import BlogsPage from "./Pages/BlogsPage";

const HomePage = lazy(() => import("./pages/HomePage"));
const AboutUsPage = lazy(() => import("./pages/AboutUsPage"));
const ServicePage = lazy(() => import("./pages/ServicesPage"));
const ContactUsPage = lazy(() => import("./pages/ContactUsPage"));
const LandingPages = lazy(() => import("./pages/LandingPages"));
const ThankYouPage = lazy(() => import("./pages/ThankYouPage"));

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
        element: <ServicePage />,
        children: [
          {
            path: ":id",
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
        element: <BlogsPage />,
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
        <LandingPages page={"web"} />
      </Suspense>
    ),
  },
  {
    path: "/app-development",
    element: (
      <Suspense fallback={<Loader />}>
        <LandingPages page={"app"} />
      </Suspense>
    ),
  },
]);

export default AppRouter;
