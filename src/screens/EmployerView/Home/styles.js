import { StyleSheet } from 'react-native';

export default StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      position: 'relative',
      padding: 10,
    },
    gridContainer: {
      flexDirection: 'row',
      flexWrap: 'wrap',
      justifyContent: 'space-between',
    },
    card: {
      width: '48%', // Adjust according to your preference
      height: 200, // Adjust according to your preference
      backgroundColor: '#fff',
      borderRadius: 10,
      padding: 10,
      justifyContent: 'center',
      alignItems: 'center',
      elevation: 3,
      marginBottom: 20,
    },
    cardTitle: {
      fontSize: 18,
      fontWeight: 'bold',
      marginBottom: 5,
      color: '#000',
      textAlign: 'center',
    },
    floatingButton: {
      width: 60,
      height: 60,
      borderRadius: 30,
      backgroundColor: '#3498db',
      position: 'absolute',
      bottom: 80,
      right: 30,
      alignItems: 'center',
      justifyContent: 'center',
      elevation: 3,
    },
    plusIcon: {
      width: 30,
      height: 30,
      tintColor: '#fff',
    },
    innerText: {
      color: 'black',
    },
    // Custom styles for each card
    totalCard: {
      borderColor: '#000', 
      borderWidth:2// Border color becomes background color
    },
    acceptedCard: {
      borderColor: 'green',
      borderWidth:2 // Border color becomes background color
    },
    rejectedCard: {
      borderColor: 'red',
      borderWidth:2 // Border color becomes background color
    },
    createdCard: {
      borderColor: 'blue',
      borderWidth:2 // Border color becomes background color
    },
  });