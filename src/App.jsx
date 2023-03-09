import { Route, Routes } from "react-router-dom";
import { Login } from "./pages/Login";
import { Dashboard } from "./pages/Dashboard";
import { Navbar } from "./components/Navbar";
import { ProtectedRoute } from "./components/ProtectedRoute";

function App() {

  return (
    <div className="App w-screen bg-slate-500 h-screen">
      <header className="p-8">
        <h2 className="text-3xl text-center">Reduca Radina</h2>
        <Navbar />
      </header>
      <main className="App-header">
        <div className="m-auto w-56">
          <Routes>
            <Route path="/" element={<Login />} />
            <Route
              path="/dashboard"
              element={<Dashboard />}
            />
          </Routes>
        </div>
      </main>
    </div>
  );
}

export default App;
