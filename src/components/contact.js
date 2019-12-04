import React, { Component } from 'react';
import { Grid, Cell, List, ListItem, ListItemContent } from 'react-mdl';
import Gambar from '../gambar/rendi.jpeg'

class Contact extends Component {
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
                    <p style={{width: '75%', margin: 'auto', paddingTop: '1em'}}>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book</p>
                </Cell>
                <Cell col={6}>
                    <h2>Contact Me</h2>
                    <hr/>
                    <div className="contact-list">
                    <List>
                        <ListItem>
                            <ListItemContent style={{fontSize: '25px', fontFamily: 'Anton'}}>
                                <i className="fa fa-phone-square" aria-hidden="true"/>
                                 +62 882 2394 7715
                            </ListItemContent>
                        </ListItem>
                        <ListItem>
                            <ListItemContent style={{fontSize: '25px', fontFamily: 'Anton'}}>
                                <i className="fa fa-envelope" aria-hidden="true"/>
                                 rendifadillah009@gmail.com
                            </ListItemContent>
                        </ListItem>
                        
                    </List>
                    </div>
                </Cell>
              </Grid>
          </div>
        )
    }
}

export default Contact;