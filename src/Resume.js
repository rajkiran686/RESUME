import React from 'react'
import './Resume.css'
const Resume = () => {
  return (
    <div >
        <div>
            <div className='mainhead'>
            <p className='head1'>Rajkiran</p>
            <p className='head2'>Gutturthi</p>
            </div>
            <p className='mail'>gutturthirajkiran143@gmail.com | +91 7013877686</p>
            <hr/>  
        </div>
        <div className='body'>
          <div className='left'>{/*for left*/}
          <p style={{color:'grey',fontSize: 25}}>EDUCATION</p>
          <h4 style={{marginTop:'-20px'}}>SRKR ENGINEERING COLLEGE</h4>
          <p style={{marginTop:'-20px'}}>B.TECH IN CIVIL</p>
          <p style={{color:'grey' ,marginTop:'-15px'}}>CGPA: 8.91/10<br/>2020-2024<br/>Bhimavaram.</p>
          <h4 style={{marginTop:'-10px'}}>AKHIL JUNIOR COLLEGE</h4>
          <p style={{marginTop:'-20px'}}>M.P.C (CLASS Xll)</p>
          <p style={{color:'grey' ,marginTop:'-15px'}}>Marks: 953/1000<br/>Kakinada.</p>
          <h4 style={{marginTop:'-10px'}}>BHASHYAM PUBLIC SCHOLL</h4>
          <p style={{marginTop:'-20px'}}>S.S.C (CLASS X)</p>
          <p style={{color:'grey' ,marginTop:'-15px'}}>Percentage: 93%<br/>Yeleswaram.</p>
          <p style={{color:'grey',fontSize: 25, marginTop:'-10px'}}>LINKS</p>
          <div style={{display:'flex',gap:'3px',marginTop:'-10px'}}> 
          <p style={{color:'grey' ,marginTop:'-15px'}}>Github://</p>
          <p style={{marginTop:'-15px'}}>rajkiran686</p>
          </div>
          <div style={{display:'flex',gap:'3px'}}> 
          <p style={{color:'grey' ,marginTop:'-15px'}}>LinkedIn://</p>
          <p style={{marginTop:'-15px'}}>rajkirangutturthi</p>
          </div>
          <p style={{color:'grey',fontSize: 25, marginTop:'-10px'}}>SKILLS</p>
          <h4 style={{marginTop:'-20px'}}>LANGUAGES:</h4>
          <p style={{color:'grey' ,marginTop:'-15px'}}><li>Good: C,Python.</li><li>Intermediate: Javascript.</li><li>Novice: C++</li></p>
          <h4 style={{marginTop:'-10px'}}>FRAMEWORK & LIBRARY:</h4>
          <p style={{color:'grey' ,marginTop:'-15px'}}><li>React Js</li><li>Material UI</li><li>React Hook Form</li></p>
          <h4 style={{marginTop:'-10px'}}>TECHNOLOGIES:</h4>
          <p style={{color:'grey' ,marginTop:'-15px'}}><li>HTML</li><li>CSS</li></p>
          <h4 style={{marginTop:'-10px'}}>TOOLS:</h4>
          <p style={{color:'grey' ,marginTop:'-15px'}}><li>Github</li></p>
          <h4 style={{marginTop:'-10px'}}>DATABASE:</h4>
          <p style={{color:'grey' ,marginTop:'-15px'}}><li>Mysql</li></p>   
          </div> 
          <div className='right'>{/*for right*/}
          <p style={{color:'grey',fontSize: 25}}>CAREER OBJECTIVE</p>
          <p style={{marginTop:'-20px',color:'grey'}}><ul><li>With a Civil Engineering Bachelor's degree, looking for a substantial position in Software Sector that can be provide me an Opportunity to Enhance my skills. </li></ul></p>  
          <p style={{color:'grey',fontSize: 25,marginTop:'-10px'}}>PROJECTS</p>
          <div style={{display:'flex',gap:'5px'}}>
          <h4 style={{marginTop:'-20px'}}>FASHION BLOG WEBPAGE</h4>
          <p style={{marginTop:'-20px'}}>| HTML,CSS,JAVASCRIPT</p>
          </div>
          <p style={{color:'grey' ,marginTop:'-20px'}}>GitHub Link : rajkiran686/html_template</p> 
          <p style={{marginTop:'-10px',color:'grey'}}><ul><li>Creating the webpage for fashion blog using html,css and javascript. </li></ul></p>  
          <div style={{display:'flex',gap:'5px' ,marginTop:'30px'}}>
          <h4 style={{marginTop:'-20px'}}>CREATING RESUME</h4>
          <p style={{marginTop:'-20px'}}>| React Js,ReactToPrint</p>
          </div>
          <p style={{color:'grey' ,marginTop:'-20px'}}>GitHub Link : rajkiran686/RESUME</p> 
          <p style={{marginTop:'-10px',color:'grey'}}><ul><li>prepare this resume using react js and react-to-print.</li></ul></p>   
          <div style={{display:'flex',gap:'5px' ,marginTop:'30px'}}>
          <h4 style={{marginTop:'-20px'}}>CIVIL LABS</h4>
          <p style={{marginTop:'-20px'}}>| React Js,React Hook Form,Material UI,Chart Js</p>
          </div>
          <p style={{color:'grey' ,marginTop:'-20px'}}>GitHub Link : rajkiran686/CIVIL-ENGINEERING-LABS</p> 
          <p style={{marginTop:'-10px',color:'grey'}}><ul><li>Working on developing a civil engineering labs where user enter the required fields then it will show the result of experment.</li></ul></p> 
          <p style={{color:'grey',fontSize: 25,marginTop:'-10px'}}>CERTIFICATIONS</p>
          <p style={{marginTop:'-20px',color:'grey'}}><ul><li>I have scored 69% in Programming, Data Structures and Algorithms using python in NPTEL online certification. </li></ul></p>  
          <p style={{marginTop:'-10px',color:'grey'}}><ul><li>I have got completion certificate for completion of Introduction to Javascript and React at IBM SkillsBuild </li></ul></p>  
          <p style={{marginTop:'-10px',color:'grey'}}><ul><li>I have got participation certificate in Basics of HTML and CSS from OpenWeaver </li></ul></p>  
          <p style={{color:'grey',fontSize: 25,marginTop:'-10px'}}>INTERESTS</p>
          <p style={{marginTop:'-20px',color:'grey'}}><ul><li>playing Badminton, Kabbadi and Cricket.</li></ul></p>  
          <p style={{marginTop:'-10px',color:'grey'}}><ul><li>Learning new things.</li></ul></p>  
          <p style={{marginTop:'-10px',color:'grey'}}><ul><li>Listening the music.</li></ul></p>   
          </div> 

        </div>




    </div>
  )
}

export default Resume