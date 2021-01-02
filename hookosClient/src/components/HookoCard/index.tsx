import React from 'react';
import {Image} from 'react-native';
import {Avatar, Button, Card, Title, Paragraph} from 'react-native-paper';
import {deviceWidth} from '../../utils/styleHelper/appStyle';

//import {uuid} from '../../utility/constants';
import styles from './styles';
import {color} from '../../utils';
import {HookoProps} from '../../screens/home';

const HookoCard: React.FC<{hooko: HookoProps}> = (props) => {
  const {
    body,
    commentCount,
    likeCount,
    createdAt,
    userHandle,
    userImage,
  } = props.hooko;

  const LeftContent = () => (
    <Image
      style={styles.tinyLogo}
      source={{
        uri: userImage,
      }}
    />
  );
  return (
    <Card style={styles.hookoBody}>
      <Card.Title title={userHandle} subtitle={createdAt} left={LeftContent} />
      <Card.Content>
        <Paragraph>{body}</Paragraph>
      </Card.Content>
      <Card.Cover
        style={styles.hookoImage}
        source={{uri: 'https://picsum.photos/700'}}
      />
      <Card.Actions style={styles.footerContent}>
        <Button>Cancel</Button>
        <Button>Ok</Button>
      </Card.Actions>
    </Card>
  );
};

export default HookoCard;
