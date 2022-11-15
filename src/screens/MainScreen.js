import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {Text, View, Button} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

const Tab = createBottomTabNavigator();

function Home({navigation}) {
  return (
    <View>
      <Text>Home</Text>
      <Button title="Detail 1 열기" onPress={() => navigation.push('Detail')} />
    </View>
  );
}

function Detail({navigation}) {
  return (
    <View>
      <Text>Detail</Text>
    </View>
  );
}

function Post({navigation}) {
  return (
    <View>
      <Text>Post</Text>
    </View>
  );
}

function Mypage({navigation}) {
  return (
    <View>
      <Text>Mypage</Text>
    </View>
  );
}

function MainScreen() {
  return (
    <Tab.Navigator
      initalRouteName="Home"
      screenOptions={{
        tabBarActiveTintColor: 'fb8c00',
        tabBarShowLabel: false,
      }}>
      <Tab.Screen
        name="Home"
        component={Home}
        options={{
          title: '홈',
          tabBarIcon: ({color, size}) => {
            <Icon name="Home" color={color} size={size} />;
          },
        }}
      />

      <Tab.Screen
        name="Detail"
        component={Detail}
        options={{
          title: '상세정보',
          tabBarIcon: ({color, size}) => {
            <Icon name="Detail" color={color} size={size} />;
          },
        }}
      />

      <Tab.Screen
        name="Post"
        component={Post}
        options={{
          title: '글 작성',
          tabBarIcon: ({color, size}) => {
            <Icon name="Post" color={color} size={size} />;
          },
        }}
      />

      <Tab.Screen
        name="Mypage"
        component={Mypage}
        options={{
          title: '마이페이지',
          tabBarIcon: ({color, size}) => {
            <Icon name="Mypage" color={color} size={size} />;
          },
        }}
      />
    </Tab.Navigator>
  );
}
export default MainScreen;
