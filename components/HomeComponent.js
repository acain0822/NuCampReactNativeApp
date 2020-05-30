import React, { Component } from 'react';
import { View, Text, ScrollView } from 'react-native';
import { Card } from 'react-native-elements';
import { CAMPSITES } from '../shared/campsites';
import { COMMENTS } from '../shared/comments';
import { PROMOTIONS } from '../shared/promotions';

function RenderItem({item}){
  if (item) {
    return(
      <Card
        featuredTitle={item.name}
        image={require('./images/react-lake.jpg')}
        >
          <Text
          style={{margin: 10}}>
            {item.description}
          </Text>
      </Card>
    )
  }
  return <View />
}

export default class Home extends Component {
  constructor(props){
    super(props);
    this.state = {
      campsites: CAMPSITES,
      promotions: PROMOTIONS,
      comments: COMMENTS
    };
  }
  static navigationOptions = {
    title: 'Home'
  }

  render(){
    return(
     
      <ScrollView>
        <RenderItem item={this.state.campsites.filter(campsite => campsite.featured)[0]}
        />
        <RenderItem item={this.state.promotions.filter(promotion => promotion.featured)[0]}
        />
        <RenderItem item={this.state.comments.filter(comment => comment.featured)[0]}
        />
      </ScrollView>
    )
  }
}