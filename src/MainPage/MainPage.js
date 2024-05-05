import React, { useEffect, useState } from 'react';
import './MainPage.css';
import Articles from '../Articles/Articles';
import { Outlet } from 'react-router-dom';

const MainPage = ({ articles, viewArticle, outletVisible }) => {
  const [sortedArticles, setSortedArticles] = useState(articles.articles || []);
  const [sortDirection, setSortDirection] = useState(null);

  const sortByDate = () => {
    const newSortDirection = sortDirection === 'ascending' ? 'descending' : 'ascending';
    setSortDirection(newSortDirection);

    const sorted = [...sortedArticles].sort((a, b) => {
      const dateA = new Date(a.publishedAt);
      const dateB = new Date(b.publishedAt);

      if (newSortDirection === 'ascending') {
        return dateA - dateB;
      } else {
        return dateB - dateA;
      }
    });
    setSortedArticles(sorted);
  };

  return (
    <>
      <button onClick={sortByDate}>Sort by date {sortDirection === 'ascending' ? '↓' : '↑'}</button>
      {outletVisible && (
        <div id='fullArticle'>
          <Outlet />
        </div>
      )}
      <div id='articleList'>
        <Articles articles={sortedArticles} articleDetail={viewArticle} />
      </div>
    </>
  );
};

export default MainPage;
