import { StyleSheet, Dimensions } from 'react-native';

export default StyleSheet.create({
   
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
  
})