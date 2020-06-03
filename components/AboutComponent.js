import React, {Component} from 'react';
import {ScrollView, Text} from 'react-native';
import {Card} from 'react-native-elements';
import {PARTNERS} from '../shared/partners';
import { FlatList } from 'react-native';
import { ListItem } from 'react-native-elements';

export default class About extends Component{
  constructor(props){
    super(props);

  }

  static navigationOptions = {
    title: 'About Us'
  };

  render(){

    function Mission(){
      return(
        <Card>
          <Text>
          We present a curated database of the best campsites in the vast woods and backcountry of the World Wide Web Wilderness. We increase access to adventure for the public while promoting safe and respectful use of resources. The expert wilderness trekkers on our staff personally verify each campsite to make sure that they are up to our standards. We also present a platform for campers to share reviews on campsites they have visited with each other.
          </Text>
        </Card>
      )
    }

    const RenderPartner = ({item}) => {
      return(
        <ListItem
        title={ListItem.name}
        subtitle={item.description}
        leftAvatar={{ source: require('./images/bootstrap-logo.png')}}
        />
      )
    }

    return(
      <ScrollView>
        <Mission/>
        <Card
        title='Community Partners'>
          <FlatList
          data={PARTNERS}
          renderItem={RenderPartner}
          keyExtractor={ item => item.id.toString()}/>
        </Card>
      </ScrollView>
    )
  }
}