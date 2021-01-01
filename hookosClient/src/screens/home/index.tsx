import React, {useEffect, useState} from 'react';
import {View, Text, TouchableOpacity, FlatList} from 'react-native';
import {Loader} from '../../components';
import styles from './styles';

const Home = ({navigation}: {navigation: any}) => {
  const [isLoading, setLoading] = useState(true);
  const [hookos, setHookos] = useState([]);

  useEffect(() => {
    fetch('https://us-central1-hooko-36c30.cloudfunctions.net/api/posts')
      .then((response) => response.json())
      .then((json) => setHookos(json))
      .catch((err) => console.error(err))
      .finally(() => setLoading(false));
  }, []);
  return (
    <View style={styles.containerCentered}>
      {isLoading ? (
        <Loader />
      ) : (
        <FlatList
          data={hookos}
          keyExtractor={({id}, index) => id}
          renderItem={({item}) => <Text>{item.body}</Text>}
        />
      )}
    </View>
  );
};

export default Home;
