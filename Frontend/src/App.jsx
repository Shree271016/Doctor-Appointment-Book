import "./App.css"
import { AuthContextProvider } from "./context/authContext";
import Layout from "./layout/Layout";
function App() {
  return (
    <AuthContextProvider>

    <Layout />
    </AuthContextProvider>
  )
}

export default App;
