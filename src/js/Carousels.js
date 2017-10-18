import React,{Component} from 'react';
import {Carousel} from 'react-bootstrap';
import '../css/Carousels.css';
class Carousels extends Component {
    render(){
        return  (
            <Carousel>
                <Carousel.Item>
                    <a href="">
                        <img alt="900*500" src="http://wx4.sinaimg.cn/large/ab4cb34aly1ffmgjrysruj20dw0azacc.jpg" />
                        <Carousel.Caption>
                            <h3>First slide label</h3>
                            <p>Nulla vitae elit libero,a pharetra augue mollis interdum</p>
                        </Carousel.Caption>
                    </a>
                </Carousel.Item>
                <Carousel.Item>
                    <a href="">
                        <img alt="900*500" src="http://wx3.sinaimg.cn/large/415f82b9ly1ffr0oz7elyj20ee0bdwgq.jpg" />
                        <Carousel.Caption>
                            <h3>First slide label</h3>
                            <p>Nulla vitae elit libero,a pharetra augue mollis interdum</p>
                        </Carousel.Caption>
                    </a>
                </Carousel.Item>
                <Carousel.Item>
                    <a href="">
                        <img alt="900*500" src="https://09.imgmini.eastday.com/mobile/20170518/20170518152222_46d87f913f9ffac82521a247241ac2fb_14.jpeg" />
                        <Carousel.Caption>
                            <h3>First slide label</h3>
                            <p>Nulla vitae elit libero,a pharetra augue mollis interdum</p>
                        </Carousel.Caption>
                    </a>
                </Carousel.Item>
            </Carousel>
        );
    }
}
export default Carousels;
