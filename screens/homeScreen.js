import {
  StyleSheet,
  Touchable} from 'react-native'

  export const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center'
    },
    imageTop: {
      marginTop: 0,
      marginLeft: 240,
      transform: [
        {
          rotate: '90deg'
        }
      ]
    },
    divider: {
      //backgroundColor: "#75C2E5",
      marginTop: 50,
      // height: 1,
      flex: 1,
      alignSelf: 'center'
    },
    title: {
      fontSize: 38,
      fontWeight: "900",
      color: "#002333",
      // justifyContent: 'center',
      // alignItems: 'center',
      // paddingHorizontal: 20
      marginTop: 0,
      marginLeft:50
    },
    idea:{
      marginTop: 0,
      marginRight: 20,
      marginLeft: 20
    },
    imageBottom:{
      marginTop: 0,
      marginRight: 240,
      transform: [
        {
          rotate: '260deg'
        }
      ]
    },
    aboutTitle:{
          marginTop: 18,
          textTransform: "uppercase",
          textAlign: 'center',
          fontSize: 24,
          fontWeight: 'bold'
    },
    aboutText:{
        marginTop: 8,
        textTransform: "uppercase",
        textAlign: 'center',
        fontSize: 14,
        fontWeight: '600'
    }
  })