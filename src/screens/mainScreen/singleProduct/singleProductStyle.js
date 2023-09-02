import {StyleSheet} from 'react-native';
import {
  horizontalScale,
  moderateScale,
  verticalScale,
} from '../../../utils/Dimension';
import {colors, fonts} from '../../../utils/Theme';
import {RFValue} from 'react-native-responsive-fontsize';

export default singleProductStyle = StyleSheet.create({
  quantityWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    width: horizontalScale(100),
    justifyContent: 'space-between',
  },
  priceDescription: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingVertical: verticalScale(8),
  },
  price_offer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  price_offer_textone: {
    fontFamily: fonts.SemiBold,
    color: colors.black,
  },
  price_offer_Discount: {
    color: 'orange',
    fontFamily: fonts.SemiBold,
    marginLeft: verticalScale(10),
  },
  productDescription: {
    borderTopWidth: 0.3,
    marginVertical: verticalScale(13),
    paddingTop: verticalScale(10),
  },
  productDescriptionHeading: {
    fontFamily: fonts.SemiBold,
    fontSize: RFValue(13, 667),
    color: '#5e7c91',
  },
  productDetail: {
    fontFamily: fonts.SemiBold,
    color: colors.black,
    fontSize: RFValue(12, 667),
    marginTop: verticalScale(10),
  },
  Addbutton: {
    backgroundColor: 'black',
    paddingVertical: verticalScale(10),
    alignItems: 'center',
    justifyContent: 'Center',
    borderRadius: moderateScale(20),
  },
});
