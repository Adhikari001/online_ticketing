import { createBrowserRouter, RouterProvider } from "react-router-dom";
import LoginPage from "./pages/Login";
import RootLayout from "./ui/Root";
import Patients from "./pages/Patient";
import Dashboard from "./pages/Dashboard";
import Settings from "./pages/Settings";
import PatientSelfBookingPage from "./pages/PatientSelfBooking";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "react-hot-toast";
import Persons from "./pages/Persons";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { checkAuth } from "./utils/auth";

// import { checkAuth } from "./utils/auth";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      // staleTime: 60 * 1000,
      staleTime: 5 * (60 * 1000), //5 minutes
    },
  },
});

const router = createBrowserRouter([
  {
    path: "",
    // errorElement: <Error />,
    children: [
      {
        path: "/",
        element: <RootLayout />,
        loader: checkAuth,
        children: [
          {
            index: true,
            element: <Dashboard />,
          },
          {
            path: "/patients",
            element: <Patients />,
          },
          {
            path: "/persons",
            element: <Persons />,
          },
          {
            path: "/settings",
            element: <Settings />,
          },
        ],
      },
      { path: "/login", element: <LoginPage /> },
      { path: "/self-booking", element: <PatientSelfBookingPage /> },
    ],
  },
]);

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <ReactQueryDevtools initialIsOpen={false} />
      <RouterProvider router={router} />
      <Toaster
        position="top-center"
        gutter={12}
        containerStyle={{ margin: "8px" }}
        toastOptions={{
          success: {
            duration: 3000,
          },
          error: {
            duration: 5000,
          },
          style: {
            fontSize: "16px",
            maxWidth: "500px",
            padding: "16px 24px",
            backgroundColor: "#fff",
            color: "#1f2937",
          },
        }}
      />
    </QueryClientProvider>
  );
}

export default App;
