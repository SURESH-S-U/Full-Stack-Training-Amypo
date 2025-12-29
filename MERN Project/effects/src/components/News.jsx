import React, { useEffect, useState } from 'react'
import NewsItem from './NewsItem';


const News = ({category}) => {

// Create a state to store the news articles.
  const [articles, setArticles] = useState([]);

// UseEffect runs when the category changes

  useEffect(() => {
    // Fetch API url
    fetch(`https://newsapi.org/v2/top-headlines?country=us&category=${category}&apiKey=777b640438694448b1e9183ea3806d8f`)
    .then(res => res.json())
    .then(data => {
        setArticles(data.articles || [])
    });
  }, [category]
);

  return (
    <div>
        <p>{category}News</p>

        <div style={{display:"grid",gridTemplateColumns:"repeat(3, 1fr)",gap:"15px"}}>

            {/* Loopint through Articles */}
            {articles.map((news, index) => (
                <NewsItem key={index} 
                    title={news.title}
                    description={news.description}
                    image={news.urlToImage}
                    url={news.url} />
            ))}

        </div>

    </div>
  )
}

export default News