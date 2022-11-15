import React from 'react';
import {View, Button} from 'react-native';

function Post({navigation}) {
  return (
    <View>
      <Button
        title="Detail 열기"
        onPress={() => navigation.navigate('Detail')}
      />
    </View>
  );
};
export default Post;
