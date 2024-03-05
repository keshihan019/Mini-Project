import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    title: {
      fontSize: 24,
      fontWeight: 'bold',
      textAlign: 'left',
      marginVertical: 20,
      marginLeft: 10,
      color:'#000'
    },
    container: {
      flexDirection: 'row', // to place the "See More" button next to the FlatList
      padding: 10,
      marginLeft: 1,
      
    },
    jobCard: {
      backgroundColor: '#123',
      borderRadius: 8,
      padding: 16,
      marginRight: 16,
      minWidth: 300,
      shadowColor: 'black',
      shadowOffset: { width: 0, height: 4 },
      shadowOpacity: 0.1,
      shadowRadius: 4,
      elevation: 3,
      color:'#000'
    },
    titleContainer: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      marginHorizontal: 10,
      marginVertical: 10,
      color:'#000'
    },
    jobTitle: {
      fontSize: 18,
      fontWeight: 'bold',
      color:'#fff',
      paddingBottom:25
    },
    seeMoreButton: {
      backgroundColor: '#fff', // Add your preferred background color
      paddingVertical: 10,
      paddingHorizontal: 20,
      borderRadius: 8,
      marginLeft: 10,
      alignSelf: 'center',
      borderColor: '#019F99',
      borderWidth:2
    },
    seeMoreButtonText: {
      color: '#019F99', // Add your preferred text color
      fontWeight: 'bold',
      
    },


    ///SeeAll Styles
    SeeAllcontainer: {
      flex: 1,
      backgroundColor: 'white',
      justifyContent: 'center',
      alignItems: 'center',
    },
    SeeAlllistContainer: {
      paddingHorizontal: 20,
    },
    SeeAllcard: {
      backgroundColor: 'white',
      borderRadius: 10,
      padding: 20,
      marginVertical: 10,
      shadowColor: '#000',
      width: 500,
      shadowOffset: {
        width: 0,
        height: 2,
      },
      shadowOpacity: 0.25,
      shadowRadius: 3.84,
      elevation: 5,
      maxWidth: '100%',
      position: 'relative',
    },
    SeeAllimage: {
      width: 80,
      height: 80,
      position: 'absolute',
      top: 20,
      right: 10,
      borderRadius: 20,
    },
    SeeAlltext: {
      color: 'black',
      marginBottom: 5,
    },
    SeeAllapplyButton: {
      backgroundColor: '#019F99',
      borderRadius: 10,
      paddingVertical: 8,
      paddingHorizontal: 15,
      marginTop: 10,
      alignSelf: 'flex-end',
    },
    SeeAllapplyButtonText: {
      color: 'white',
      fontWeight: 'bold',
    },
    logoImage: {
      width: 60,
      height: 60,
      position: 'absolute',
      top: 10,
      right: 10,
      borderRadius: 20,
    },
    
  });

  export default styles;