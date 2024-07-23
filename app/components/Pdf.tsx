import React from 'react';
import { Page, Text, View, Document, StyleSheet, Image, Font } from '@react-pdf/renderer';

Font.register({
  family: "PTSans-Italic",
  src: '/font/PTSans-Italic.ttf'
});


Font.register({
  family: "PTSans-Bold",
  src: '/font/PTSans-Bold.ttf'
});

Font.register({
  family: "Roboto-Black",
  src: '/font/Roboto-Black.ttf'
});

const images = "/image/a.png";
const contact = "image/contact-book_4203928.png";
const skill = 'image/skills.png';
const EXPERIENCE="image/71200.png";
const education="image/education.jpg";
const note ="image/note.png";

interface PdfProps {
  nom: string;
}

const Pdf: React.FC<PdfProps> = ({ nom }) =>(
  <Document >
    <Page size="A4" style={styles.page} wrap={false}>
    <Image src={note} style={styles.image} />
      <View>
        <Text style={styles.font}>BOULINGUI</Text>
        <Text style={styles.font}>JOSUE</Text>
      </View>
      <View style={styles.circule}>
    
        <View style={styles.space}>
          <View>  <Text style={styles.circuleText}>USER EXPERIENCE DESIGNER</Text></View>
       
          <View>  <Text style={styles.circuleTexts}>www.jwatson.com</Text></View>
        </View>
      </View>
      <View style={styles.granded}>
        <View style={styles.leftcolumn}>
          <Text style={styles.sectionTitleTexts}> <Image src={images} style={styles.sectionIcons} /> ABOUT ME</Text>
          <View style={styles.enBasDeAboutMe}></View>
          <Text style={styles.textContainer}>
     
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </Text>




          <View style={styles.contacts}>
            <Text style={styles.sectionTitleTexts}> <Image src={contact} style={styles.sectionIcons} /> CONTACT</Text>
            <View style={styles.enBasDeAboutMe}>

            </View>

            <View>   <Text style={styles.Textenloremn}>Mobile:</Text>
              <Text style={styles.Textenloremn}>02800200</Text>
            </View>
            <View>   <Text style={styles.Textenloremn}>ADRESSE:</Text>
              <Text style={styles.Textenloremn}>12th avenue Street autralia</Text>
            </View>
            <View>   <Text style={styles.Textenloremn}>Home:</Text>
              <Text style={styles.Textenloremn}>02800200</Text>
            </View>
            <View>   <Text style={styles.Textenloremn}>email:</Text>
              <Text style={styles.Textenloremn}>johnwatson@gmail.com</Text>
            </View>
            <View>   <Text style={styles.Textenloremn}>Website:</Text>
              <Text style={styles.Textenloremn}>jwatson</Text>
            </View>
            <View>   <Text style={styles.Textenloremn}>Skype:</Text>
              <Text style={styles.Textenloremn}>username</Text>
            </View>
          </View>
          <View style={styles.contactss}>
            <Text style={styles.sectionTitleTexts}> <Image src={skill} style={styles.sectionIcons} />SKILLS </Text>
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

              <Text style={styles.sectionTitleText}>  <Image src={EXPERIENCE} style={styles.sectionIcon} /> EXPERIENCES</Text>
            </View>
           
            {/* Contenu de la section */}
            <View style={styles.section}>
              <View style={styles.enBasDeAboutMes}></View>
              {/* Section 1 */}
              <View style={styles.row}>
        
                <View style={styles.leftcolumns}>
                  <Text style={styles.rowTextLeft}>Graphic Designer</Text>
                
                  <Text style={styles.rowTextLeft}>2015 - 2017</Text>
          
                </View>
                
                <View style={styles.rightColumn}>
                <Text style={styles.cv}>CVTHEQUE</Text>
                  <Text style={styles.rowTextRights}>SOFT DESIGN STUDIOS</Text>
                
                  <Text style={styles.rowTextRight}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</Text>
                </View>
              </View>

              {/* Section 2 */}
              <View style={styles.row}>
                <View style={styles.leftcolumns}>
                  <Text style={styles.rowTextLeft}>Web Designer</Text>
                  <Text style={styles.rowTextLeft}>2015 - 2017</Text>
                </View>
                <View style={styles.rightColumn}>
                  <Text style={styles.rowTextRights}>SOFT DESIGN STUDIOS</Text>
                  
                  <Text style={styles.rowTextRight}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</Text>
                </View>
              </View>

              {/* Section 3 */}
              <View style={styles.row}>
                <View style={styles.leftcolumns}>
                  <Text style={styles.rowTextLeft}>Lead Designer</Text>
                  <Text style={styles.rowTextLeft}>2015 - 2017</Text>
                </View>
                <View style={styles.rightColumn}>
                  <Text style={styles.rowTextRights}>SOFT DESIGN STUDIOS</Text>
                  <Text style={styles.rowTextRight}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</Text>
                </View>
              </View>
            </View>
          </View>

          <View style={styles.contacts}>     <Text style={styles.sectionTitleText}> <Image src={education} style={styles.sectionIcon} /> EDUCATION</Text>
            <View style={styles.enBasDeAboutMes}>
            </View><View style={styles.section}>
              {/* Section 1 */}
              <View style={styles.row}>
                <View style={styles.leftcolumns}>
                  <Text style={styles.rowTextLeft}>Graphic Designer</Text>
                  <Text style={styles.rowTextLeft}>2015 - 2017</Text>
                </View>
                <View style={styles.rightColumn}>
                  <Text style={styles.rowTextRights}>SOFT DESIGN STUDIOS</Text>
                  <Text style={styles.rowTextRight}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</Text>
                </View>
              </View>

              {/* Section 2 */}
              <View style={styles.row}>
                <View style={styles.leftcolumns}>
                  <Text style={styles.rowTextLeft}>Web Designer</Text>
                  <Text style={styles.rowTextLeft}>2015 - 2017</Text>
                </View>
                <View style={styles.rightColumn}>
                  <Text style={styles.rowTextRights}>SOFT DESIGN STUDIOS</Text>
                  <Text style={styles.rowTextRight}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</Text>
                </View>
              </View>

              {/* Section 3 */}
              <View style={styles.row}>
                <View style={styles.leftcolumns}>
                  <Text style={styles.rowTextLeft}>Lead Designer</Text>
                  <Text style={styles.rowTextLeft}>2015 - 2017</Text>
                </View>
                <View style={styles.rightColumn}>
                  <Text style={styles.rowTextRights}>SOFT DESIGN STUDIOS</Text>
                  <Text style={styles.rowTextRight}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</Text>
                </View>
              </View>
            </View>

            <View style={styles.contacts}>     <Text style={styles.sectionTitleText}> <Image src={note} style={styles.sectionIcon} /> REFERENCES</Text>
              <View style={styles.enBasDeAboutMes}>
              </View><View style={styles.section}>
                {/* Section 1 */}
                <View style={styles.row}>
                  <View style={styles.leftcolumns}>
                    <Text style={styles.sectionTitleText}>WILLIAM KLEIMAM</Text>
                    <Text style={styles.rowTextLeft}>phone +5551235566</Text>
                    <Text style={styles.rowTextLeft}>email : willan@gmail.com</Text>
                  </View>
                  <View style={styles.rightColumn}>
                    <Text  style={styles.sectionTitleText}>JENSEN SMITH</Text>
                    <Text style={styles.rowTextRight}>DIRECTOR , Matrix media limited</Text>
                    <Text style={styles.rowTextRight}>DIRECTOR , Matrix media limited</Text>
                    <Text style={styles.rowTextRight}>DIRECTOR , Matrix media limited</Text>
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
    fontFamily:"PTSans-Italic",
    display:"flex", 
    padding: 20,
  },
  font:{fontFamily:'PTSans-Bold',
    letterSpacing:12,
  },
 
  cv: {
    fontFamily: 'PTSans-Bold',
    opacity: 0.2,
    color: 'red',
    fontWeight: 'bold',
    position: 'absolute',
    marginTop: 563,
    paddingRight: 900,
    transform: 'rotate(-67deg)',
    transformOrigin: 'top left',
    fontSize: '154px',
    zIndex: 1  
  },
  
  
  section: {
    marginBottom: 5,
  },
  contacts:{
    fontFamily:'PTSans-Bold',
    marginTop:19 ,
    
  },
  contactss:{
    fontFamily:'PTSans-Bold',
    marginTop:34 ,
    
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
    width: '70%',

    
    alignItems: "center",
    
  },
  rowTextLeft: {
    zIndex:0,
    fontSize: 12,
    marginLeft:39,
    marginBottom: 2,
    fontFamily:"PTSans-Italic",
  },
  rowTextRights:{
    fontSize: 12,
   marginRight:46,
    fontFamily:"PTSans-Italic",
       marginBottom: 2,
  },
  rowTextRight: {
    fontSize: 12,
 marginLeft:56,
 marginTop:10,
    fontFamily:"PTSans-Italic",
    marginBottom: 2,
  },
  sectionTitle: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 5,
  },
  sectionIcon: {
    width: 10,
    marginLeft:10,
    height: 14,

  },
  sectionIcons: {
    width: 14,
    height: 14,
  },
 
  sectionTitleText: {
    fontSize: 14,
  paddingLeft:28,
    fontFamily:"PTSans-Bold",
    fontWeight: 'bold',
  
  },
  sectionTitleTexts:{
    fontSize: 14,
    fontFamily:"PTSans-Bold",
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
  Textenloremn:{
    alignItems:'center',
    marginTop:6,
   fontSize:10,
  },
  textContainer: {
    fontFamily:"PTSans-Italic",
   fontSize: 12,
    borderWidth: 1,
    borderColor: "white", 
    marginRight: 37,  
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
    letterSpacing:3,
    fontFamily:"PTSans-Bold",
    fontSize:12,
    marginTop:6,
  
  },
  circuleTexts: {
    marginTop:6,
    color: 'grey',
    fontSize:9,
    fontFamily:"PTSans-Bold",
    letterSpacing:3,
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

    alignItems:"center",
    marginTop:8,
    height:27,
    width:129,
    borderTopWidth: 1, 
    borderColor:"black",
  },
  enBasDeAboutMes:{
    alignItems:"center",
    marginLeft:34,
    marginTop:2,
    height:27,
    width:349,
    borderTopWidth: 1, 
    borderColor:"black",
  },
  granded:{
   flexDirection:'row',
   marginTop:20,
  },
  leftcolumn:{
width:"30%",
paddingRight:10,
backgroundColor:"white",
  },
  leftcolumns:{
    width:"30%",
    paddingRight:10,
      },
     
      image: {
        width: '100%',  
        height: '100%',
        objectFit: 'cover',
        position: 'absolute', 
        top: 0, 
        left: 0,
        opacity: 0,
      },
});

export default Pdf;
