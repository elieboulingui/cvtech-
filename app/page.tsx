'use client';
import React, { useState } from 'react';
import { PDFViewer ,renderToStream} from '@react-pdf/renderer';
import Pdf from "../app/components/Pdf";

const Home = () => {
  const [nom, setNom] = useState('');
  const [pdfEnabled, setPdfEnabled] = useState(false); 

  
  const togglePdfVisibility = () => {
    setPdfEnabled(!pdfEnabled);
  };

  return (
    <div className="w-screen h-screen">
      {/* Toggle button to enable/disable PDF */}
      <button onClick={togglePdfVisibility}>
        {pdfEnabled ? 'ne pas voir le pdf' : ' voir le rendu '}
      </button>

      {/* Conditional rendering based on pdfEnabled state */}
      { pdfEnabled &&  (
        
        <PDFViewer  className="w-full h-full" showToolbar={false}>
        
         <Pdf nom={nom} />
         
        </PDFViewer>
        
      ) }
      
    </div>
  );
};

export default Home;
