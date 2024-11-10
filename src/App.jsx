import { createBrowserRouter, RouterProvider } from "react-router-dom";
import LoginPage from "./pages/Login";
import RootLayout from "./ui/Root";
import Patients from "./pages/Patient";
import Dashboard from "./pages/Dashboard";
import Settings from "./pages/Settings";
import PatientSelfBookingPage from "./pages/PatientSelfBooking";

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
  return <RouterProvider router={router} />;
}

export default App;
