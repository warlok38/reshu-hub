import React from 'react';
import * as S from './styled';
import { NewsBanner } from './NewsBanner';
import { NewsList } from './NewsList';
import { NewsTags, TagsData } from 'pages/News/ui/NewsTags';
import { useOutlet } from 'react-router';
import { useGetNews } from 'features/news/hooks/useGetNews';
import { isEmpty } from 'lodash';
import { Button } from '@mui/material';

const mockTags: TagsData[] = [
  { id: 1, name: 'Все' },
  { id: 2, name: 'Выставка' },
  { id: 3, name: 'Концерт' },
  { id: 4, name: 'Круглый стол' },
  { id: 5, name: 'Мастер-класс' },
  { id: 6, name: 'Олимпиада' },
  { id: 7, name: 'Открытая лекция' },
  { id: 8, name: 'Мероприятие' },
  { id: 9, name: 'Спутники проекта' },
  { id: 10, name: 'RechUCub-1' },
  { id: 11, name: 'RechUCub-2' },
  { id: 12, name: 'Роскосмос' },
];

const NewsPage = () => {
  const outlet = useOutlet();

  const { list } = useGetNews();

  if (outlet) {
    return outlet;
  }

  if (!list || isEmpty(list)) {
    return <div>Новостей нет</div>;
  }

  return (
    <S.Wrapper>
      <NewsBanner
        imageSrc="https://media.proglib.io/wp-uploads/2018/07/1_qnI8K0Udjw4lciWDED4HGw.png"
        title="Запуск нового спутника"
        description="Маленький космический кубик с большим исследовательским потенциалом "
        newsId={1}
      />
      <NewsTags
        data={mockTags}
        stackProps={{ style: { marginTop: '64px' } }}
      />
      <NewsList
        newsList={list}
        styleGrid={{ marginTop: '20px' }}
      />
      <Button
        variant="contained"
        style={{ margin: '32px 0', borderRadius: '20px', width: 'fit-content' }}
      >
        Показать ещё
      </Button>
    </S.Wrapper>
  );
};

export default NewsPage;
