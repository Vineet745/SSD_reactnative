import { StyleSheet } from "react-native";
import { horizontalScale, verticalScale } from "../../../utils/Dimension";
import { colors, fonts } from "../../../utils/Theme";

export const ChangeAddressStyle = StyleSheet.create({
    changeAddressMain:{
        backgroundColor:"white",
        flex:1,
        paddingVertical:verticalScale(10),
        paddingHorizontal:horizontalScale(20)

    },
    AddressBox:{
        borderBottomWidth:0.3,
        paddingVertical:verticalScale(15),
        flexDirection:"row",
        alignItems:"center",
        justifyContent:"space-between"

    },
    addressHolder:{
        width:horizontalScale(240)
    },
    addressText:{
        fontFamily:fonts.SemiBold,
        color:colors.black
    },
    buttonStyle:{backgroundColor:"#eef3f6",width:(40),height:(40),borderRadius:50,alignItems:"center",justifyContent:"center"}
})