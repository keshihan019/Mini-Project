import { StyleSheet } from "react-native";


const styles = StyleSheet.create({
    container: {
      flex: 1,
      margin: 20
    },
    userInfoSection: {
      paddingHorizontal: 30,
      marginBottom: 25
    },
    title: {
      fontSize: 24,
      fontWeight: 'bold',
      marginTop: 14
    },
    caption: {
      fontSize: 14,
      lineHeight: 14,
      fontWeight: '500',
    },
    row: {
      flexDirection: 'row',
      marginBottom: 10
    },
    infoText: {
      color: "#888888",
      marginLeft: 20,
    },
    icon: {
      width: 25,
      height: 25,
      tintColor: '#019F99',
      marginLeft: 20,
    },
    editProfileButton: {
      flexDirection: 'row',
      alignItems: 'center',
      marginTop: 30,
      backgroundColor: '#019F99',
      width: 160,
      paddingVertical: 10,
      borderRadius: 20,
      shadowColor: '#000',
      shadowOffset: { width: 0, height: 2 },
      shadowOpacity: 0.25,
      shadowRadius: 3.84,
      elevation: 5 // for Android
    },
    editProfileIcon: {
      width: 25,
      height: 25,
      tintColor: 'white',
      marginLeft: 20,
    },
    editProfileText: {
      marginLeft: 10,
      color: 'white'
    },
    menuWrapper: {
      marginTop: 10
    },
    skillBox: {
      backgroundColor: 'white',
      borderTopLeftRadius: 15,
      borderTopRightRadius: 15,
      borderBottomLeftRadius: 10,
      borderBottomRightRadius: 10,
    },
    skillTitle: {
      backgroundColor: 'black',
      color: 'white',
      textAlign: 'center',
      borderTopLeftRadius: 15,
      borderTopRightRadius: 15,
      padding: 10,
    },
    skillItem: {
      marginVertical: 10,
      paddingHorizontal: 15
    },
    emptyMessage: {
      textAlign: 'center',
      paddingVertical: 10,
      color: '#888888'
    },
    scrollContainer: {
        flexGrow: 1,
      },     
    //    Edit Profile
      container: {
        flexGrow: 1,
        margin: 20,
      },
      commandButton: {
        padding: 15,
        borderRadius: 10,
        backgroundColor: '#FF6347',
        alignItems: 'center',
        marginTop: 10,
      },
      action: {
        flexDirection: 'row',
        marginVertical: 5,
        marginHorizontal: 20,
        borderBottomWidth: 1,
        borderBottomColor: '#000',
        paddingBottom: 5,
      },
      textInput: {
        flex: 1,
        marginTop: -5,
        paddingLeft: 10,
        color: '#05375a',
      },
      section: {
        marginBottom: 20,
      },
      sectionTitle: {
        marginTop:20,
        fontSize: 16,
        fontWeight: 'bold',
        marginBottom: 10,
        color:'black'
      },
      qualificationItem: {
        flexDirection: 'column',
        marginBottom: 10,
        backgroundColor:'#222',
        borderRadius:15
      },
      input: {
        flex: 1,
        borderBottomWidth: 1,
        borderBottomColor: '#ccc',
        marginHorizontal: 20,
        paddingVertical: 10,
        color:'black',
        paddingLeft:15
      },
      okButton: {
        marginTop: 10,
        backgroundColor: '#019F99',
        padding: 10,
        color:'#ff9',
        borderRadius: 5,
        alignSelf: 'center',
      },
      deleteButton: {
        color: 'white',
        marginLeft: 10,
        alignSelf: 'center',
        backgroundColor:'#f00',
        padding: 10,
        borderRadius:15,
        margin:5
      },
      addButton: {
        marginTop: 10,
        backgroundColor: '#019F99',
        padding: 10,
        color:'#ff9',
        borderRadius: 5,
        alignItems: 'center',
      },
      
  });


  export default styles;