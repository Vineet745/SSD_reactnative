import { StyleSheet } from "react-native";
import { horizontalScale, verticalScale } from "../../../utils/Dimension";
import { fonts } from "../../../utils/Theme";

export default productMainstyle = StyleSheet.create({
    
    productsMain: {
        paddingHorizontal: horizontalScale(15),
      },
      productsTopView: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
      },
      productsMainText: {
        fontFamily: fonts.Medium,
        color: '#5e7c91',
      },
      productCardHolder: {
        marginVertical: verticalScale(10),
      },

})