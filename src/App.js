import React from 'react';
import './App.module.scss';
import BaseLayout from "./components/BaseLayout";
import {BrowserRouter} from "react-router-dom";
import Favicon from "react-favicon";

export default function App() {
   return (
      <div>
         <Favicon url="https://res.cloudinary.com/codelikeagirl29/image/upload/v1661995914/icons/favicon_c9hk5n.ico"></Favicon>
         <BrowserRouter>
            <BaseLayout/>
         </BrowserRouter>
      </div>
   );
}