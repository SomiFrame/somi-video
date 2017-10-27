import React, { Component } from 'react';
import Carousels from '../js/Carousels.js';
import VideoThumbnail from '../js/VideoThumbnail.js';
import VideoTags from '../js/VideoTags.js';
import "../css/page-home.css";
import {
    Grid,
    Row,
    Col,
    PageHeader,
    Panel,
    Button
} from 'react-bootstrap';
class Home extends Component {
  render() {
    const numbers = [1,2,3,4,5,6];
    return (
            <Grid>
                <Carousels />
                <Row className="show-grid">
                    <Col xs={12} md={8}>
                        <h3>
                            <label className="anchor">
                                <span className="anchor-icon">
                                    最近更新
                                </span>
                            </label>
                        </h3>
                        <Row>
                            <VideoThumbnail numbers={numbers} />
                        </Row>
                    </Col>
                    <Col xs={12} md={4}>
                        <div className="video-tags-section">
                            <VideoTags />
                        </div>
                    </Col>
                </Row>
            </Grid>
    );
  }
}

export default Home;
