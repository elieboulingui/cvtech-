 "use client"
import React, { useState } from 'react';
import { View, PDFViewer } from '@react-pdf/renderer';
import Pdf from "../app/components/Pdf";

const Home = () => {
  const [nom, setNom] = useState('');
  const [overlayVisible, setOverlayVisible] = useState(false);

  return (
    <main className="w-screen h-screen">
     
        <PDFViewer className="w-full h-full" showToolbar={false} >
          <Pdf nom={nom} />
        </PDFViewer>
    </main>
  );
};

export default Home;
