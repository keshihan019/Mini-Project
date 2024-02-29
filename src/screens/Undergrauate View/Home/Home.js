import React, { useState, useEffect } from 'react';
import { Text, View, StyleSheet, Dimensions, ImageBackground } from 'react-native';
import SearchBar from '../../../components/Undergraduate/SearchBar/SearchBar';
import RecommendedCard from '../../../components/Undergraduate/RecommendedJobs/RecommendedCard';
import RecentJobs from '../../../components/Undergraduate/RecentJobs/RecentJobs';


const customFonts = {
  'Inter-Black': require('../../../assets/fonts/Inter-Black.ttf'),
  'Inter-Medium': require('../../../assets/fonts/Inter-Medium.ttf'),
  'Inter-Light': require('../../../assets/fonts/Inter-Light.ttf'),
  'Inter-Thin': require('../../../assets/fonts/Inter-Thin.ttf'),
  'Inter-Bold': require('../../../assets/fonts/Inter-Bold.ttf'),
  'Inter-ExtraBold': require('../../../assets/fonts/Inter-ExtraBold.ttf'),
  'Inter-SemiBold': require('../../../assets/fonts/Inter-SemiBold.ttf'),
  'DMSans-Bold': require('../../../assets/fonts/DMSans-Bold.ttf')
};

const Home = ({ navigation }) => {
  // const [fontsLoaded, setFontsLoaded] = useState(false);

  // useEffect(() => {
  //   const loadFontsAsync = async () => {
  //     await Promise.all(
  //       Object.keys(customFonts).map((fontName) => {
  //         return Font.loadAsync(customFonts[fontName]);
  //       })
  //     );
  //     setFontsLoaded(true);
  //   };

  //   loadFontsAsync();
  // }, []);

  // if (!fontsLoaded) {
  //   return null;
  // }

  return (
    <View style={styles.container}>
      <Text style={styles.headerText}>Welcome Back</Text>
      <SearchBar />
      <RecommendedCard />
      <View style={{ flex: 1 }}>
        <RecentJobs />
      </View>
      <ImageBackground
        source={require('../../../assets/images/bg-1.png')}
        style={[styles.fixed, styles.container, { zIndex: -1 }, { opacity: 0.1 }]}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height,
    opacity: 1.0,
  },
  fixed: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
  },
  headerText: {
    fontSize: 30,
    backgroundColor: '#fff',
    fontFamily: 'Inter-Medium',
    paddingHorizontal: 10,
    paddingVertical: 5,
    color:'#000'
  },
  headerCard: {},
});

export default Home;
