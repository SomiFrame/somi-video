import React, { Component } from 'react';
import { Thumbnail, Col } from 'react-bootstrap';
class VideoThumbnail extends Component {
    constructor(props) {
        super(props);
        this.numbers = props.numbers;
    }
    listItems() {
        let listItems_list = this.numbers.map((number) =>
            <Col xs={6} md={4} key={number.toString()}>
                <a href="/videoinfo">
                    <Thumbnail src={'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcST5MBSbOH2-KiqLY9B22UC2pbHoDpZsFAaVa48tdE-P4E-fndk'} alt={"242*200"}>
                        <h3>Thumbnail label{number}</h3>
                        <p>Description</p>
                    </Thumbnail>
                </a>
            </Col>
        )
        return listItems_list;
    }
    render() {
        const listItems = this.listItems();
        return (
            <div>{listItems}</div>
        );
    };
}
export default VideoThumbnail;
