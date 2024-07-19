// generatePDF.tsx
import React from 'react';
import ReactPDF from '@react-pdf/renderer';
import MyDocument from './Pdf';

ReactPDF.render(<MyDocument />, `${__dirname}/example.pdf`)
  .then(() => {
    console.log('PDF généré avec succès!');
  })
  .catch((error) => {
    console.error('Erreur lors de la génération du PDF:', error);
  });
