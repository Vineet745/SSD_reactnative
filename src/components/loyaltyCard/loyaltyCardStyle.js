import {StyleSheet} from 'react-native';
import {
  horizontalScale,
  moderateScale,
  verticalScale,
} from '../../utils/Dimension';
import {colors, fonts} from '../../utils/Theme';
import {RFValue} from 'react-native-responsive-fontsize';

export const loyaltyCardStyle = StyleSheet.create({
  cardmain: {
    backgroundColor: '#eef3f6',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: verticalScale(10),
    paddingHorizontal: horizontalScale(12),
    paddingVertical: verticalScale(10),
    borderRadius: moderateScale(8),
  },
  cardLeft: {
    width: horizontalScale(160),
  },
  cardTopText: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  headingText: {
    fontFamily: fonts.SemiBold,
    color: '#9db0bd',
    fontSize: RFValue(14, 667),
  },
  Text: {
    fontFamily: fonts.SemiBold,
  },
  OrderNumber: {
    fontFamily: fonts.SemiBold,
    color: colors.black,
    borderBottomWidth: 1,
  },
  dateView: {
    fontFamily: fonts.Medium,
    color: colors.black,
    marginTop: verticalScale(5),
  },
  points: {
    fontFamily: fonts.SemiBold,
  },
});
