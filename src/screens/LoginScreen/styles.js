import { StyleSheet } from 'react-native';

export default StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center'
    },
    heading:{
        color:'#019F99',
        borderRadius: 5,
        marginTop: 20,
        marginBottom: 0,
        marginLeft: 30,
        marginRight: 30,
        paddingLeft: 16,
        fontSize:28
       
    },
    title: {
     
    },
    logo: {
        flex: 1,
        height: 250,
        width:350,
        alignSelf: "center",
        margin: 30
    },
    input: {
        height: 48,
        borderRadius: 5,
        overflow: 'hidden',
        backgroundColor: 'white',
        marginTop: 10,
        marginBottom: 10,
        marginLeft: 30,
        marginRight: 30,
        paddingLeft: 16,
        color:'#000'
    },
    button: {
        backgroundColor: '#019F99',
        marginLeft: 30,
        marginRight: 30,
        marginTop: 20,
        height: 48,
        borderRadius: 5,
        alignItems: "center",
        justifyContent: 'center'
    },
    buttonTitle: {
        color: 'white',
        fontSize: 16,
        fontWeight: "bold"
    },
    footerView: {
        flex: 1,
        alignItems: "center",
        marginTop: 20
    },
    footerText: {
        fontSize: 16,
        color: '#2e2e2d'
    },
    footerLink: {
        color: "#019F99",
        fontWeight: "bold",
        fontSize: 16
    }
})