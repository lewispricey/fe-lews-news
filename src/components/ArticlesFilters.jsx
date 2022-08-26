import React, { useEffect, useState } from 'react';
import '../styles/articles.css'
import getSortedArticles from '../api/getSortedArticles';
import { useSearchParams } from 'react-router-dom';

const ArticlesFilters = ({articles, setArticles, setIsLoading}) => {
    const [searchParams, setSearchParams] = useSearchParams();
   
    const handleChangeSort = ({target}) => {
        searchParams.set("sortBy", target.value)
        setSearchParams(searchParams)
    }
    const handleChangeOrder = ({target}) => {
        searchParams.set("order", target.value)
        setSearchParams(searchParams)
    }

    useEffect(()=> {
        setIsLoading(true)
        const search = [searchParams.get("sortBy"), searchParams.get("order"),]
        getSortedArticles(search[0], search[1])
        .then((data) => {
            setIsLoading(false)
            setArticles(data.articles)
        })
    }, [searchParams])


    return (
        <div className="articles__filter__container">
            <label className="articles__filter__sortby" htmlFor="sortby-selector">Sort By:
                <select onChange={handleChangeSort} name="sortby" id="sortby-selector" className="selector">
                    <option value="article_id">Date Posted</option>
                    <option value="votes">Votes</option>
                    <option value="title">Title</option>
                    <option value="topic">Topic</option>
                    <option value="author">Author</option>
                </select>
            </label>
            <label className="articles__filter__order" htmlFor="order-selector">Order:
                <select onChange={handleChangeOrder} name="order" id="order-selector" className="selector">
                    <option value="desc">DESC</option>
                    <option value="asc">ASC</option>
                </select>
            </label>
        </div>
    );
};

export default ArticlesFilters;