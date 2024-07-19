import React from 'react';
import { Page, Text, View, Document, StyleSheet, Image, Font } from '@react-pdf/renderer';
const imageUrl = "/image/téléchargement.jpeg";
const image= "/image/number-1_14247762.png";
Font.register({
  family: "Roboto-Black",
  src: '/font/Roboto-Black.ttf'
});


// Create and export the Pdf component
const Pdf = () => (
  
    <Document>
      <Page size="A4" style={styles.page}>
        {/* Left column */}
        <View style={styles.leftColumn}>
          {/* Header */}
          <View style={styles.header}>
            <View style={styles.imageContainer}>
              {/* Include the Image component */}
              <Image src={imageUrl} style={styles.ima} />
            </View>
            <View style={styles.textContainer}>
              <Text style={styles.name}>boulingui</Text>
              <Image src={image} style={styles.imag} />
              <Text style={styles.contact}>123 Main St, City, State | john.doe@example.com | (123) 456-7890</Text>
            </View>
          </View>
  
          {/* Experience */}
          <View style={styles.section}>
      
            <Text  style={styles.sectionTitle}>Profil</Text>
          
            <Text style={styles.item}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
            </Text>
            <Text style={styles.itemDescription}>Lead development of innovative software solutions, contributing to company growth.</Text>
          </View>
      
          <View style={styles.section}>
            <Text style={styles.sectionTitle}>Contact</Text>
            <Text style={styles.item}>
                 telephone 
                
                 lieu <br />
                 email <br />
                 profil instagram <br />
            </Text>
            <Text style={styles.itemDescription}>Lead development of innovative software solutions, contributing to company growth.</Text>
          </View>

          {/* Experience */}
          <View style={styles.section}>
            <Text style={styles.sectionTitle}>competence</Text>
            <Text style={styles.item}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
            </Text>
            <Text style={styles.itemDescription}>Lead development of innovative software solutions, contributing to company growth.</Text>
          </View>
        </View>
  
        {/* Right column */}
        <View style={styles.rightColumn}>
          {/* Education */}
          <View style={styles.section}>
            <Text style={styles.sectionTitle}>EXPERIENCE PROFESSIONNELLE</Text>
            <Text style={styles.item}>NOM DE L ENTREPRISE | STAGE REALISE</Text>
            <Text style={styles.itemDescription}>
            sept 20xx - jul 20xx
            </Text>
            <Text style={styles.itemDescription}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
            </Text>
          </View>
          <View style={styles.section}>
            <Text style={styles.sectionTitle}>EXPERIENCE PROFESSIONNELLE</Text>
            <Text style={styles.item}>NOM DE L ENTREPRISE | STAGE REALISE</Text>
            <Text style={styles.itemDescription}>
            sept 20xx - jul 20xx
            </Text>
            <Text style={styles.itemDescription}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
            </Text>
          </View>
  
          {/* Additional Information */}
          <View style={styles.section}>
            <Text style={styles.sectionTitle}>FORMATION</Text>
            <Text style={styles.itemDescription}>
          sept 20xx 
          </Text>
          <Text style={styles.itemDescription} >
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
            
            </Text>
          </View>
           {/* Additional Information */}
           <View style={styles.section}>
            <Text style={styles.sectionTitle}>LANGUES</Text>
            <Text style={styles.itemDescription}>
       
          </Text>
          <Text style={styles.itemDescription}>
          Anglais: Bilingue
            </Text>
            <Text style={styles.itemDescription}>
          Allemand: courant
            </Text>
            <Text style={styles.itemDescription}>
          Espagnol: courant
            </Text>
          </View>
        </View>
      </Page>
    </Document>
  );
  
  // Create styles
  const styles = StyleSheet.create({
    page: { 
    fontFamily:"Roboto-Black",
      flexDirection: 'row', 
      backgroundColor: '#E4E4E4',
      padding: 20,
    },
  
    leftColumn: {
      width: '50%', 
      paddingRight: 10 ,
      backgroundColor:'grey',
    },
    rightColumn: {
      width: '50%',
      paddingLeft: 10,
      backgroundColor:'white',
    },
    header: {
      flexDirection: 'row',
      alignItems: 'center',
      marginBottom: 20
    },
    imageContainer: {
      marginRight: 10
    },
    imag: {
      height: 20,  // ajustez la hauteur souhaitée
      width: 20,   // ajustez la largeur souhaitée
      borderRadius: '50%', 
    },
    textContainer: {
      flex: 1
    },
    name: {
      fontSize: 24,
      fontWeight: 'bold'
    },
    contact: {
      fontSize: 12,
      color: '#666',
      marginTop: 5
    },
    ima:{
      height: 50,  // ajustez la hauteur souhaitée
      width: 50,   // ajustez la largeur souhaitée
      borderRadius: '50%', 
    },
    section: {
      marginBottom: 10
    },
    sectionTitle: {
      fontSize: 16,
      fontWeight: 'bold',
      marginBottom: 5
    },
    item: {
      fontSize: 12,
      marginBottom: 3
    },
    itemDescription: {
      fontSize: 10,
      marginLeft: 10 
    }
  });
  
  export default Pdf;