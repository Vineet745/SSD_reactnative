import { StyleSheet } from "react-native";
import { horizontalScale, moderateScale, verticalScale } from "../../../utils/Dimension";
import { fonts } from "../../../utils/Theme";

export default confirmAddressStyle = StyleSheet.create({
    viewOne:{
        flexDirection:"row",
        alignItems:"center",
        justifyContent:"space-between",
    },
    textInputbox:{
        backgroundColor:"#f1f1f1",
        borderRadius:moderateScale(5),
        fontFamily:fonts.Medium,
        color:"#b4b4b4",
        paddingHorizontal:horizontalScale(10),
        marginBottom:verticalScale(15)
    }
})