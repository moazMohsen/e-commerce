import React, { useEffect, useState } from "react";
import styled, { ThemeProvider } from "styled-components";
import { useDispatch, useSelector } from "react-redux";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
// page
import Home from "./pages/Home";
//component
import NavBar from "./components/nav/NavBar";

// theme
import { GlobalStyles } from "./theme/globalStyles";
import { darkTheme, lightTheme } from "./theme/Theme";
//rtk
import { getProductsFB } from "./app/productSlice";

//loader
import ScaleLoader from "react-spinners/ScaleLoader";
import ProductDetailPage from "./pages/ProductDetailPage";
import ProductCategoryPage from "./pages/ProductCategoryPage";
import Footer from "./components/footer/Footer";
import CartPage from "./pages/CartPage";
import { NotificationProvider } from "./context/NotificationContext";
import NotifcationCart from "./components/products/cart/NotifcationCart";
import { NotifcationLogin } from "./components/products/cart/NotifcationLogin";

const LayOut = () => {
  return (
    <>
      <NavBar />
      <NotifcationCart />
      <NotifcationLogin />
      <Outlet />
      <Footer />
    </>
  );
};
const router = createBrowserRouter([
  {
    path: "/",
    element: <LayOut />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/productCategoryPage/",
        element: <ProductCategoryPage />,
      },
      {
        path: "/productDetailPage/",
        element: <ProductDetailPage />,
      },
      {
        path: "/cartPage/",
        element: <CartPage />,
      },
    ],
  },
]);
function App() {
  const [loading, setLoading] = useState(true);
  const mode = useSelector((state) => state.mode.mode);

  const dispatch = useDispatch();

  const getProducts = async () => {
    try {
      await dispatch(getProductsFB());
      setLoading(false);
    } catch (erorr) {
      console.log("error");
    }
  };
  useEffect(() => {
    getProducts();
  });

  return (
    <ThemeProvider theme={mode ? darkTheme : lightTheme}>
      <NotificationProvider>
        <>
          <GlobalStyles />
          {loading ? (
            <Loader>
              <ScaleLoader
                color="rgb(43 56 209)"
                size={150}
                aria-label="Loading Spinner"
                data-testid="loader"
              />
            </Loader>
          ) : (
            <RouterProvider router={router} />
          )}
        </>
      </NotificationProvider>
    </ThemeProvider>
  );
}

const Loader = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  span {
    span {
      background: linear-gradient(
        335deg,
        rgba(2, 4, 27, 0.1) 47%,
        rgba(43, 56, 209, 1) 106%
      ) !important;
    }
  }
`;
export default App;
