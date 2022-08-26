import React, { useEffect, useState } from 'react';
import '../styles/topics.css'
import getTopics from '../api/getTopics';
import TopicLi from './TopicLi';
import Loading from './Loading';

const Topics = () => {
    const [topics, setTopics] = useState([])
    const [isLoading, setIsLoading] = useState([])

    useEffect(() => {
        setIsLoading(true)
        getTopics()
        .then((topicList) => {
            setTopics(topicList)
            setIsLoading(false)
        })
        .catch((err => {
            setIsLoading(false)
        }))
    },[])
    
    return (
        <section>
            <h1>Topics</h1>
            <h2>To get started please select a topic from below:</h2>
            {isLoading ? <Loading /> : null}
            <ul className='topic__container'>
                {topics.map((topic) => <TopicLi key={topic.slug} topic={topic}/>)}
            </ul>
        </section>
    );
};

export default Topics;