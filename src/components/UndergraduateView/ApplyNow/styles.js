import { StyleSheet } from "react-native";

const styles = StyleSheet.create({

    ContactInfo_container: {
        flex: 1,
        justifyContent: 'flex-start', // Align items at the top
        alignItems: 'center',
        paddingHorizontal: 20,
        paddingTop: 40, // Adjust paddingTop to move content closer to the top
        backgroundColor: '#fff', // Change background color to white
      },
      ContactInfo_image: {
        width: '90%', // Increase image width
        height: 200, // Increase image height
        marginBottom: 20,
        alignSelf: 'center',
      },
      ContactInfo_headingText:{
        fontSize:40,
        color:'#019F99',
        fontWeight:'bold',
        
      },

    Experience_container: {
      flex: 1,
      justifyContent: 'flex-start', // Align items at the top
      alignItems: 'center',
      paddingHorizontal: 20,
      paddingTop: 40, // Adjust paddingTop to move content closer to the top
      backgroundColor: '#fff', // Change background color to white
    },
    Experience_image: {
      width: '90%', // Increase image width
      height: 200, // Increase image height
      marginBottom: 20,
      alignSelf: 'center',
    },
    pageIndicator: {
      marginBottom: 20,
      color: '#019F99', // Change text color to match the specified color
    },
    input: {
      height: 40,
      width: '100%',
      borderColor: '#ccc',
      borderWidth: 1,
      borderRadius: 5,
      paddingHorizontal: 10,
      marginBottom: 20,
      color: '#000', // Change text color to black
    },
    nextButton: {
      backgroundColor: '#0275d8',
      paddingVertical: 12,
      paddingHorizontal: 24,
      borderRadius: 8,
      marginTop:100
    },
    nextButtonText: {
      color: '#fff',
      fontWeight: 'bold',
      fontSize: 16,
  
    },
    headingText:{
      fontSize:40,
      color:'#019F99',
      fontWeight:'bold',
      paddingRight:45
    },


    Resume_container: {
        alignItems: 'center',
        backgroundColor: '#fff',
        height:'100%'
      },
      Resume_headingText:{
        textAlign:'left',
        marginTop:50,
        marginRight:50,
        fontSize:40,
        color:'#019F99',
        fontWeight:'bold',
        paddingRight:45
      },
      Resume_image: {
        width: '90%', // Increase image width
        height: 200, // Increase image height
        marginBottom: 20,
        alignSelf: 'center',
      },
      selectedFile: {
        marginTop: 20,
        marginBottom: 20,
      },
      submitButton: {
        backgroundColor: '#0275d8',
        paddingVertical: 12,
        paddingHorizontal: 24,
        borderRadius: 8,
        marginTop:100
      },
      submitButtonText: {
        color: '#fff',
        fontWeight: 'bold',
        fontSize: 16,
      },


      Success_container: {
        flex: 1,
        marginTop:'50',
        alignItems: 'center',
      },
      Success_image: {
        marginTop: 20,
        alignSelf: 'center',
      },
      Success_Text: {
        fontSize: 20,
        fontWeight: '300',
        marginTop: 20,
        color:'black'
      },
      SuccessImg_container:{
        marginTop:'50',
        height: 100, 
        width: 50, 
      },
      Top_image:{
        width: '50%', 
        height: 100,
        marginTop:100,
        marginBottom: 150,
        alignSelf: 'center',
      },
      succesText:{
        color: '#fff',
        fontSize:30,
        marginHorizontal:20,
        textAlign:'center',
      },
      homebtn:{
        color:'#fff',
        padding:10,
        paddingHorizontal:25,
        marginTop:50,
        borderRadius:20,
        backgroundColor:'#000',
      }
  });


  export default styles