import React, { Component } from 'react';
import Carousels from '../js/Carousels.js';
import {
    Grid,
    Row,
    Col,
    PageHeader,
    Panel,
    Thumbnail,
    Button
} from 'react-bootstrap';
class Home extends Component {
  render() {
    return (
            <Grid>
                <Carousels />
                <Row className="show-grid">
                    <Col xs={12} md={8}>
                        <Panel>
                            <Row>
                                <Col xs={6} md={4}>
                                    <Thumbnail src={'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcST5MBSbOH2-KiqLY9B22UC2pbHoDpZsFAaVa48tdE-P4E-fndk'} alt={"242*200"}>
                                        <h3>Thumbnail label</h3>
                                        <p>Description</p>
                                        <p>
                                            <Button bsStyle="primary">Button</Button>
                                        </p>
                                    </Thumbnail>
                                </Col>
                                <Col xs={6} md={4}>
                                    <Thumbnail src={'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcST5MBSbOH2-KiqLY9B22UC2pbHoDpZsFAaVa48tdE-P4E-fndk'} alt={"242*200"}>
                                        <h3>Thumbnail label</h3>
                                        <p>Description</p>
                                        <p>
                                            <Button bsStyle="primary">Button</Button>
                                        </p>
                                    </Thumbnail>
                                </Col>
                                <Col xs={6} md={4}>
                                    <Thumbnail src={'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcST5MBSbOH2-KiqLY9B22UC2pbHoDpZsFAaVa48tdE-P4E-fndk'} alt={"242*200"}>
                                        <h3>Thumbnail label</h3>
                                        <p>Description</p>
                                        <p>
                                            <Button bsStyle="primary">Button</Button>
                                        </p>
                                    </Thumbnail>
                                </Col>
                                <Col xs={6} md={4}>
                                    <Thumbnail src={'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcST5MBSbOH2-KiqLY9B22UC2pbHoDpZsFAaVa48tdE-P4E-fndk'} alt={"242*200"}>
                                        <h3>Thumbnail label</h3>
                                        <p>Description</p>
                                        <p>
                                            <Button bsStyle="primary">Button</Button>
                                        </p>
                                    </Thumbnail>
                                </Col>
                                <Col xs={6} md={4}>
                                    <Thumbnail src={'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcST5MBSbOH2-KiqLY9B22UC2pbHoDpZsFAaVa48tdE-P4E-fndk'} alt={"242*200"}>
                                        <h3>Thumbnail label</h3>
                                        <p>Description</p>
                                        <p>
                                            <Button bsStyle="primary">Button</Button>
                                        </p>
                                    </Thumbnail>
                                </Col>
                                <Col xs={6} md={4}>
                                    <Thumbnail src={'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcST5MBSbOH2-KiqLY9B22UC2pbHoDpZsFAaVa48tdE-P4E-fndk'} alt={"242*200"}>
                                        <h3>Thumbnail label</h3>
                                        <p>Description</p>
                                        <p>
                                            <Button bsStyle="primary">Button</Button>
                                        </p>
                                    </Thumbnail>
                                </Col>
                            </Row>
                        </Panel>
                    </Col>
                    <Col xs={6} md={4}>
                    </Col>
                </Row>
            </Grid>
    );
  }
}

export default Home;
