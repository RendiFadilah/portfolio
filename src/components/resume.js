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
                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book</p>
                        <hr style={{borderTop: '3px solid #833fb2', width: '50%'}}/>
                        <h5>Addres</h5>
                        <p>Jl. Petojo Utara V No 13C</p>
                        <h5>Phone</h5>
                        <p>+62 882 2394 7715</p>
                        <h5>Email</h5>
                        <p>rendifadillah009@gmail.com</p>
                        <hr style={{borderTop: '3px solid #833fb2', width: '50%'}}/>
                    </Cell>
                    <Cell className="resume-right-col" col={8}>
                        <h2>Education</h2>

                        <Education 
                            startYear={2010}
                            endYear = {2015}
                            schoolName= "SDN Petojo Utara 09 Pagi"
                            schoolDescription = "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book"
                        />

                        <Education 
                            startYear={2016}
                            endYear = {2018}
                            schoolName= "SMP Negeri 39 Jakarta"
                            schoolDescription = "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book"
                        />
                        <Education 
                            startYear={2018}
                            endYear = {2021}
                            schoolName= "SMK Jakarta Pusat 1"
                            schoolDescription = "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book"
                        />
                        <hr style={{borderTop: '3px solid #e22947'}} />
                        <h2>Skills</h2>

                        <SKills 
                            skills="HTML/CSS"
                            progress={80}
                        />
                         <SKills 
                            skills="JavaScript"
                            progress={50}
                        />
                         <SKills 
                            skills="ReactJS"
                            progress={40}
                        />
                         <SKills 
                            skills="PHP/CI"
                            progress={60}
                        />
                    </Cell>
                </Grid>
             </div>
         )
     }
 }

 export default Resume;