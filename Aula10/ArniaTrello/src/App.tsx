import { AuthProvider } from "./context/AuthContext";
import Routes from "./routes/router";

function App() {
  return (
    <>
      <AuthProvider>
        <Routes />
      </AuthProvider>
    </>
  );
}

export default App;
