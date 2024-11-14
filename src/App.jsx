import { createBrowserRouter, RouterProvider } from "react-router-dom";
import LoginPage from "./pages/Login";
import RootLayout from "./ui/Root";
import Patients from "./pages/Patient";
import Dashboard from "./pages/Dashboard";
import Settings from "./pages/Settings";
import PatientSelfBookingPage from "./pages/PatientSelfBooking";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

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
    path: "/",
    element: <RootLayout />,
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
        path: "/settings",
        element: <Settings />,
      },
    ],
  },
  { path: "/login", element: <LoginPage /> },
  { path: "/self-booking", element: <PatientSelfBookingPage /> },
]);

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <RouterProvider router={router} />
    </QueryClientProvider>
  );
}

export default App;
