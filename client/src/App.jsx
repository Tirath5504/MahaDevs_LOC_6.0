import LoginSignup from "./components/LoginSignup";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import CreateAStaff from "./components/CreateAStaff";
import Staffs from "./components/Staffs";
import Report from "./components/Report";
import Profile from "./components/Profile";
import Room from "./components/Room";
import {
  BrowserRouter as Router,
  Routes,
  Route
} from 'react-router-dom';
import MyState from "./context/MyState";
function App() {
  return (
    <>
      <Router>
        <MyState>
          <Routes>
            <Route exact path="/loginsignup" element={<LoginSignup />} />
            <Route exact path="/" element={
              <>
                <Navbar />
                <Home />
              </>
            } />
            <Route exact path="/createastaff" element={
              <>
                <Navbar />
                <CreateAStaff />
              </>
            } />
            <Route exact path="/staffsdetails" element={
              <>
                <Navbar />
                <Staffs />
              </>
            } />
            <Route exact path="/report" element={
              <>
                <Navbar />
                <Report />
              </>
            } />
            <Route exact path="/profile" element={
              <>
                <Navbar />
                <Profile />
              </>
            } />
            <Route exact path="/room/:roomNo" element={
              <>
                <Navbar />
                <Room/>
              </>
            } />
          </Routes>
        </MyState>
      </Router>
    </>
  )
}

export default App;
