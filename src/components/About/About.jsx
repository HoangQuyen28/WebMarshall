import React, { Component } from 'react';
import { Content, Img,Section } from './style';
import ButtonCPN from '../Button/Button';

class About extends Component {
    render() {
        return (
            <Section>
                <Img></Img>
                <Content>
                    <h1>LOA DI ĐỘNG</h1>
                    <p>Mang âm thanh đặc trưng của Marshall đi khắp mọi nơi bằng loa di động và giữ cho âm nhạc của bạn tiếp tục hàng giờ liền.</p>
                    <ButtonCPN text="Xem thêm" />
                </Content>
            </Section>
        );
    }
}

export default About;