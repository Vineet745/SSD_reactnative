import {StyleSheet} from 'react-native';
import {colors, fonts} from '../../utils/Theme';
import {
  horizontalScale,
  moderateScale,
  verticalScale,
} from '../../utils/Dimension';
import {RFValue} from 'react-native-responsive-fontsize';

export default cartItemStyle = StyleSheet.create({
  productCardMain: {
    backgroundColor: '#eef3f6',
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: verticalScale(10),
    paddingHorizontal: horizontalScale(8),
    borderRadius: moderateScale(10),
    marginBottom: verticalScale(10),
  },
  imageHolder: {
    backgroundColor: colors.white,
    borderRadius: moderateScale(10),
    width: horizontalScale(100),
    alignItems: 'center',
  },
  detailHolder: {
    paddingLeft: horizontalScale(10),
    height: verticalScale(100),
    width: horizontalScale(230),
  },
  titleText: {
    fontFamily: fonts.SemiBold,
    color: colors.black,
    fontSize: RFValue(11.5, 667),
  },
  productType: {
    color: '#5e7c91',
    fontFamily: fonts.Bold,
    marginTop: verticalScale(5),
  },
  MrpView: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: verticalScale(8),
    width: horizontalScale(200),
    justifyContent: 'space-between',
  },
  MrpViewFirsttextContainer: {
    position: 'relative',
  },
  MrpText: {
    fontFamily: fonts.SemiBold,
    color: colors.black,
    textDecorationLine:"line-through",
    fontSize: RFValue(9, 667),
  },
  
  offerText: {
    fontFamily: fonts.SemiBold,
    color: '#faa045',
    fontSize: RFValue(9, 667),
  },
  ourPrice: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: verticalScale(5),
    justifyContent: 'space-between',
  },
  ourPriceText: {
    fontFamily: fonts.SemiBold,
    color: colors.black,
    fontSize: RFValue(9, 667),
  },
  bottomWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  quantityWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    width: horizontalScale(80),
    justifyContent: 'space-between',
  },
});
