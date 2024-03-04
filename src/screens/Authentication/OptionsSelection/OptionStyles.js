import { StyleSheet } from "react-native";

export default StyleSheet.create({

    container: {
      flex: 1,
      alignItems: 'center'
      },
      heading: {
        fontSize: 36,
        fontWeight: 'bold',
        marginBottom: 20,
        marginTop: 50,
        textAlign: 'left',
        color: '#000'
      },
      RoleContainer: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'stretch',
        marginTop: 10,
        marginBottom: 10,
        marginHorizontal: 10,
      },
      OptionContainer:{
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'stretch',
        marginTop: 10,
        marginBottom: 10,
        marginHorizontal: 10,
        
        
      },
      optionBtn: {
        flex: 1, // This ensures equal distribution of space
        paddingHorizontal: 15,
        margin:2,
        height: 60,
        borderRadius: 20,
        backgroundColor: '#fff',
        borderWidth: 1.5,
        borderColor: '#019F99',
        alignItems: 'center',
        justifyContent: 'center',
      },
      optionText: {
        fontSize: 16,
        color: '#019F99',
      },
      footer:{
        fontSize: 30,
        fontWeight: 'bold',
        marginBottom: 10,
        marginTop: 10,
        paddingRight:20,
        textAlign: 'right',
      },
      nextbtn: {
        width: 160,
        height: 60,
        backgroundColor: '#000',
        alignSelf: 'flex-end', // or marginLeft: 'auto'
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius:15,
        flexDirection:'row'
      },

      logo: {
        flex: 1,
        height: 250,
        width: 250,
        alignSelf: "center",
        margin: 30
      },

})