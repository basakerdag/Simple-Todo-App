import React from "react";
import { Route, Routes } from "react-router-dom";
import NavigateIcin from "./component/NavigateIcin";
import { HesapBaglantisiProvider } from "./Bağlantı/HesapBaglantisi";
import Hesap from "./Sayfalar/Hesap";
import Anasayfa from "./Sayfalar/Anasayfa";
import Giris from "./Sayfalar/Giris";

function App() {
  return (
    <div>
      <HesapBaglantisiProvider> 
        <Routes>
          <Route path="/" element={<Anasayfa />} />
        <Route path="/signin" element={<Giris />} />
          <Route
            path="/account"
            element={
              <NavigateIcin>
                <Hesap />
              </NavigateIcin>
            }
          />
        </Routes>
      </HesapBaglantisiProvider>
    </div>
  );
}

export default App;
