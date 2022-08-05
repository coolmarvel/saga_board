import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import ItemListPage from "./pages/ItemListPage";
import ItemModifyPage from "./pages/ItemModifyPage";
import ItemReadPage from "./pages/ItemReadPage";
import ItemRegisterPage from "./pages/ItemRegisterPage";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route element={<ItemListPage />} path="/" exact />
          <Route element={<ItemRegisterPage />} path="/create" exact />
          <Route element={<ItemModifyPage />} path="/edit/:itemId" exact />
          <Route element={<ItemReadPage />} path="/read/:itemId" exact />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
