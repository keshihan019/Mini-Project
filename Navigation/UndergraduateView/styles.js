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
      flexDirection: 'column', // You can keep it as column
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
      color:'#000',
      flexDirection: 'row', // Change to row to align items horizontally
      justifyContent: 'space-between', // Align items at both ends
      alignItems: 'center', // Align items vertically in the center
    },
    titleContainer: {
      flexDirection: 'column',
      justifyContent: 'space-between',
      alignItems: 'flex-start', // Align items to the left
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
      alignSelf: 'flex-end', // Align button to the end of the container
      borderColor: '#019F99',
      borderWidth:2
    },
    seeMoreButtonText: {
      color: '#019F99', // Add your preferred text color
      fontWeight: 'bold',
    },
  });
  
  export default styles;
  