import React, { Component } from 'react';
import { Grid, Cell } from 'react-mdl';
import Gambar from '../gambar/rendi.jpeg'

class AboutMe extends Component {
    render(){
        return(
          <div className="contact-body">
              <Grid className="contact-grid">
                <Cell col={6}>
                    <h2>Rendi Fadilah</h2>
                    <img 
                        src={Gambar} alt="Avatar"
                        style={{height: '250px', borderRadius: '5px'}}
                    />

                    <h5 style={{ color: '#C4C4C4', fontSize: '20px'}}>Full Stack Web Developer</h5>
          
                </Cell>
                <Cell col={6}>
                    <h2>About Me</h2>
                    <hr/>
                    <div className="about-left">
                    <p style={{width: '75%', margin: 'auto', paddingTop: '1em', marginBottom: 40}}>A Full Stack Web Developer who has experience creating online ordering applications using HTML, CSS, Javascript, PHP and with the help of the Bootstrap and CodeIgniter framework. As well as having knowledge about ReactJS, ExpressJS and UI/UX Design and have a high enthusiasm to learn new technology.
 </p>

                    <a href="https://www.instagram.com/rendifdl05" rel="noopener noreferrer" target="_blank"
                            style={{
                                color: '#000',
                                textDecoration: 'none',
                                padding: 10,
                                borderRadius: 3,
                                fontSize: 15,
                                marginLeft: 20,
                                marginTop: 50,
                                backgroundColor: '#fcb845'
                                
                            }}>
                                Contact Me
                            </a>
                            
                            <a href="https://www.instagram.com/rendifdl05" rel="noopener noreferrer" target="_blank"
                            style={{
                                color: '#000',
                                textDecoration: 'none',
                                padding: 10,
                                fontSize: 15,
                                marginLeft: 60,
                                marginTop: 50,
                                border: '1px solid black',
                                borderRadius: 3
                            
                                
                            }}>
                                Follow Me
                            </a>

                    </div>
                </Cell>
              </Grid>
          </div>
        )
    }
}

export default AboutMe;