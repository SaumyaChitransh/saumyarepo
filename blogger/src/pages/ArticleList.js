import articles from './article-content';
import ArticlesList from '../components/ArticlesList';
import NavBar from '../NavBar';
const ArticleList = () => {
    return(
        <>
        <div className='App'>
            <NavBar />
        </div>
        <h1>Experience Cloud Solutions</h1>
        <ArticlesList articles={articles} />
        </>
    );
}

export default ArticleList;