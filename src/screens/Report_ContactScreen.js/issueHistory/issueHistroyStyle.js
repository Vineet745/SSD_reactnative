import { StyleSheet } from "react-native";
import { horizontalScale, verticalScale } from "../../../utils/Dimension";
import { colors, fonts } from "../../../utils/Theme";
export default issuehistoryStyle = StyleSheet.create({
    issueHistoryCard:{
        padding:verticalScale(10),
        paddingHorizontal:horizontalScale(15),
        backgroundColor:"#eef3f6"
    },
    issueHistoryCardTopView:{
        flexDirection:"row",
        alignItems:"center",
        justifyContent:"space-between"
    }   ,
    issueDetails:{
        flexDirection:"row",
        alignItems:"center",
        justifyContent:"center"
    },
    numberHeading:{
        fontFamily:fonts.SemiBold,
        color:"#7e96a7"
    },
    number:{
        fontFamily:fonts.SemiBold,
        color:"black",
        letterSpacing:0.5
    },
    statusText:{
        color:colors.black,
        fontFamily:fonts.SemiBold
    },
    dateText:{
        marginTop:verticalScale(5),
        color:colors.black,
        fontFamily:fonts.SemiBold
    },

    issueHistoryCardBottomView:{
        flexDirection:"row",
        alignItems:"center",
        justifyContent:"space-between"
    },
    buttonView:{
        padding:10,
        borderRadius:50,
        backgroundColor:"white"

    },
    

})