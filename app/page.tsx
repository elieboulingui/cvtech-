"use client";
import React from 'react';
import { Page, Text, View, Document, StyleSheet , PDFViewer} from '@react-pdf/renderer';
import Pdf from "../app/components/Pdf";
export default function Home() {
  return (
    <main className="w-screen h-screen">
      <PDFViewer className= "w-full h-full"> 
        <Pdf/>
      </PDFViewer>
    </main>
  );
}
