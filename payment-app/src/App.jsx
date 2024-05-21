import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

import PaymentPage from "./pages/PaymentPage";
import TransactionsPage from "./pages/TransactionsPage";
import HomePage from "./homepage";
import SuccessPage from "./pages/SucessPage";
import CancelPage from "./pages/CancelPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomePage />,
  },
  {
    path: "/PaymentPage",
    element: <PaymentPage />,
  },
  {
    path: "/TransactionsPage",
    element: <TransactionsPage />,
  },
  {
    path: "/SuccessPage",
    element: <SuccessPage />,
  },
  {
    path: "/CancelPage",
    element: <CancelPage />,
  },
]);

function App() {
  return (
    <div className="app">
      <div className="container">
        <RouterProvider router={router} />
      </div>
    </div>
  );
}

export default App;