import { UpOutlined } from '@ant-design/icons';
import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import AOS from 'aos';
import 'aos/dist/aos.css';

const Container = styled.div`
    position: fixed;
    bottom: 20px;
    left: 20px;
    display: flex;
    flex-direction: column;
    gap: 15px;
`
const Phone1 = styled.div`
  padding: 10px 20px;
  background-color: #DDAA5D;
  border-radius: 50%;
  cursor: pointer;
  width: 55px;
  height: 55px;
  z-index: 1000; 
  display: flex;
  justify-content: center;
  align-items: center;
  user-select: none;
  animation: pulse 1.5s infinite; 
@keyframes pulse {
  0% {
    box-shadow: 0 0 0 0 rgba(255, 165, 0, 0.7);
  }
  70% {
    box-shadow: 0 0 0 30px rgba(255, 165, 0, 0);
  }
  100% {
    box-shadow: 0 0 0 0 rgba(255, 165, 0, 0);
    }
  }
  a img {
    width: 30px;
    height: 30px;
    animation: swing 0.5s infinite; 
  }

  @keyframes swing {
    0% { transform: rotate(0deg); }
    20% { transform: rotate(10deg); }
    40% { transform: rotate(-30deg); }
    60% { transform: rotate(5deg); }
    80% { transform: rotate(-5deg); }
    100% { transform: rotate(0deg); }
  } 
`;

const Zalo = styled.div`
  padding: 10px 20px;
  background-color: #1b8ddf;
  border-radius: 50%;
  cursor: pointer;
  width: 55px;
  height: 55px;
  z-index: 1000; 
  display: flex;
  justify-content: center;
  align-items: center;
  user-select: none;
  animation: pulse1 1.5s infinite; 
@keyframes pulse1 {
  0% {
    box-shadow: 0 0 0 0 rgba(74, 209, 236, 0.7);
  }
  70% {
    box-shadow: 0 0 0 30px rgba(74, 209, 236, 0);
  }
  100% {
    box-shadow: 0 0 0 0 rgba(74, 209, 236, 0);
    }
  }
  a img {
    width: 30px;
    height: 30px;
    animation: swing 0.5s infinite; 
  }

`;

const Local = styled.div`
 
  padding: 10px 20px;
  background-color: #000000;
  border-radius: 50%;
  cursor: pointer;
  width: 55px;
  height: 55px;
  z-index: 1000; 
  display: flex;
  justify-content: center;
  align-items: center;
  user-select: none;
  animation: pulse2 1.5s infinite; 
@keyframes pulse2 {
  0% {
    box-shadow: 0 0 0 0 rgba(22, 21, 19, 0.7);
  }
  70% {
    box-shadow: 0 0 0 30px rgba(255, 165, 0, 0);
  }
  100% {
    box-shadow: 0 0 0 0 rgba(255, 165, 0, 0);
    }
  }
  a img {
    width: 30px;
    height: 30px;
    animation: swing 0.5s infinite; 
  }
`;

const Up = styled(UpOutlined)`
  position: fixed;
  bottom: 20px;
  right: 20px;
  padding: 10px 20px;
  background-color: white;
  border-radius: 50%;
  cursor: pointer;
  width: 55px;
  height: 55px;
  z-index: 1000; 
  display: flex;
  justify-content: center;
  align-items: center;
  user-select: none;
  box-shadow: 0 0 10px 0 rgba(0, 0, 0, 0.3);
  transition: all 0.3s ease;
  opacity: 0;
  visibility: hidden;
  &.sticky {
    opacity: 1;
    visibility: visible;
  }
`;
const Phone = () => {
    const [sticky, setSticky] = useState(false);
    const handleScroll = () => {
        if (window.scrollY > 20) {
            setSticky(true)
        }
        else {
            setSticky(false)
        }
    }
    useEffect(() => {
        window.addEventListener('scroll', handleScroll)
        return () => {
            window.removeEventListener('scroll', handleScroll)
        }
    }, [])
    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        })
    }
    useEffect(()=>{
        AOS.init({duration:2000});
    },[])
    return (
        <>
            <Container>
                <Local>
                    <a href='tel:0905040943'>
                        <img src={('/img/local.png')} alt='local' />
                    </a>
                </Local>
                <Zalo>
                    <a href='tel:0905040943'>
                        <img src={('/img/zalo.png')} alt='zalo' />
                    </a>
                </Zalo>
                <Phone1>
                    <a href='tel:0905040943'>
                        <img src={('/img/phone.png')} alt='phone' />
                    </a>
                </Phone1>
            </Container>
            <Up className={sticky ? 'sticky' : ''} onClick={scrollToTop} data-aos="fade-left"/>
        </>

    )
}

export default Phone;