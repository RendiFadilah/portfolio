import React, { Component } from 'react';
import { Grid, Cell } from 'react-mdl';
import Gambar from '../gambar/rendi.jpeg';
import Education from './education';
import SKills from './skills';


 class Resume extends Component {
     render(){
         return(
             <div>
                <Grid>
                    <Cell col={4}>
                        <div style={{textAlign: 'center'}}>
                            <img 
                            src={Gambar} alt="Profile"
                            style={{height: '200px', borderRadius: '50%'}}
                            />
                        </div>

                        <h2 style={{paddingTop:'2em'}}>Rendi Fadilah</h2>
                        <h4 style={{color: 'grey'}}>Full Stack Web Developer</h4>
                        <hr style={{borderTop: '3px solid #833fb2', width: '50%'}}/>
                        <p>Someone Full Stack Web Developer have experienced to create the online order application with use HTML,CSS,JavaScript,PHP with help framework Bootstrap and CodeIgniter. And have knowledge about ReactJS, ExpressJS and UI/UX design and have a high spirit to learn about the new technology.
                        </p>
                        <hr style={{borderTop: '3px solid #833fb2', width: '50%'}}/>
                        <h5>Address</h5>
                        <p>Jl. Petojo Utara V No 13C</p>
                        <h5>Contact</h5>
                        <p>+62 882 2394 7715</p>
                        <h5>Email</h5>
                        <p>rendifadillah009@gmail.com</p>
                        <hr style={{borderTop: '3px solid #833fb2', width: '50%'}}/>
                    </Cell>
                    <Cell className="resume-right-col" col={8}>
                        <h2>Education</h2>

                        <Education 
                            startYear={2018}
                            endYear = {2021}
                            schoolName= "SMK Jakarta Pusat 1"
                            schoolDescription = ""
                        />

                        <Education 
                            startYear={2016}
                            endYear = {2018}
                            schoolName= "SMP Negeri 39 Jakarta"
                            schoolDescription = ""
                        />
                        <Education 
                            startYear={2010}
                            endYear = {2015}
                            schoolName= "SDN Petojo Utara 09 Pagi"
                            schoolDescription = ""
                        />
                        <hr style={{borderTop: '3px solid #e22947'}} />
                        <h2>Skills</h2>

                        <SKills 
                            skills="HTML"
                            progress={80}
                        />
                        <SKills 
                            skills="CSS"
                            progress={80}
                        />
                         <SKills 
                            skills="JavaScript"
                            progress={50}
                        />
                         <SKills 
                            skills="Express JS"
                            progress={40}
                        />
                         <SKills 
                            skills="ReactJS"
                            progress={40}
                        />
                         <SKills 
                            skills="PHP"
                            progress={50}
                        />
                         <SKills 
                            skills="Codeigniter"
                            progress={50}
                        />
                         <SKills 
                            skills="Laravel"
                            progress={50}
                        />
                    </Cell>
                </Grid>
             </div>
         )
     }
 }

 export default Resume;