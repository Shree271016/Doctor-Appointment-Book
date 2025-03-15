import "./App.css"
import Layout from "./layout/Layout";
import { AuthContextProvider } from './context/AuthContext';
function App() {
  return (
    <AuthContextProvider>

    <Layout />
    </AuthContextProvider>
  )
}

export default App;
