import React from 'react';
import { DetailCard } from './DetailCard';
import { materialsDetailMock } from 'shared/mocks/materials';

const DetailPage = () => {
  return (
    <div>
      {materialsDetailMock.map(({ id, name }) => (
        <DetailCard
          key={id}
          id={id}
          name={name}
        />
      ))}
    </div>
  );
};

export default DetailPage;
