/* export type StackNavigatorParamlist = {
  FeedList: undefined;
  Details: {
    id: number;
    name: string;
    handle: string;
    date: string;
    content: string;
    image: string;
    avatar: string;
    comments: number;
    retweets: number;
    hearts: number;
  };
}; */

export type FeedStackParamList = {
  Home: undefined, 
  FeedDetails: { name: string }; 
};