import { Provider } from "react-redux";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Body from "./components/Body";
import LogIn from "./components/LogIn";
import Profile from "./components/Profile";
import appStore from "./utils/appStore";
import Feed from "./components/Feed";
import Request from './components/Request';
import Connections from "./components/Connections";

function App() {
  return (
    <>
      <Provider store={appStore}>
        <BrowserRouter basename="/">
          <Routes>
            <Route path="/" element={<Body />}>
              <Route path="/" element={<Feed />} />
              <Route path="/login" element={<LogIn />} />
              <Route path="/profile" element={<Profile />} />
              <Route path="/request" element={<Request />} />
              <Route path="/connections" element={<Connections />} />
            </Route>
          </Routes>
        </BrowserRouter>
      </Provider>
    </>
  );
}

export default App;
