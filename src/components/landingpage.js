import React, { Component } from 'react';
import Gambar from '../gambar/rendi.jpeg';
import {Grid, Cell} from 'react-mdl';

class Landing extends Component {
    render(){
        return(
            <div style={{width: '100%', margin: 'auto'}}>
                <Grid className="landing-grid">
                    <Cell col={12}>
                        <img 
                        src={Gambar} alt="Avatar" className="avatar-img"
                        />

                        <div className="banner-text">
                            <h1>Full Stack Web Developer</h1>
                            <hr/>

                            <p>HTML | CSS | Bootstrap | Javascript | ExpressJS | ReactJS | PHP | CodeIgniter | Laravel</p>

                            <div className="social-links">
                                {/* Linkedin*/}
                                <a href="https://www.facebook.com/rendi.fadillah.39" rel="noopener noreferrer" target="_blank">
                                    <i className="fa fa-facebook-square" aria-hidden="true" />
                                </a>

                                {/* Github */}
                                <a href="https://github.com/RendiFadilah" rel="noopener noreferrer" target="_blank">
                                    <i className="fa fa-github-square" aria-hidden="true" />
                                </a>

                                {/* Facebook */ }
                                <a href="https://twitter.com/Rendi_Testa" rel="noopener noreferrer" target="_blank">
                                    <i className="fa fa-twitter-square" aria-hidden="true" />
                                </a>

                                {/** Instagram */}

                                <a href="https://www.instagram.com/rendifdl05" rel="noopener noreferrer" target="_blank">
                                    <i className="fa fa-instagram" aria-hidden="true" />
                                </a>
                            </div>

                        </div>
                    </Cell>
                </Grid>
            </div>
        )
    }
}

export default Landing;