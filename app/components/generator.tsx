import React from 'react';
import { Page, Text, View, Document, StyleSheet, Image, Font } from '@react-pdf/renderer';

const MyDocument = () => (
  <Document>
    <Page>
      <Text>React-pdf</Text>
    </Page>
  </Document>
);
export default MyDocument;