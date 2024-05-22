import StudentList from "./component/StudentList";
import Users from "./component/Users";
import "./App.css";
import Products from "./component/Products";
import Navigationbar from "./component/Navbar";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Home from "./component/Home";
import About from "./component/About";
import NoPage from "./component/NoPage";
import "bootstrap/dist/css/bootstrap.min.css";
import withAuthentication from "./component/withAuthentication";
import UserProfile from "./component/UserProfile";
import "./App.css";

const AuthenticatedUserProfile = withAuthentication(UserProfile);

const App = () => {
  const user = {
    name: "John Doe",
    email: "john.doe@example.com",
    hobbies: ["Coffee", "Code", "Sleep"],
  };

  const isAuthenticated = true;

  return (
    <div className="App">
      {/* <StudentList /> */}
      {/* <Users /> */}
      {/* <Products /> */}
      <Navigationbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/products">
          <Route path="productsList" element={<Products />} />
        </Route>
        <Route path="/users" element={<Users />} />
        <Route path="*" element={<NoPage />} />
      </Routes>

      <AuthenticatedUserProfile isAuthenticated={isAuthenticated} user={user} />
    </div>
  );
};

export default App;
