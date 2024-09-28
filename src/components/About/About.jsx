import React, { useEffect } from 'react';
import { Content, Img,Section } from './style';
import ButtonCPN from '../Button/Button';
import AOS from 'aos';
import 'aos/dist/aos.css';

function About() {
    useEffect(()=>{
        AOS.init({duration:2000});
    },[]);

    return (
        <Section>
            <Img data-aos="fade-up"></Img>
            <Content>
                <h1 data-aos="fade-left">LOA DI ĐỘNG</h1>
                <p data-aos="fade-left">Mang âm thanh đặc trưng của Marshall đi khắp mọi nơi bằng loa di động và giữ cho âm nhạc của bạn tiếp tục hàng giờ liền.</p>
                <ButtonCPN text="Xem thêm" />
            </Content>
        </Section>
    );
}

export default About;