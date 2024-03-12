// styles.js
import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    AboutCompanycontainer: {
    flex: 1,
    padding: 20,
  },
  AboutCompanysection: {
    marginBottom: 20,
    
  },
  AboutCompanysectionTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
    color:'black'
  },
  data:{
    color:'black'
  },
  
  
//   For Jobs
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
    backgroundColor: '#F00',
    borderRadius: 10,
    paddingVertical: 8,
    paddingHorizontal: 15,
    marginTop: 10,
    alignSelf: 'flex-end',
  },
  DeleteBtnText: {
    color: 'white',
    fontWeight: 'bold',
  },
  emptyText:{
    color:'#222',
    textAlign:'center',
    paddingHorizontal:20
  }
});

export default styles;
