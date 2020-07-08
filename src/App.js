import React from 'react';
import {Layout, Header, Navigation, Drawer, Content} from 'react-mdl';
import './App.css';
import Main from './components/main';
import {Link} from 'react-router-dom';

function App() {
  return (
    <div className="demo-big-content">
    <Layout>
        <Header className="header-color" title={<Link style={{textDecoration: 'none', color: 'white'}} 
        to="/me">Home</Link>} scroll>
            <Navigation>
                <Link to={process.env.PUBLIC_URL + '/projects'}>Projects</Link>
                <Link to={process.env.PUBLIC_URL + '/resume'}>Resume</Link>
                <Link to={process.env.PUBLIC_URL + '/contact'}>Contact</Link>
            </Navigation>
        </Header>
        <Drawer title={<Link style={{textDecoration: 'none', color: 'black'}} to="/me">Home</Link>}>
            <Navigation>
                <Link to={process.env.PUBLIC_URL + '/projects'}>Projects</Link>
                <Link to={process.env.PUBLIC_URL + '/resume'}>Resume</Link>
                <Link to={process.env.PUBLIC_URL + '/contact'}>Contact</Link>
            </Navigation>
        </Drawer>
        <Content>
          <div className="page-content"/>
          <Main/>
        </Content>
    </Layout>
</div>
  );
}

export default App;
