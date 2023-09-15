import MainBlock from "./components/MainBlock";
import Layout from "./components/Layout";
import CountryInfoUi from "./UI/CountryInfoUi";
import { Routes, Route } from "react-router-dom";
function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<MainBlock />} />
          <Route path="country/:name" element={<CountryInfoUi />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
