import React from 'react';
import {
  FlatList,
  Image,
  View,
  TouchableOpacity
} from 'react-native';
import {
  RkText,
  RkCard, RkStyleSheet
} from 'react-native-ui-kitten';
import {data} from '../data';


export class Exercises extends React.Component {
  static navigationOptions = {
    title: 'Exercise List'.toUpperCase()
  };

  constructor(props) {
    super(props);
    this.data = data.getExercise();
    this.renderItem = this._renderItem.bind(this);
  }

  _keyExtractor(post) {
    return post.id;
  }

  _renderItem(info) {
    return (
      <RkCard rkType='horizontal' style={styles.card}>
        <Image rkCardImg source={info.item.thumbnail}/>

        <View rkCardContent>
          <RkText numberOfLines={1} rkType='header6'>{info.item.title}</RkText>
          <RkText style={styles.post} numberOfLines={2} rkType='secondary1'>{info.item.description}</RkText>
        </View>
        <View rkCardFooter>
          <SocialBar rkType='space' showLabel={true}/>
        </View >
      </RkCard>
    )
  }

  render() {
    return (
      <View>
        <FlatList
          data={this.data}
          renderItem={this.renderItem}
          keyExtractor={this._keyExtractor}
          style={styles.container}/>
      </View>
    )
  }
}


let styles = RkStyleSheet.create(theme => ({
  container: {
    backgroundColor: theme.colors.screen.scroll,
    paddingVertical: 8,
    paddingHorizontal: 14
  },
  card: {
    marginVertical: 8,
  },
  post: {
    marginTop: 13
  }
}));
