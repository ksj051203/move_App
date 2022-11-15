import React from 'react';
import {View, Button} from 'react-native';

function Detail({navigation}) {
  return (
    <View>
      <Button
        title="Detail 열기"
        onPress={() => navigation.navigate('Detail')}
      />
    </View>
  );
};

export default Detail;
