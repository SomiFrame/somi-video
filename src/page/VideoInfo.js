import React,{Component} from 'react';
import '../css/page-videoinfo.css';
import {
    Grid,
    Jumbotron
} from 'react-bootstrap';
class VideoInfo extends Component {
    render(){
        return (
                <Grid>
                    <Jumbotron>
                        <img src="http://img.tvmao.com/thumb/drama/10/490/540x303.jpg" className="info-background" />
                        <h1 className="video-title">海贼王</h1>
                        <p className="video-description">This is a simple hero unit, a simple jumbotron-style component for calling extra attention to featured content or information.</p>
                    </Jumbotron>
                </Grid>
        )
    }
}
export default VideoInfo;
