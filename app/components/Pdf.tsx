import React from 'react';
import { Page, Text, View, Document, StyleSheet, Image, Font } from '@react-pdf/renderer';

const imageDeProfil='/image/contact-book_4203928.png'
Font.register({
  family: "PTSans-Italic",
  src: '/font/PTSans-Italic.ttf'
});


Font.register({
  family: "PTSans-Bold",
  src: '/font/PTSans-Bold.ttf'
});



const images = "/image/list_1625895.png";
const contact = "image/contact-book_4203928.png";
const skill = 'image/competency_11113863.png';

const loremIpsum = `Lorem ipsum dolor  djsbcj dc scb kd cdcnjd cBdlcNDcsdbcksd:cnvnc ,bjdc jdsc ddjbd udkjd .`;


const Pdf = () => (
  <Document>
    <Page size="A4" style={styles.page} wrap={false}>
      <View>
        <Text style={styles.font}>BOULINGUI</Text>
        <Text  style={styles.font}>JOSUE</Text> 
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
          <View style={styles.enBasDeAboutMe}></View>
          <Text style={styles.textContainer}>
  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
</Text>

         
       
          
          <View style={styles.contacts}>
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
          <View style={styles.contacts}>
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
  <View style={styles.circles} />
  <View style={styles.circles} />
  <View style={styles.circles} />
</View>
<View style={styles.skills}>
  <Text style={styles.Textenlorem}>Skill 03</Text>
  <View style={styles.circle} />
  <View style={styles.circle} />
  <View style={styles.circle} />
  <View style={styles.circle} />
  <View style={styles.circles} />
</View>
<View style={styles.skills}>
  <Text style={styles.Textenlorem}>Skill 04</Text>
  <View style={styles.circle} />
  <View style={styles.circle} />
  <View style={styles.circle} />
  <View style={styles.circles} />
  <View style={styles.circles} />
</View>
<View style={styles.skills}>
  <Text style={styles.Textenlorem}>Skill 05</Text>
  
  <View style={styles.circle} />
  <View style={styles.circle} />
  <View style={styles.circles} />
  <View style={styles.circles} />
  <View style={styles.circles} />
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
  <View style={styles.enBasDeAboutMes}></View>
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
          <View style={styles.enBasDeAboutMes}>
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
          <View style={styles.enBasDeAboutMes}>
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




const styles = StyleSheet.create({
  page: {
   fontFamily:'PTSans-Italic',
    display:"flex", 
    padding: 20,
  },
  font:{fontFamily:'PTSans-Bold',
    letterSpacing:12,
  },
  section: {
    marginBottom: 5,
  },
  contacts:{
    marginTop:29 ,
  },
  contact:{
    marginBottom:1,
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
    marginTop:20,
    marginLeft:5,
    borderRadius: 4,
    backgroundColor: 'black',
    marginRight: 5,
  },
  circles: {
    width: 8,
    height: 8,
    marginTop:20,
    marginLeft:5,
    borderRadius: 4,
    backgroundColor: 'grey',
    marginRight: 5,
  },

  Textenlorem:{
    alignItems:'center',
    marginTop:12,
   fontSize:14,
  },
  Textenlorems: {
    alignItems:'center',
    marginTop:12,
   fontSize:10,
  },
  textContainer: {
   fontSize:15,
    borderWidth: 1,
    borderColor: "white", 
    marginRight: 67,  
    borderRadius: 10,
    width: '80%',  
    alignSelf: 'center', 
    marginLeft:10,
    display:'flex',
    justifyContent:'flex-start'
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
    width: 530,
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
    width:129,
    borderTopWidth: 1, 
    borderColor:"black",
  },
  enBasDeAboutMes:{
    display:"flex",
    justifyContent:'space-between',
    alignItems:"center",
    marginTop:2,
    height:27,
    width:319,
    borderTopWidth: 1, 
    borderColor:"black",
  },
  granded:{
   flexDirection:'row',
   marginTop:20,
  },
  leftcolumn:{
width:"50%",
paddingRight:10,
backgroundColor:"white",
  },
 
  
});

export default Pdf;
