import { StyleSheet } from 'react-native';

export default StyleSheet.create({
    container: {
      flex: 1,
      position: 'relative',
      padding: 10,
    },
    heading:{
      color:'#000',
      fontSize:40,
      textAlign:'center',
      margin:20
    },
    gridContainer: {
      flexDirection: 'row',
      flexWrap: 'wrap',
      justifyContent: 'space-between',
      marginHorizontal:10
    },
    background: {
      flex: 1,
      resizeMode: 'cover',
    },
    overlay: {
      flex: 1,
      backgroundColor: 'rgba(255,255,255,0.9)',
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
      shadowColor: '#000',
      shadowOffset: { width: 0, height: 2 },
      shadowOpacity: 0.25,
      shadowRadius: 3.84, 
    },
    acceptedCard: {
      shadowColor: '#000',
      shadowOffset: { width: 0, height: 2 },
      shadowOpacity: 0.25,
      shadowRadius: 3.84, 
      
    },
    rejectedCard: {
      shadowColor: '#000',
      shadowOffset: { width: 0, height: 2 },
      shadowOpacity: 0.25,
      shadowRadius: 3.84, 
    },
    createdCard: {
      shadowColor: '#000',
      shadowOffset: { width: 0, height: 2 },
      shadowOpacity: 0.25,
      shadowRadius: 3.84, 
       
    },

  });