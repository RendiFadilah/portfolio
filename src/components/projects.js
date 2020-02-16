import React, { Component } from 'react';
import { Tabs, Tab, Grid, Cell, Card,CardText, CardTitle, CardActions, CardMenu, IconButton} from 'react-mdl';

class Projects extends Component {
    constructor(props){
        super(props);
        this.state = { activeTab: 0 };
    }

    toggleCategories(){
        if(this.state.activeTab === 0){
            return(
                <div className="projects-grid">
                    {/** HTML CSS PROJECTS 3 */}
                    <Card shadow={3} style={{minWidth: '450', margin:'auto'}}>
                        <CardTitle style={{color: '#000', height:'176px', background: 'url(https://s3-eu-west-1.amazonaws.com/devinterface-web/production/technologies/35/medium/html5css3-111.png?1444285720) center / cover'}}>HTML, CSS & JS Projects #1</CardTitle>
                        <CardText>
                            Website Profile Page use HTML, CSS  & Javascript
                         </CardText>
                        <CardActions border>
                        <a href="https://github.com/RendiFadilah/profile-page-rendifadilah" rel="noopener noreferrer" target="_blank"
                            style={{
                                color: '#000',
                                textDecoration: 'none',
                                padding: 5,
                                fontSize: 15,
                                marginLeft: 20
                                
                            }}>
                                GITHUB
                            </a>
                            <a href="https://github.com/RendiFadilah/profile-page-rendifadilah" rel="noopener noreferrer" target="_blank"
                            style={{
                                color: '#000',
                                textDecoration: 'none',
                                padding: 5,
                                fontSize: 15,
                                marginLeft: 20
                                
                            }}>
                                LIVEDEMO
                            </a>
                            <a href="https://www.instagram.com/rendifdl05" rel="noopener noreferrer" target="_blank"
                            style={{
                                color: '#000',
                                textDecoration: 'none',
                                padding: 5,
                                fontSize: 15,
                                marginLeft: 20
                                
                            }}>
                                CONTACT
                            </a>
                        </CardActions>
                        <CardMenu style={{color: '#fff'}}>
                            <IconButton name="share" />
                        </CardMenu>
                    </Card>

                    {/** HTML CSS PROJECTS 2 */}
                    <Card shadow={3} style={{minWidth: '450', margin:'auto'}}>
                         <CardTitle style={{color: '#000', height:'176px', background: 'url(https://s3-eu-west-1.amazonaws.com/devinterface-web/production/technologies/35/medium/html5css3-111.png?1444285720) center / cover'}}>HTML, CSS & JS Projects #2</CardTitle>
                        <CardText>
                            Project class Arkademy HTML, CSS, Javascript.
                        </CardText>
                        <CardActions border>
                            <a href="https://github.com/RendiFadilah/arkademy" rel="noopener noreferrer" target="_blank"
                            style={{
                                color: '#000',
                                textDecoration: 'none',
                                padding: 5,
                                fontSize: 15,
                                marginLeft: 20
                                
                            }}>
                                GITHUB
                            </a>
                            <a href="https://github.com/RendiFadilah/arkademy" rel="noopener noreferrer" target="_blank"
                            style={{
                                color: '#000',
                                textDecoration: 'none',
                                padding: 5,
                                fontSize: 15,
                                marginLeft: 20
                                
                            }}>
                                LIVEDEMO
                            </a>
                            <a href="https://www.instagram.com/rendifdl05" rel="noopener noreferrer" target="_blank"
                            style={{
                                color: '#000',
                                textDecoration: 'none',
                                padding: 5,
                                fontSize: 15,
                                marginLeft: 20
                                
                            }}>
                                CONTACT
                            </a>
                          
                        </CardActions>
                        <CardMenu style={{color: '#fff'}}>
                            <IconButton name="share" />
                        </CardMenu>
                    </Card>

                {/** HTML CSS PROJECTS 3 */} 
                    <Card shadow={3} style={{minWidth: '450', margin:'auto'}}>
                        <CardTitle style={{color: '#000', height:'176px', background: 'url(https://s3-eu-west-1.amazonaws.com/devinterface-web/production/technologies/35/medium/html5css3-111.png?1444285720) center / cover'}}>HTML, CSS & JS Projects #3</CardTitle>
                        <CardText>
                            
                            Application Online Ordering use HTML, CSS, JS, PHP and framework Bootstrap & Codeigniter 
                        </CardText>
                        <CardActions border>
                        <a href="https://github.com/RendiFadilah/jpone-corp" rel="noopener noreferrer" target="_blank"
                            style={{
                                color: '#000',
                                textDecoration: 'none',
                                padding: 5,
                                fontSize: 15,
                                marginLeft: 20
                                
                            }}>
                                GITHUB
                            </a>
                            <a href="https://github.com/RendiFadilah/jpone-corp" rel="noopener noreferrer" target="_blank"
                            style={{
                                color: '#000',
                                textDecoration: 'none',
                                padding: 5,
                                fontSize: 15,
                                marginLeft: 20
                                
                            }}>
                                LIVEDEMO
                            </a>
                            <a href="https://www.instagram.com/rendifdl05" rel="noopener noreferrer" target="_blank"
                            style={{
                                color: '#000',
                                textDecoration: 'none',
                                padding: 5,
                                fontSize: 15,
                                marginLeft: 20
                                
                            }}>
                                CONTACT
                            </a>
                        </CardActions>
                        <CardMenu style={{color: '#fff'}}>
                            <IconButton name="share" />
                        </CardMenu>
                    </Card>
                </div>
                

                
            )
        } else if(this.state.activeTab === 1){
            return(
                <div className="projects-grid">
                    <h1>Coming Soon</h1>
                </div>
            )
        } else if(this.state.activeTab === 2){
            return(
                <div className="projects-grid">
                        <h1>Coming Soon</h1>
                </div>
            )
        } else if(this.state.activeTab === 3){
            return(
                <div><h1>Coming Soon</h1></div>
            )
        }
    }
   
    render(){
        return(
            <div className="category-tabs">
                <Tabs activeTab={this.state.activeTab} onChange={(tabId) => this.setState({activeTab: tabId})} ripple>
                    <Tab>HTMLCSS</Tab>
                    <Tab>PHP</Tab>
                    <Tab>ReactJS</Tab>
                    <Tab>FullStack Web</Tab>
                </Tabs>


                    <Grid>
                        <Cell col={12}>
                            <div className="content">{this.toggleCategories()}</div>
                        </Cell>
                    </Grid>
                  
            </div>
        )
    }
}

export default Projects;