import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import route from '../src/router/router';
import './App.css';
import Default from './components/Default/Default';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';

function App() {
  return (
    <Router>
      <div>
        <Header/>
        <div style={{ backgroundColor: 'rgb(246, 246, 246)' }}>
          <Routes>
            {route.map((route, index) => {
              const Page = route.page;
              const Layout = route.isShowHeader ? Default : React.Fragment;
              return (
                <Route 
                  key={index}
                  path={route.path} 
                  element={
                    <Layout>
                      <Page />
                    </Layout>
                  } 
                />
              );
            })}
          </Routes>
        </div>
        <Footer />
      </div>
    </Router>
  );
}

export default App;