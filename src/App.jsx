import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Contact from "./components/Contact";
import Services from "./components/Services";
import Purpose from "./components/Purpose";
import Layout from "./components/Layout";

function App() {
  return (
    <Router>
      <Routes>
        <Route
          path='/'
          element={
            <Layout>
              <Services />
            </Layout>
          }
        />
        <Route
          path='contact'
          element={
            <Layout>
              <Contact />
            </Layout>
          }
        />
        <Route
          path='purpose'
          element={
            <Layout>
              <Purpose />
            </Layout>
          }
        />
      </Routes>
    </Router>
  );
}

export default App;
