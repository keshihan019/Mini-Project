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
      marginVertical:10,
      shadowColor: '#000',
      shadowOffset: { width: 0, height: 2 },
      shadowOpacity: 0.25,
      shadowRadius: 3.84,
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
        backgroundColor: '#fff',
        borderRadius: 15,
        shadowColor: '#000',
        shadowOffset: {
          width: 0,
          height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5,
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
        backgroundColor: '#fff',
        padding: 10,
        color:'#019F99',
        borderRadius: 5,
        alignSelf: 'center',
        shadowColor: '#019F99',
        shadowOffset: {
          width: 0,
          height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5,
        marginLeft: 10,
      },
      deleteButton: {
        color: '#f00',
        marginLeft: 10,
        alignSelf: 'center',
        backgroundColor:'#fff',
        padding: 10,
        borderRadius:15,
        margin:5,
        shadowColor: '#f00',
        shadowOffset: {
          width: 0,
          height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5,
        marginLeft: 10,
      },
      buttonContainer: {
        flexDirection: 'row', // Align buttons horizontally
        alignItems: 'center', // Center items vertically
        justifyContent: 'center', // Center align horizontally
      },
      addButton: {
        marginTop: 10,
        backgroundColor: '#019F99',
        padding: 10,
        color:'#ff9',
        borderRadius: 5,
        alignItems: 'center',
      },
      editQualificationsButton: {
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 30,
        backgroundColor: '#019F99',
        width: 100,
        paddingVertical: 10,
        paddingRight:10,
        borderRadius: 20,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5,
        alignSelf: 'center',
        marginBottom:20
      },
  });


  export default styles;