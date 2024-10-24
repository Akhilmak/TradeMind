import { Route, Routes } from "react-router-dom";
import Home from "./Page/Home/Home";
import Navbar from "./Page/Navbar/Navbar";
import Portfolio from "./Page/Portfolio/Portfolio";
import Activity from "./Page/Activity/Activity";
import Wallet from "./Page/Wallet/Wallet";
import Withdrawal from "./Page/Withdrawal/Withdrawal";
import PaymentDetails from "./Page/Payments/PaymentDetails";
import StockDetails from "./Page/Stock Details/StockDetails";
import Watchlist from "./Page/Watchlist/Watchlist";
import Profile from "./Page/Profile/Profile";
import SearchCoin from "./Page/Search/SearchCoin";
import Notfound from "./Page/Notfound/Notfound";
import Auth from "./Page/Auth/Auth";
import { useDispatch, useSelector } from "react-redux";
import { store } from "./State/Store";
import { useEffect } from "react";
import { getUser } from "./State/Auth/Action";

function App() {
  const { auth } = useSelector((store) => store);
  const dispatch = useDispatch();
  // console.log("auth---" + auth);
  useEffect(() => {
    dispatch(getUser(auth.jwt || localStorage.getItem("jwt")));
  }, [auth.jwt]);
  return (
    <>
      {auth.user ? (
        <div>
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/portfolio" element={<Portfolio />}></Route>
            <Route path="/activity" element={<Activity />}></Route>
            <Route path="/wallet" element={<Wallet />}></Route>
            <Route path="/withdrawal" element={<Withdrawal />}></Route>
            <Route path="/payment-details" element={<PaymentDetails />}></Route>
            <Route path="/market/:id" element={<StockDetails />}></Route>
            <Route path="/watchlist" element={<Watchlist />}></Route>
            <Route path="/profile" element={<Profile />}></Route>
            <Route path="/search" element={<SearchCoin />}></Route>
            <Route path="*" element={<Notfound />}></Route>
          </Routes>
        </div>
      ) : (
        <Auth />
      )}
    </>
  );
}
// function MyComponent() {
//   console.log('MyComponent is being rendered!');
//   return <div>Hello World!</div>;
// }

export default App;
