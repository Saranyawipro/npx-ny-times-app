import React, { useState, useEffect } from "react";
import PeriodicDataForm from "./PeriodicDataForm";
import { Skeleton } from 'antd';
import ArticleDetail from "./ArticleDetail";

//getting NY api key from .env file
const sampleKey = process.env.REACT_APP_SAMPLE_KEY



const ArticleList = () => {
  //ArticleList component state
  const [articles, setArticles] = useState([]);
  const [period, setPeriod] = useState(1);
  const [isLoading, setIsLoading] = useState(true);
  
  const endPoint = `https://api.nytimes.com`;
  const apiUrl=`${endPoint}/svc/mostpopular/v2/viewed/${period}.json?api-key=${sampleKey}`;
  const handleDataFromChild = (data) =>{
    
  setPeriod(Number(data))
 
}

  // Below method use to fetch the most viewd articles from  NY Time
  useEffect(() => {
    const fetchArticles = async () => {
      try {
        
        const res = await fetch(apiUrl);
        const articles = await res.json();

        setArticles(articles.results);
        setIsLoading(false);
      } catch (error) {
        console.error(error);
      }
    };
    fetchArticles();
  }, [period,apiUrl]);

  // Displaying the UI with list of Most viewed article
  return (
    <>
      <div className="showcase">
        <div className="overlay' px-5">
          <h1
            className="text-4xl text-bold text-white 
            text-center mb-4 lg:text-6xl"
          >
            NY Times Most Popular Articles for {period} Day{" "}
          </h1>

          {/* Rendering Periodic form data */}
          <PeriodicDataForm  sendDataToParent={handleDataFromChild} />
        </div>
      </div>
       
      {isLoading ? (
        <Skeleton active />
      ) : (
      <ArticleDetail articles = {articles}/>
      )}
    </>
  );
};

export default ArticleList;
