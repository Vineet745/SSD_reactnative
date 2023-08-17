import {StyleSheet} from "react-native"
import { horizontalScale, moderateScale, verticalScale } from "../../../utils/Dimension"
import { colors, fonts } from "../../../utils/Theme"

export default cartStyle = StyleSheet.create({
    cartOffer:{
        backgroundColor:"#ffeaa4",
        paddingVertical:verticalScale(10),
        paddingHorizontal:horizontalScale(20),
        
    },
    cartOfferText:{
        fontFamily:fonts.SemiBold,
        color:colors.black
    },
    
    cartHolder:{
        flex:1,
        paddingHorizontal:horizontalScale(15),
    },
    cartTopText:{
        flexDirection:"row",
        alignItems:"center",
        justifyContent:"space-between",
        paddingVertical:verticalScale(12),
        paddingHorizontal:horizontalScale(5)
   },
   BottomMainView:{
    paddingVertical:verticalScale(5),
    paddingHorizontal:horizontalScale(10)
   },
   BottomTextView:{
    paddingHorizontal:horizontalScale(15),
    paddingVertical:verticalScale(15),
    flexDirection:"row",
    alignItems:"center",
    justifyContent:"space-between"
   },
   ButtonStyle:{
    backgroundColor:colors.violetcolor,
    alignItems:"center",
    justifyContent:"space-between",
    flexDirection:"row",
    padding:verticalScale(10),
    borderRadius:moderateScale(20)
   },
   ButtonTextStyle:{
    color:"white",
    fontFamily:fonts.SemiBold
   }
})