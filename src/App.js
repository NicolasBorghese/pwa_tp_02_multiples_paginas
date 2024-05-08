import "./App.css";
import Home from "./pages/Home/Home";
import Details from "./pages/Details/Details";
import {ROUTES} from "./const/routes";

//Importo React Router al script
import {
    createBrowserRouter,
    RouterProvider,
} from "react-router-dom";

const router = createBrowserRouter([
    {
      path: ROUTES.home,
      element: <Home />,
    },
    {
      path: ROUTES.details,
      element: <Details />,
    }
]);

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <RouterProvider router={router} />
      </header>
    </div>
  );
}

export default App;
