import {StyleSheet} from "react-native"
import { moderateScale, verticalScale } from "../../../utils/Dimension"

export default categoryStyle = StyleSheet.create({
    categoryMain:{
        padding:moderateScale(15)

    },
    categoryMainTop:{
        flexDirection:"row",
        alignItems:"center",
        justifyContent:"space-between",

    },
    categoryList:{
        marginTop:verticalScale(10),
        flexDirection:"row",
        flexWrap:"wrap",
        alignItems:"center",
    }
})