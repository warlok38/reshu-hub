import React from 'react';
import { Card } from 'shared/components/Card';

const GalleryPage = () => {
  const cardsMock = [
    {
      id: 1,
      title:
        'Заголовок очень большой Заголовок очень большой Заголовок очень большой Заголовок очень большой Заголовок очень большой Заголовок очень большой Заголовок очень большой Заголовок очень большой Заголовок очень большой Заголовок очень большой Заголовок очень большой Заголовок очень большой',
      description:
        'описание вот такое большое описание вот такое большое описание вот такое большое описание вот такое большое описание вот такое большое описание вот такое большое описание вот такое большое описание вот такое большое описание вот такое большое описание вот такое большое описание вот такое большое',
      date: '28 Апреля 2023',
      image:
        'https://media.proglib.io/wp-uploads/2018/07/1_qnI8K0Udjw4lciWDED4HGw.png',
    },
  ];

  return (
    <div>
      {cardsMock.map(({ id, title, description, date, image }) => (
        <Card
          key={id}
          title={id + ' ' + title}
          description={description}
          date={date}
          image={image}
        />
      ))}
    </div>
  );
};

export default GalleryPage;
