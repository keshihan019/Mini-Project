import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
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
  });

export default styles;
