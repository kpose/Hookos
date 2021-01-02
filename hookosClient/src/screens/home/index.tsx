import React, {useEffect, useState} from 'react';
import {View, Text, SafeAreaView, ScrollView} from 'react-native';
import axios from 'axios';
import {Loader, HookoCard} from '../../components';
import styles from './styles';

export interface HookoProps {
  body: string;
  commentCount: number;
  likeCount: number;
  createdAt: string;
  userHandle: string;
  userImage: string;
  postId: string;
}

const Home: React.FC = () => {
  const [isLoading, setLoading] = useState(true);
  const [hookos, setHookos] = useState<HookoProps[]>([]);

  const hookosMarkup = hookos.map((data: HookoProps) => (
    <HookoCard key={data.postId} hooko={data} />
  ));

  useEffect(() => {
    axios
      .get<HookoProps[]>(
        'https://us-central1-hooko-36c30.cloudfunctions.net/api/posts',
      )
      .then(({data}) => {
        setHookos(data);
        setLoading(false);
      });
    console.log(hookos);
  }, []);

  return (
    <SafeAreaView style={styles.containerCentered}>
      <ScrollView>{isLoading ? <Loader /> : hookosMarkup}</ScrollView>
    </SafeAreaView>
  );
};

export default Home;
