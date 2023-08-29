import {StyleSheet} from 'react-native';
import {colors, fonts} from '../../../utils/Theme';
import {
  horizontalScale,
  moderateScale,
  verticalScale,
} from '../../../utils/Dimension';
import {RFValue} from 'react-native-responsive-fontsize';

export default productCardStyle = StyleSheet.create({
  productCardMain: {
    backgroundColor: colors.greycolor,
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
    paddingVertical: verticalScale(5),
    paddingHorizontal: horizontalScale(8),
  },
  titleText: {
    fontFamily: fonts.SemiBold,
    color: colors.black,
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
  },
  MrpViewFirsttextContainer: {
    position: 'relative',
  },
  MrpText: {
    fontFamily: fonts.Medium,
    color: colors.black,
    textDecorationLine:"line-through"
  },
  strikeLine: {
    borderTopWidth: 2,
    borderColor: 'orange',
    position: 'absolute',
    bottom: verticalScale(7),
    width: horizontalScale(85),
  },
  offerText: {
    fontFamily: fonts.SemiBold,
    color: '#faa045',
    marginLeft: horizontalScale(15),
  },
  ourPrice: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: verticalScale(5),
    justifyContent: 'space-between',
  },
  ourPriceText: {
    fontFamily: fonts.Medium,
    color: colors.black,
    fontSize: RFValue(12, 667),
  },
  quantityWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    width: horizontalScale(85),
    justifyContent: 'space-between',
    marginLeft: horizontalScale(20),
  },
  touchableButton: {
    backgroundColor: 'blue',
    paddingVertical: verticalScale(6),
    paddingHorizontal: horizontalScale(10),
    borderRadius: moderateScale(5),
  },
});
