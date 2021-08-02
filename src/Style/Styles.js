import { StyleSheet } from "react-native";

export const styles= StyleSheet.create({
    viewHeader:{
        height: 80,
        backgroundColor: 'blue',
        justifyContent:'center',
        alignItems:'center',
        paddingTop: 30,
    },
    textHeader:{
        fontSize: 25,
        fontWeight: 'bold',
        fontFamily: 'monospace'
    },
    textColorHeader:{
        color:'white',
    },
    navColor:{
        backgroundColor:'yellow',
    },
    viewPrincipal:{
        justifyContent: 'center',
        alignItems: 'center',
        padding: 30,
        marginTop: 5,
    },
    input:{
        textAlign:'center',
        backgroundColor: 'lightgray',
        borderRadius: 5,
        padding:5,
        margin: 10,
        fontSize: 18,
        width:200,
    },
    textMain:{
        fontSize: 20,
        textAlign:'center',
        margin: 10,
    },
    textTips:{
        fontSize:15,
        margin:15,
    },
    titleTips:{
        fontSize:22,
        fontWeight:'bold',
        textAlign:'center',
        marginTop: 10,
    },
    subTitleTips:{
        fontSize:22,
        fontWeight:'bold',
        marginTop: 10,
        marginLeft:10,
    },   
    buttonDepo:{
        backgroundColor:'black',
        width: 100,
        padding: 5,
        justifyContent:'center',
        alignItems:'center',
        borderRadius:5,
    },
    buttonText:{
        color:'white',
    },
    viewModal:{
        backgroundColor:'grey',
        width:500,
        height:500,
        zIndex:1,
    },
    modalCenter:{
        justifyContent:'center',
        alignItems:'center',
    },
    show:{
        justifyContent:'center',
        alignItems:'center',
        margin:20,
        borderRadius:5,
        borderWidth:1,
        padding:10,
        borderColor:'orange'
    },
    hide:{
        display:'none'
    },
    viewIcons:{
        flexDirection:'row',
        padding:5,
        justifyContent:'space-around',
        alignItems:'center',
        
    },
    iconsHome:{
        marginHorizontal:15,
        marginVertical:5,
        justifyContent:'center',
        alignItems:'center',
        width:100,
    },
    textIconsHome:{
        fontSize:15,
        fontWeight:'600',
    },
    
  })