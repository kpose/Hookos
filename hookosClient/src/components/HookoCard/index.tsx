import React from 'react';
import {
  Container,
  Header,
  Content,
  Card,
  CardItem,
  Body,
  Text,
} from 'native-base';
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
  return (
    <Container>
      <Header />
      <Content>
        <Card>
          <CardItem>
            <Body>
              <Text>{body}</Text>
            </Body>
          </CardItem>
        </Card>
      </Content>
    </Container>
  );
};

export default HookoCard;
