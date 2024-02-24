import { Text, View, Button, StyleSheet, Dimensions, Image,ScrollView, ImageBackground } from 'react-native';
import React, { Component } from 'react';
import SearchBar from '../../../components/SearchBar';
import RecommendedCard from '../../../components/RecommendedCard';
import RecentJobs from '../../../components/RecentJobs';

// let customFonts = {
//   'Inter-Black': require('../assets/fonts/Inter-Black.ttf'),
//   'Inter-Medium': require('../assets/fonts/Inter-Medium.ttf'),
//   'Inter-Light': require('../assets/fonts/Inter-Light.ttf'),
//   'Inter-Thin': require('../assets/fonts/Inter-Thin.ttf'),
//   'Inter-Bold': require('../assets/fonts/Inter-Bold.ttf'),
//   'Inter-ExtraBold': require('../assets/fonts/Inter-ExtraBold.ttf'),
//   'Inter-SemiBold': require('../assets/fonts/Inter-SemiBold.ttf'),
//   'DMSans-Bold': require('../assets/fonts/DMSans-Bold.ttf')
// };

export class HomeStart extends Component {
  state = {
    fontsLoaded: false,
  };

  async _loadFontsAsync() {
    await Font.loadAsync(customFonts);
    this.setState({ fontsLoaded: true });
  }

  componentDidMount() {
    this._loadFontsAsync();
  }

  render() {
    const { navigation } = this.props;

    if (!this.state.fontsLoaded) {
      return null;
    }

    return (
      <View style={styles.container}>
        {/* <Text style={styles.headerText}>Welcome Back</Text> */}
        <SearchBar />


        <RecommendedCard />
        

        <View style={{flex: 1}}>
          
          <RecentJobs />
          
        </View>
        

        <ImageBackground
          source={require('')}
          style={[styles.fixed, styles.container, { zIndex: -1 }, { opacity: 0.1 }]}
        />
      </View>
    );
  }
}

export default HomeStart;
