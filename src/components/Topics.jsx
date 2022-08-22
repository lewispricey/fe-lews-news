import React, { useEffect, useState } from 'react';
import getTopics from '../api/getTopics';
import TopicLi from './TopicLi';

const Topics = () => {
    const [topics, setTopics] = useState([])

    useEffect(() => {getTopics().then((topicList) => setTopics(topicList))},[])
    
    return (
        <section>
            <h1>Topics</h1>
            <h2>To get started please select a topic from below:</h2>
            <ul className='topic__container'>
                {topics.map((topic) => <TopicLi key={topic.slug} topic={topic}/>)}
            </ul>
        </section>
    );
};

export default Topics;