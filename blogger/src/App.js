import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import ArticleList from './pages/ArticleList';
import ArticlesPage from './pages/ArticlesPage';
import About from './pages/About';
import NotFoundPage from './pages/NotFoundPage';
import LoginPage from './pages/LoginPage';

function App() {
  return (
    <BrowserRouter>
    <div className='App'>
      <div id="page-body">
        <Routes>
          <Route path="/" element={<LoginPage />} />
          <Route path="/home" element = {<HomePage />} />
          <Route path="/about" element = {<About />} />
          <Route path="/articles" element = {<ArticleList />} />
          <Route path="/articles/:articleId" element = {<ArticlesPage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </div>
    </div>
      
    </BrowserRouter>
  );
}

export default App;
