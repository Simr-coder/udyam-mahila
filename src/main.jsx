import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter } from "react-router-dom";
import { Routes, Route } from "react-router-dom"; 
import TitlePage from './Components/TitlePage.jsx';


import Mentorship from './Components/Mentorship.jsx';
import IdeasPage from './Components/IdeasPage.jsx';
import CollaborationPage from './Components/CollaborationPage.jsx';

const comp=<BrowserRouter>
<Routes>
   <Route path="/" element={<App/>} > 
   <Route path="/" element={<TitlePage />} />
   <Route path="/CollaborationPage" element={<CollaborationPage />} />
   <Route path="/IdeasPage" element={<IdeasPage/>} />
   <Route path="/Mentorship" element={<Mentorship/>} />

   </Route>
    </Routes> 
</BrowserRouter>

createRoot(document.getElementById('root')).render(
  <StrictMode>
    {comp}
  </StrictMode>,
)
