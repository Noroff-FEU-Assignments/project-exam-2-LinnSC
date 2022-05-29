import "./App.css";

import { ThemeProvider } from "@mui/material";
import CssBaseline from "@mui/material/CssBaseline";
import { lightTheme } from "./styles/theme";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./pages/Login/LoginPage";
import Dashboard from "./pages/Dashboard/DashboardPage";
import CandidatePage from "./pages/CandidatePage/CandidatePage";
import ProfileCandidate from "./pages/ProfileCandidate/ProfileCandidatePage";
import AddCandidate from "./pages/AddCandidate/AddCandidatePage";
import EditCandidate from "./pages/EditCandidate/EditCandidatePage";
import Customer from "./pages/Other/CustomerPage";
import Settlement from "./pages/Other/SettlementPage";
import Assignments from "./pages/Other/AssignmentsPage";
import Timesheet from "./pages/Other/TimeSheetPage";
import { inputGlobalStyles } from "./styles/globalStyles";
import { AuthProvider } from "./utils/context/AuthContext";

function App() {
  return (
    <ThemeProvider theme={lightTheme}>
      <CssBaseline />
      {inputGlobalStyles}

      <Router>
        <AuthProvider>
          <Routes>
            <Route path="/" element={<Login />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/medarbeider" element={<CandidatePage />} />
            <Route
              path="/medarbeider/profil/:id"
              element={<ProfileCandidate />}
            />
            <Route path="/medarbeider/registrer" element={<AddCandidate />} />
            <Route
              path="/medarbeider/rediger/:id"
              element={<EditCandidate />}
            />
            <Route path="/kunde" element={<Customer />} />
            <Route path="/timelister" element={<Timesheet />} />
            <Route path="/oppdrag" element={<Assignments />} />
            <Route path="/avregning" element={<Settlement />} />
          </Routes>
        </AuthProvider>
      </Router>
    </ThemeProvider>
  );
}

export default App;
