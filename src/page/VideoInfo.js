import React,{Component} from 'react';
import {
    Grid,
    Jumbotron,
    Panel,
    Button
} from 'react-bootstrap';
import '../css/page-videoinfo.css';
class VideoInfo extends Component {
    render(){
        return (
                <Grid>
                    <Jumbotron>
                        <img src="http://img.tvmao.com/thumb/drama/10/490/540x303.jpg" className="info-background" />
                        <h1 className="video-title">海贼王</h1>
                        <p className="video-description">This is a simple hero unit, a simple jumbotron-style component for calling extra attention to featured content or information.</p>
                    </Jumbotron>
                    <Panel bsStyle="info" className="episode-container" header={"剧集列表"}>
                       <ul className="episode-list">
                            <li className="pull-left episode-item">
                                <Button href="/videoplay">01</Button>                       
                            </li>
                            <li className="pull-left episode-item">
                                <Button href="/videoplay">01</Button>                       
                            </li>
                            <li className="pull-left episode-item">
                                <Button href="/videoplay">01</Button>                       
                            </li>
                            <li className="pull-left episode-item">
                                <Button href="/videoplay">01</Button>                       
                            </li>
                            <li className="pull-left episode-item">
                                <Button href="/videoplay">01</Button>                       
                            </li>
                            <li className="pull-left episode-item">
                                <Button href="/videoplay">01</Button>                       
                            </li>
                            <li className="pull-left episode-item">
                                <Button href="/videoplay">01</Button>                       
                            </li>
                            <li className="pull-left episode-item">
                                <Button href="/videoplay">01</Button>                       
                            </li>
                            <li className="pull-left episode-item">
                                <Button href="/videoplay">01</Button>                       
                            </li>
                            <li className="pull-left episode-item">
                                <Button href="/videoplay">01</Button>                       
                            </li>
                            <li className="pull-left episode-item">
                                <Button href="/videoplay">01</Button>                       
                            </li>
                       </ul> 
                    </Panel>
                </Grid>
        )
    }
}
export default VideoInfo;
