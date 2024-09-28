import React, { useState } from 'react';
import styled from 'styled-components';
import { RightOutlined, LeftOutlined, UserOutlined, MessageOutlined, PartitionOutlined } from '@ant-design/icons';

const NewsContainer = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh;
`;

const NewsTitle = styled.h1`
margin-left:20px;
  font-size: 24px;
  font-weight: 700;
  color: #000;
`;

const Content = styled.div`
  display: flex;
  gap: 20px;
  margin-top: 10px;
`;

const ContentLeft = styled.div`
  background-color: white;
  border-radius: 10px;
  height: 328px;
  width: 25%;
`;

const NewsList = styled.div`
  display: flex;
  gap: 20px;  
  width: 100%;
  justify-content: space-between;
  transition: transform 1.5s ease-in-out;
  transform: ${({ currentIndex }) => `translateX(-${currentIndex * (100 / 3)}%)`};
`;
const NewsListWrapper = styled.div`
  width: 80%;
  overflow: hidden;
  position: relative;
`;

const NewsItem = styled.div`
  padding: 10px;
  background-color: white;
  margin-bottom: 10px;
  border-radius: 5px;
  width: calc(95% / 3); 
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  flex-shrink: 0; //ngan phan tu co lai khi truot
`;

const ImageNew = styled.img`
  width: 100%;
  height: 100%;
  border-radius: 5px;
  object-fit: cover;
  transition: transform 0.5s ease-in-out;
  &:hover {
    transform: scale(1.05);
  }
  cursor: pointer;
`;

const Post = styled.div`
  position: absolute;
  right: 0;
  bottom: 0;
  left: 0;
  padding: 15px 20px;
  transition: all .25s ease;
  pointer-events: none;
  background: linear-gradient(180deg, transparent 0%, rgba(0, 0, 0, 0.3) 100%);
  display: flex;
  justify-content: space-between;
`;

const Postleft = styled.div`
  display: flex;
  gap: 10px;
  color: white;
`;

const PostleftUser = styled(UserOutlined)`
  background-color: silver;
  color: white;
  border-radius: 50%;
  padding: 3px;
`;

const ContentBottom = styled.div`
  flex-direction: column;
  margin-left: 10px;
  margin-top:30px;
  height: 170px;
`;

const PostRight = styled.div`
  display: flex;
  gap: 10px;
  color: white;
`;

export const Number1 = styled.div`
  position: absolute;
  top: -5px;
  right: -7px;
  background-color: black;
  color: white;
  border-radius: 50%;
  width: 13px;
  height: 14px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 10px;
`;

const HeaderLeft = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 10px;
`;

const ContentLeftList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;


const news = [
  { image: '/img/new3.png', store: 'Marshall Store Viet Nam1', type: 'Chưa phân loại', date: '2021-02-20', name: 'Review tai nghe Marshall', description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos.' },
  { image: '/img/new3.png', store: 'Marshall Store Viet Nam2', type: 'Chưa phân loại', date: '2023-02-20', name: 'Review Marshall Woburn 3 - Một chiếc loa dành cho Gia đình' },
  { image: '/img/new3.png', store: 'Marshall Store Viet Nam3', type: 'Gaming', date: '2024-02-20', name: 'Review tai nghe Marshall' },
  { image: '/img/new3.png', store: 'Marshall Store Viet Nam4', type: 'Gaming', date: '2024-02-20', name: 'Review tai nghe Marshall' },
];

const news1 = [
  {
    image: '/img/new3.png', CanhBao: 'Cảnh báo tai nghe Marshall Minor 3, cùng một số model loa Fake được quảng cáo và bán đầy rẫy trên Facebook', type: 'Chưa phân loại', date: '2021-02-20',
    description: 'Những chiếc tai nghe, loa của Marshall giả mạo được bán đầy rẫy trên Facebook'
  },
];

const News = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const itemsPerPage = 3;

  const handleRightClick = () => {
    setCurrentIndex(prev => (prev + 1 < news.length / itemsPerPage) ? prev + 1 : prev);
  };

  const handleLeftClick = () => {
    setCurrentIndex(prev => (prev - 1 >= 0) ? prev - 1 : 0);
  };



  return (
    <NewsContainer>
      <NewsTitle>TIN TỨC</NewsTitle>
      <Content>
        <LeftOutlined onClick={handleLeftClick} />
        <ContentLeft>
          <HeaderLeft>
            <span>Marshall Store Viet Nam</span>
            <div style={{ display: 'flex', gap: '10px' }}>
              <div><PartitionOutlined /></div>
              <div style={{ position: 'relative', display: 'inline-block' }}>
                <MessageOutlined />
                <Number1>0</Number1>
              </div>
            </div>
          </HeaderLeft>
          <ContentLeftList>
            {news1.map((item, index) => (
              <div key={index} style={{ margin: '0 10px' }}>
                <p style={{ color: 'gray' }}>{item.type} / {item.date}</p>
                <p style={{ fontSize: '22px', fontWeight: 'bold' }}>{item.CanhBao}</p>
                <p style={{ color: 'gray' }}>{item.description}</p>
              </div>
            ))}
            <span style={{ cursor: 'pointer', marginLeft: '10px' }}>Continue Reading</span>
          </ContentLeftList>
        </ContentLeft>

        <NewsListWrapper>
          <NewsList currentIndex={currentIndex}>
            {news.map((item, index) => (
              <NewsItem key={index}>
                <div style={{ position: 'relative' }}>
                  <ImageNew src={item.image} alt={item.name} />
                  <Post>
                    <Postleft>
                      <PostleftUser />
                      <span>{item.store}</span>
                    </Postleft>
                    <PostRight>
                      <div><PartitionOutlined /></div>
                      <div style={{ position: 'relative', display: 'inline-block' }}>
                        <MessageOutlined />
                        <Number1>0</Number1>
                      </div>
                    </PostRight>
                  </Post>
                </div>
                <ContentBottom>
                  <p style={{ color: 'gray' }}>{item.type} / {item.date}</p>
                  <p style={{ fontSize: '22px', fontWeight: 'bold' }}>{item.name}</p>
                  <p style={{ color: 'gray' }}>{item.description}</p>
                </ContentBottom>
                <span style={{ cursor: 'pointer', marginLeft: '10px' }}>Continue Reading</span>
              </NewsItem>
            ))}
          </NewsList>
        </NewsListWrapper>

        <RightOutlined onClick={handleRightClick} />
      </Content>
    </NewsContainer>
  );
}

export default News;
