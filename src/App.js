import {
  createBrowserRouter,
  createRoutesFromElements,
  Outlet,
  Route,
  RouterProvider,
  ScrollRestoration,
} from "react-router-dom";
import { productsData } from "./api/api";
import Footer from "./components/footer/Footer";
import Header from "./components/header/Header";
import Home from "./pages/Home";
import Cart from "./pages/Cart";
import Signin from "./pages/Signin";
import Registration from "./pages/Registration";
import Checkout from "./pages/Checkout";

const Layout = () => {
  return (
    <div>
      <Header />
      {/* for scrolling the page to top after we return to the page */}
      <ScrollRestoration />
      <Outlet />
      <Footer />
    </div>
  );
};
function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} loader={productsData}></Route>
          <Route path="/cart" element={<Cart />}></Route>
        </Route>
        <Route path="/signin" element={<Signin />}></Route>
        <Route path="/registration" element={<Registration />}></Route>
        <Route path="/checkout" element={<Checkout />}></Route>
        <Route path="/success" element={<h1>success</h1>}></Route>
        <Route path="/cancel" element={<h1>cancelled</h1>}></Route>
      </Route>
    )
  );
  return (
    <div className="font-bodyFont bg-gray-100">
      <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;
