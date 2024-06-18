import React from "react";
import {Text, View, StyleSheet, TouchableWithoutFeedback} from "react-native"
import moment from "moment"
import {icon} from "react-native-vector-icons/FontAwesome6"
import { Icon } from "react-native-vector-icons/Icon";

export default props =>{
    return(
        <View style={styles.container}>
        <TouchableWithoutFeedback>
           <View style={styles.checkContainer}>
            <View style={styles.done}>
            <Icon name="check" size={20}></Icon>
            </View>
           </View>

            
        </TouchableWithoutFeedback>
            <View>
                <Text>style={styles.desc}{props.descripition}</Text>
                
                <Text>style={styles.date}{props.estimate_at + ""}</Text>
                
                <Text>style={styles.date}{props.done_at + ""}</Text>
            </View>
        </View>
    )
}
const styles = StyleSheet.create({
    container:{
        flexDirection: "row",
        borderColor: '#AAA',
        borderBottomWidht: 1,
        alignItems: 'center',
        paddingVertical: 10
},
descripition:{
fontFamily: "arial",
fontSize: 20,
color: "333333"
},
date:{
    fontFamily:"Arial",
    color: "#555555"
},
checkContainer:{
    width:"20%",
    alignItems:"center",
    justifyContent:"center",

},
done:{
    height: 25,
    width: 25,
    borderRadius:13,
    borderWidth: 1,
    borderColor: "#4D7031",
    alignItems:"center",
    justifyContent:"center",
},
pending:{
    height: 25,
    width: 25,
    borderRadius:13,
    borderWidth: 1,
    borderColor:"#555555",
}


})