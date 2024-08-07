import './App.css';
import HomePage from './pages/Home';
import { BrowserRouter as Router,Routes,Route } from 'react-router-dom';
import {privateRoutes} from './routes'

function App() {
  return (
    <Router>
      <div className="main">
        <Routes>
          {
            privateRoutes.map((route,index) => {
              
              const Layout = route.layout;
              const Page = route.component;
              return <Route key={index} path={route.path} element={
                <Layout>
                  <Page/>
                </Layout>
              } />
            })
          }
        </Routes>
      </div>
    </Router>
    
  );
}

export default App;
