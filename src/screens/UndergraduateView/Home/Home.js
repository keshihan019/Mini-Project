import React, { useState, useEffect } from 'react';
import { Text, View, Dimensions, ImageBackground } from 'react-native';
import SearchBar from '../../../components/UndergraduateView/SearchBar/SearchBar';
import RecommendedCard from '../../../components/UndergraduateView/RecommendedJobs/RecommendedCard';
import RecentJobs from '../../../components/UndergraduateView/RecentJobs/RecentJobs';
import styles from './styles';

// const customFonts = {
//   'Inter-Black': require('../../../assets/fonts/Inter-Black.ttf'),
//   'Inter-Medium': require('../../../assets/fonts/Inter-Medium.ttf'),
//   'Inter-Light': require('../../../assets/fonts/Inter-Light.ttf'),
//   'Inter-Thin': require('../../../assets/fonts/Inter-Thin.ttf'),
//   'Inter-Bold': require('../../../assets/fonts/Inter-Bold.ttf'),
//   'Inter-ExtraBold': require('../../../assets/fonts/Inter-ExtraBold.ttf'),
//   'Inter-SemiBold': require('../../../assets/fonts/Inter-SemiBold.ttf'),
//   'DMSans-Bold': require('../../../assets/fonts/DMSans-Bold.ttf')
// };

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



export default Home;
