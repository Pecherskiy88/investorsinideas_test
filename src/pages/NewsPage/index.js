import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';

import { getNews } from '../../redux/actions';

import Header from '../../components/Header';
import List from '../../components/List';

const NewsPage = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getNews());
  }, [dispatch]);
  return (
    <div>
      <Header />
      <List />
    </div>
  );
};

export default NewsPage;
