import React from 'react';
import { useSelector } from 'react-redux';
import styled from 'styled-components';

import { newsDataSelector } from '../../redux/selectors';

import Item from './Item';

const List = () => {
  const newsData = useSelector((state) => newsDataSelector(state));
  const { articles } = newsData;
  return (
    <Div>
      {articles.length > 0
        ? articles.map((el) => <Item data={el} key={el.publishedAt} />)
        : []}
    </Div>
  );
};

const Div = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
`;

export default List;
