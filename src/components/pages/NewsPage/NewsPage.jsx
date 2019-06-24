import React from 'react';

import './NewsPage.scss';
import OneNews from './OneNews';

const NewsPage = ({ news: newsArr, errorMsg }) => {

	const news = newsArr.map((n, idx) => {
		return <OneNews key={idx} />;
	});

	return { news };
};

export default NewsPage;
