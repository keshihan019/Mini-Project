import { StyleSheet } from "react-native";

export default StyleSheet.create({

        container: {
          width: Dimensions.get('window').width, // for full screen
          height: Dimensions.get('window').height, // for full screen
          opacity: 1.0,
          // alignItems:'center',
          // justifyContent: 'flex-start',
          // backgroundColor: "#fff",
          // textAlign:'center',
          // alignContent:'center',
          // height: "100%",
        },
        fixed: {
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
        },
        headerText: {
          fontSize: 40,
          backgroundColor: '#fff',
          fontFamily: 'Inter-Medium',
          paddingHorizontal: 50,
          paddingVertical: 30,
        },
        headerCard: {},
    

})