import { BrowserRouter, Routes, Route } from "react-router-dom";

import Main from "./pages/Main";
import History from "./pages/History";
import Navbar from "./Navbar";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { useEffect, useState } from "react";
import { ContextProvider } from "./pages/ContextProvider";


const queryClient = new QueryClient()

function App() {

  return (
    <>
    

    <div className="App">
        <BrowserRouter >
          <QueryClientProvider client={queryClient}>
            <Navbar />
            <ContextProvider >
            <Routes>       
              <Route index element={<Main />} />

              <Route path='History' element={<History />}/>
            </Routes>
              </ContextProvider>
            <ReactQueryDevtools initialIsOpen={false}/>
          </QueryClientProvider>
        </BrowserRouter>
        
    </div>
    
    
    </>
  );
}

export default App;
