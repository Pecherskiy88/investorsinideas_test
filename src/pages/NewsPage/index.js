import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';

import { getNews } from '../../redux/actions';

const NewsPage = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getNews());
  }, [dispatch]);
  return <div>NewsPage</div>;
};

export default NewsPage;
