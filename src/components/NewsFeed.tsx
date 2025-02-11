import React, { useEffect, useState } from "react";
import axios from "axios";
import NewsFilters from "./NewsFilters";

const sources = [
    { name: "NewsAPI", url: `https://newsapi.org/v2/top-headlines?country=us&apiKey=${process.env.REACT_APP_NEWS_API_KEY}` },
    { name: "The Guardian", url: `https://content.guardianapis.com/search?api-key=${process.env.REACT_APP_GUARDIAN_API_KEY}` },
    { name: "NY Times", url: `https://api.nytimes.com/svc/topstories/v2/home.json?api-key=${process.env.REACT_APP_NYTIMES_API_KEY}` }
];

const NewsFeed: React.FC = () => {
    const [articles, setArticles] = useState<any[]>([]);
    const [searchTerm, setSearchTerm] = useState("");
    const [selectedSource, setSelectedSource] = useState("All");

    useEffect(() => {
        const fetchNews = async () => {
            try {
                const responses = await Promise.all(sources.map(source => axios.get(source.url)));
                const allArticles = responses.flatMap((res, idx) => res.data.articles?.map((art: any) => ({ ...art, source: art.source.name, sourceFilter: 'NewsAPI' })) || res.data.response?.results.map((item: any) => ({ ...item, title: item.webTitle, url: item.webUrl, source: sources[idx].name, sourceFilter: 'The Guardian' })) || res.data.results?.map((art: any) => ({ ...art, sourceFilter: 'NY Times' })));
                setArticles(allArticles);
            } catch (error) {
                console.error("Error fetching news:", error);
            }
        };
        fetchNews();
    }, []);

    const filteredArticles = articles.filter(article =>
        (selectedSource === "All" || article.sourceFilter === selectedSource) &&
        (article.title.toLowerCase().includes(searchTerm.toLowerCase()))
    );

    return (
        <div className="news-container">
            <NewsFilters searchTerm={searchTerm} setSelectedSource={setSelectedSource} sources={sources} setSearchTerm={setSearchTerm} />
            <div className="articles-grid">
                {filteredArticles.map((article, index) => (
                    <div key={index} className="article-card">
                        {article.image && <img src={article.image} alt={article.title} className="article-image" />}
                        <div className="article-content">
                            <h2 className="article-title">{article.title}</h2>
                            <p className="article-source">{article.source}</p>
                            <a href={article.url} target="_blank" rel="noopener noreferrer" className="read-more">Read more</a>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default NewsFeed;