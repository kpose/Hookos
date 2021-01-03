import React from 'react';
import {Image, TouchableOpacity} from 'react-native';
import {Avatar, Button, Card, Title, Paragraph} from 'react-native-paper';
import moment from 'moment';

//import {uuid} from '../../utility/constants';
import styles from './styles';

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
      <TouchableOpacity>
        <Card.Title
          title={userHandle}
          subtitle={moment(createdAt).fromNow()}
          left={LeftContent}
        />
      </TouchableOpacity>
      <Card.Content>
        <Paragraph>{body}</Paragraph>
      </Card.Content>
      <Card.Cover
        style={styles.hookoImage}
        source={{uri: 'https://picsum.photos/700'}}
      />
      <Card.Actions style={styles.footerContent}>
        <Button>Like</Button>
        <Button>Comment</Button>
        <Button>Delete</Button>
      </Card.Actions>
    </Card>
  );
};

export default HookoCard;
