import React,{Component} from 'react';
import {PanelGroup,Panel} from 'react-bootstrap';
class VideoTags extends Component {
    constructor(props){
        super(props);
        this.state={
            activeKey: '1'
        };
    }
    render(){
        return (
            <PanelGroup defaultActiveKey={this.state.activeKey} accordion>
                <Panel header="Panel 1" eventKey="1">Panel 1 content</Panel>
                <Panel header="Panel 2" eventKey="2">Panel 2 content</Panel>
            </PanelGroup>
            )
    }
}
export default VideoTags;
