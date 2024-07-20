import React from 'react';
import { Page, Text, View, Document, StyleSheet, Image, Font } from '@react-pdf/renderer';
import { faL } from '@fortawesome/free-solid-svg-icons';

const imageDeProfil='/image/contact-book_4203928.png'
Font.register({
  family: "PTSans-Italic",
  src: '/font/PTSans-Italic.ttf'
});


const images = "/image/list_1625895.png";
const contact = "image/contact-book_4203928.png";
const skill = 'image/competency_11113863.png';

// Placeholder text (Lorem Ipsum)
const loremIpsum = `Lorem ipsum dolor  djsbcj dc scb kd cdcnjd cBdlcNDcsdbcksd:cnvnc ,bjdc jdsc ddjbd udkjd .`;

// Functional component for the PDF document
const Pdf = () => (
  <Document>
    <Page size="A4" style={styles.page} wrap={false}>
      <View>
        <Text>BOULINGUI</Text>
        <Text>JOSUE</Text>
      </View>
      <View style={styles.circule}>
    <View style={styles.space}>
  <View>  <Text style={styles.circuleText}>user experience designer</Text></View>
  <View>  <Text style={styles.circuleText}>www.jwatson.com</Text></View>
    </View>
      </View>
      <View style={styles.granded}>
        <View style={styles.leftcolumn}>
          <Text> <Image src={imageDeProfil}/> ABOUT ME</Text>
          <View style={styles.enBasDeAboutMe}>
            <Text style={styles.Textenlorems}> incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa </Text>
          </View>
          <View style={styles.contact}>
          <Text> <Image src={contact}/> CONTACT</Text>
          <View style={styles.enBasDeAboutMe}>
         <View>   <Text style={styles.Textenlorem}>ADRESSE:</Text>
         <Text style={styles.Textenlorem}>12th avenue Street autralia</Text>
         </View>
          
          </View>
          <View>   <Text style={styles.Textenlorem}>Mobile</Text>
         <Text style={styles.Textenlorem}>02800200</Text>
         </View>
         <View>   <Text style={styles.Textenlorem}>ADRESSE:</Text>
         <Text style={styles.Textenlorem}>12th avenue Street autralia</Text>
         </View>
         <View>   <Text style={styles.Textenlorem}>Home:</Text>
         <Text style={styles.Textenlorem}>02800200</Text>
         </View>
         <View>   <Text style={styles.Textenlorem}>email:</Text>
         <Text style={styles.Textenlorem}>johnwatson@gmail.com</Text>
         </View>
         <View>   <Text style={styles.Textenlorem}>Website:</Text>
         <Text style={styles.Textenlorem}>jwatson</Text>
         </View>
         <View>   <Text style={styles.Textenlorem}>Skype:</Text>
         <Text style={styles.Textenlorem}>username</Text>
         </View>
          </View>
          <View style={styles.contact}>
          <Text> <Image src={skill}/>skills</Text>
          <View style={styles.enBasDeAboutMe}>
          </View>
          <View style={styles.skills}>
  <Text style={styles.Textenlorem}>Skill 01</Text>
  <View style={styles.circle} />
  <View style={styles.circle} />
  <View style={styles.circle} />
  <View style={styles.circle} />
  <View style={styles.circle} />
</View>
<View style={styles.skills}>
  <Text style={styles.Textenlorem}>Skill 02</Text>
  <View style={styles.circle} />
  <View style={styles.circle} />
  <View style={styles.circle} />
  <View style={styles.circle} />
  <View style={styles.circle} />
</View>
<View style={styles.skills}>
  <Text style={styles.Textenlorem}>Skill 03</Text>
  <View style={styles.circle} />
  <View style={styles.circle} />
  <View style={styles.circle} />
  <View style={styles.circle} />
  <View style={styles.circle} />
</View>
<View style={styles.skills}>
  <Text style={styles.Textenlorem}>Skill 04</Text>
  <View style={styles.circle} />
  <View style={styles.circle} />
  <View style={styles.circle} />
  <View style={styles.circle} />
  <View style={styles.circle} />
</View>
<View style={styles.skills}>
  <Text style={styles.Textenlorem}>Skill 05</Text>
  
  <View style={styles.circle} />
  <View style={styles.circle} />
  <View style={styles.circle} />
  <View style={styles.circle} />
  <View style={styles.circle} />
</View>


          </View>
        </View>
        <View style={styles.rightColumn}>
        <View style={styles.section}>
  {/* Titre de la section */}
  <View style={styles.sectionTitle}>
    <Image src={skill} style={styles.sectionIcon} />
    <Text style={styles.sectionTitleText}>EXPERIENCES</Text>
  </View>

  {/* Contenu de la section */}
  <View style={styles.section}>
  {/* Section 1 */}
  <View style={styles.row}>
    <View style={styles.leftColumn}>
      <Text style={styles.rowTextLeft}>Graphic Designer</Text>
      <Text style={styles.rowTextLeft}>2015 - 2017</Text>
    </View>
    <View style={styles.rightColumn}>
      <Text style={styles.rowTextRight}>SOFT DESIGN STUDIOS</Text>
      <Text style={styles.rowTextRight}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</Text>
    </View>
  </View>

  {/* Section 2 */}
  <View style={styles.row}>
    <View style={styles.leftColumn}>
      <Text style={styles.rowTextLeft}>Web Designer</Text>
      <Text style={styles.rowTextLeft}>2015 - 2017</Text>
    </View>
    <View style={styles.rightColumn}>
      <Text style={styles.rowTextRight}>SOFT DESIGN STUDIOS</Text>
      <Text style={styles.rowTextRight}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</Text>
    </View>
  </View>

  {/* Section 3 */}
  <View style={styles.row}>
    <View style={styles.leftColumn}>
      <Text style={styles.rowTextLeft}>Lead Designer</Text>
      <Text style={styles.rowTextLeft}>2015 - 2017</Text>
    </View>
    <View style={styles.rightColumn}>
      <Text style={styles.rowTextRight}>SOFT DESIGN STUDIOS</Text>
      <Text style={styles.rowTextRight}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</Text>
    </View>
  </View>
</View>
</View>

          <View style={styles.contact}>     <Text> <Image src={skill}/>education</Text>
          <View style={styles.enBasDeAboutMe}>
          </View><View style={styles.section}>
  {/* Section 1 */}
  <View style={styles.row}>
    <View style={styles.leftColumn}>
      <Text style={styles.rowTextLeft}>Bachelor's Degree in Design</Text>
      <Text style={styles.rowTextLeft}>2010 - 2014</Text>
    </View>
    <View style={styles.rightColumn}>
      <Text style={styles.rowTextRight}>University of Design</Text>
      <Text style={styles.rowTextRight}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</Text>
    </View>
  </View>

  {/* Section 2 */}
  <View style={styles.row}>
    <View style={styles.leftColumn}>
      <Text style={styles.rowTextLeft}>Master's Degree in Digital Media</Text>
      <Text style={styles.rowTextLeft}>2014 - 2016</Text>
    </View>
    <View style={styles.rightColumn}>
      <Text style={styles.rowTextRight}>University of Digital Media</Text>
      <Text style={styles.rowTextRight}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</Text>
    </View>
  </View>

  {/* Section 3 */}
  <View style={styles.row}>
    <View style={styles.leftColumn}>
      <Text style={styles.rowTextLeft}>Certification in Web Development</Text>
      <Text style={styles.rowTextLeft}>2017 - 2018</Text>
    </View>
    <View style={styles.rightColumn}>
      <Text style={styles.rowTextRight}>Web Development Institute</Text>
      <Text style={styles.rowTextRight}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</Text>
    </View>
  </View>
</View>

<View style={styles.contact}>     <Text> <Image src={skill}/>references</Text>
          <View style={styles.enBasDeAboutMe}>
          </View><View style={styles.section}>
  {/* Section 1 */}
  <View style={styles.row}>
    <View style={styles.leftColumn}>
      <Text style={styles.rowTextLeft}>Bachelor's Degree in Design</Text>
      <Text style={styles.rowTextLeft}>2010 - 2014</Text>
    </View>
    <View style={styles.rightColumn}>
      <Text style={styles.rowTextRight}>University of Design</Text>
      <Text style={styles.rowTextRight}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</Text>
    </View>
  </View>

</View>
</View>
</View>
 
        </View>
        
      </View>
    </Page>
  </Document>
);



