import "./App.css"
import { AuthContextProvider } from "./context/AuthContext";
import Layout from "./layout/Layout";
function App() {
  return (
    <AuthContextProvider>

    <Layout />
    </AuthContextProvider>
  )
}

export default App;
