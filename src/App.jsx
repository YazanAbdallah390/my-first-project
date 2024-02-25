import { Route, Routes } from "react-router-dom";
import Welcome from "./Frames/Welcome";
import SingUp from "./Frames/SingUp";
import Login from "./Frames/Login";
import DashBoard from "./Frames/DashBoard";
import Protocols from "./Frames/Protocols";
import Security from "./Frames/Security";
import Details from "./Frames/Details";
import Alerts from "./Frames/Alerts";
import Routing from "./Frames/Routing";
import Board from "./Components/Board";
import Help from "./Frames/Help";
import Settings from "./Frames/Settings";
import SettingBoxes from "./Frames/SettingBoxes";
import SettingInfo from "./Frames/SettingInfo";
import Background from "./Frames/Background";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Background />}>
          <Route index element={<Welcome />}></Route>
          <Route path="signup" element={<SingUp />}></Route>
          <Route path="login" element={<Login />}></Route>
        </Route>

        <Route path="help" element={<Help />}></Route>

        <Route path="setting" element={<Settings />}>
          <Route index element={<SettingBoxes />}></Route>
          <Route path="settinginfo" element={<SettingInfo />}></Route>
        </Route>

        <Route path="main" element={<DashBoard />}>
          <Route index element={<Board />}></Route>
          <Route path="protocols" element={<Protocols />}></Route>
          <Route path="details" element={<Details />}></Route>
          <Route path="routing" element={<Routing />}></Route>
          <Route path="alerts" element={<Alerts />}></Route>
          <Route path="security" element={<Security />}></Route>
        </Route>
      </Routes>
    </div>
  );
}

export default App;
