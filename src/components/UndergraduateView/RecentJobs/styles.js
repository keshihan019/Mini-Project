import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    title: {
      fontSize: 24,
      fontWeight: 'bold',
      textAlign: 'left',
      marginVertical: 20,
      marginLeft: 10,
      color:'black'
    },
    titleContainer: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      marginHorizontal: 10,
      marginVertical: 10,
      
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
    jobCard: {
      backgroundColor: 'white',
      borderRadius: 8,
      padding: 16,
      marginHorizontal:15,
      marginBottom: 16,
      shadowColor: 'black',
      shadowOffset: { width: 0, height: 4 },
      shadowOpacity: 0.1,
      shadowRadius: 4,
      elevation: 3,
      flexDirection: 'row', // Added flexDirection to create two columns
      alignItems: 'center', // Align items in the center vertically
    },
    jobDetailsColumn: {
      flex: 1, // Make this column take up the remaining space
    },
    logoColumn: {
      marginLeft: 10, // Add spacing between columns
    },
    jobTitle: {
      fontSize: 18,
      fontWeight: 'bold',
      color:'black'
    },
    showAll: {
      backgroundColor: '#000',
      color:'#fff',
      borderRadius: 10,
      padding: 16,
      justifyContent: 'center',
      alignItems: 'center',
      marginHorizontal:15
    },
    jobtext:{
      fontSize: 14,
      color:'black'
    },
    logoImage:{
        height:80,
        width:80,
        borderRadius:10
    }
  });

export default styles;
