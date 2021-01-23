import React, {Component} from 'react';
import {
  StyleSheet,
  View,
  Text,
  TextInput,
  SafeAreaView,
  FlatList,
  Image,
  TouchableOpacity,
} from 'react-native';
import FlatListExample from './src/components/FlatListExample';

export default class App extends Component {
  render() {
    return (
      <SafeAreaView style={styles.container}>
        <FlatListExample />
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  }
});