// Styles for the PDF document
const styles = StyleSheet.create({
  page: {
   fontFamily:'PTSans-Italic',
    display:"flex", 
    padding: 20,
  },
  section: {
    marginBottom: 10,
  },
  row: {
    flexDirection: 'row',
    marginBottom: 5,
  },
  leftColumn: {
    width: '50%',
  },
  rightColumn: {
    width: '50%',
    alignItems: "center",
  },
  rowTextLeft: {
    fontSize: 12,
    marginBottom: 2,
  },
  rowTextRight: {
    fontSize: 12,
    marginBottom: 2,
  },
  sectionTitle: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 5,
  },
  sectionIcon: {
    width: 12,
    height: 12,
    marginRight: 5,
  },
  sectionTitleText: {
    fontSize: 14,
    fontWeight: 'bold',
  
  },
  skills: {
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  circle: {
    width: 8,
    height: 8,
    marginTop:9,
    marginLeft:5,
    borderRadius: 4,
    backgroundColor: 'black',
    marginRight: 5,
  },
  contact:{ 
    marginTop:12,
  },
  Textenlorem:{
    alignItems:'center',
    marginTop:4,
   fontSize:14,
  },
  Textenlorems: {
    alignItems: 'center',
    fontSize: 5,  
  },
  
  space:{
    display: 'flex',
    flexDirection: 'row', 
    justifyContent: 'space-between',
    width: '100%', 
  },
  circuleText: {
    color: 'back',
    fontWeight: 'bold',
  
  },circule: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 22,
    height: 27,
    backgroundColor: 'white',
    width: 490,
    borderTopWidth: 1, 
    borderBottomWidth: 1,
    borderColor: 'black', 
  },
  enBasDeAboutMe:{
    display:"flex",
    justifyContent:'space-between',
    alignItems:"center",
    marginTop:2,
    height:27,
    width:119,
    borderTopWidth: 1, 
    borderColor:"black",
  },
  granded:{
   flexDirection:'row',
   marginTop:10,
  },
  leftcolumn:{
width:"50%",
paddingRight:10,
backgroundColor:"white",
  },
 
  
});

export default Pdf;
