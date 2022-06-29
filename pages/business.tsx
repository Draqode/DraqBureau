import { Heading } from '@chakra-ui/react';
import Axios from 'axios';
import { NextPage } from 'next';
import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react';
import { useRecoilState } from 'recoil';
import { News } from '../components/News';
import PageSectionLayout from '../components/PageSectionLayout';
import { Trending } from '../components/types';
import { business } from '../states';

const Business: NextPage = () => {
  const [res, setRes] = useState<Trending[]>();
  const { pathname } = useRouter();
  let path = pathname.slice(1);
  const [page, setPage] = useRecoilState(business);
  let dis = false;
  if (page === 1) {
    dis = true;
  }
  useEffect(() => {
    Axios.get(
      `https://newsdata.io/api/1/news?apikey=${process.env.maemoonah}&language=en&category=${path}&page=${page}`,
    ).then((res) => {
      setRes(res.data.results);
    });
  }, [path, page]);

  return (
    <PageSectionLayout path={path} dis={dis} page={page} setPage={setPage}>
      <Heading mb="30px"> Business </Heading>
      {res?.map((data, id) => (
        <News data={data} key={id} />
      ))}
    </PageSectionLayout>
  );
};
export default Business;
