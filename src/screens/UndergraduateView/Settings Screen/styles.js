import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  
  SaveButton: {
    position: 'absolute',
    bottom: 20,  
    width: '80%',
    alignItems: 'center',
    backgroundColor: '#019F99',
    justifyContent: 'center',
    borderRadius: 20,
    paddingVertical: 10,
  },
  SaveButtonText: {
    fontSize: 18,
    color: 'white',
  },
  btnContainer:{
    alignItems: 'center',
    marginTop:100
  }
  ,
  
    container: {
      padding: 16,
    },
    settingItem: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      marginBottom: 16,
    },
    settingInfo: {
      flex: 1,
      marginRight: 16,
    },
    settingName: {
      fontSize: 16,
      fontWeight: 'bold',
      marginBottom: 4,
      color:'#000'
    },
    settingDescription: {
      fontSize: 14,
      color: '#777',
    },

    ///Notification Settings

    Notifcontainer: {
      padding: 16,
    },
    NotifsettingItem: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      marginBottom: 16,
    },
    NotifsettingInfo: {
      flex: 1,
      marginRight: 16,
    },
    NotifsettingName: {
      color:'#000',
      fontSize: 16,
      fontWeight: 'bold',
      marginBottom: 4,
    },
    NotifsettingDescription: {
      fontSize: 14,
      color: '#777',
    },
    ///Privacy Settings

    Privacycontainer: {
      padding: 16,
    },
    PrivacysettingItem: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      marginBottom: 16,
    },
    PrivacysettingInfo: {
      flex: 1,
      marginRight: 16,
    },
    PrivacysettingName: {
      fontSize: 16,
      fontWeight: 'bold',
      marginBottom: 4,
      color:'#000'
    },
    PrivacysettingDescription: {
      fontSize: 14,
      color: '#777',
    },
    ///FAQ
    FAQcontainer: {
      padding: 16,
    },
    faqContainer: {
      marginBottom: 20,
    },
    FAQquestion: {
      fontSize: 18,
      fontWeight: 'bold',
      marginBottom: 8,
      color:'#000'
    },
    FAQanswer: {
      fontSize: 16,
      color: 'gray'
    },

    ///Terms and Conditions
    TandCcontainer: {
      padding: 16,
    },
    TandCtitle: {
      fontSize: 20,
      fontWeight: 'bold',
      marginBottom: 16,
      color:'#000'
    },
    TandCsectionTitle: {
      fontSize: 18,
      fontWeight: 'bold',
      marginVertical: 8,
      color:'#000'
    },
    TandCparagraph: {
      fontSize: 16,
      marginBottom: 12,
      color:'#000'
    },
    /// Privacy Policy

    PrivPolicycontainer: {
      padding: 16,
    },
    PrivPolicytitle: {
      fontSize: 20,
      fontWeight: 'bold',
      marginBottom: 16,
      color:'#000'
    },
    PrivPolicysectionTitle: {
      fontSize: 18,
      fontWeight: 'bold',
      marginVertical: 8,
      color:'#000'
    },
    PrivPolicyparagraph: {
      fontSize: 16,
      marginBottom: 12,
      color:'#000'
    },
    ///SW VersionStyles
    SWversioncontainer: {
      padding: 16,
    },
    SWversiontitle: {
      fontSize: 20,
      fontWeight: 'bold',
      marginBottom: 16,
      color:'#000'
    },
    SWversionversionText: {
      fontSize: 16,
      color:'#000'
    },
    ///DevInfoStyles
    DevInfocontainer: {
      padding: 16,
    },
    DevInfotitle: {
      fontSize: 20,
      fontWeight: 'bold',
      marginBottom: 16,
      color:'#000'
    },
    DevInfoinfoText: {
      fontSize: 16,
      marginBottom: 8,
      color:'#000'
    },
  });

export default styles;
