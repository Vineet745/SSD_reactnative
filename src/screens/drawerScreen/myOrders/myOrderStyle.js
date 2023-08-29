import {StyleSheet} from 'react-native';
import {
  horizontalScale,
  moderateScale,
  verticalScale,
} from '../../../utils/Dimension';
import {colors, fonts} from '../../../utils/Theme';
import {RFValue} from 'react-native-responsive-fontsize';
export default myOrderStyle = StyleSheet.create({
  wholePage: {
    backgroundColor: 'white',
    paddingVertical: verticalScale(15),
    paddingHorizontal: horizontalScale(22),
    flex: 1,
  },
  MainBox: {
    backgroundColor: '#eef3f6',
    paddingVertical: verticalScale(10),
    paddingHorizontal: horizontalScale(15),
    flexDirection: 'row',
    alignItems: 'flex-start',
    justifyContent: 'space-between',
    borderRadius: moderateScale(5),
    elevation: 4,
  },
  topTextContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  orderText: {
    fontFamily: fonts.Medium,
    color: '#6d889b',
    fontSize: RFValue(13, 667),
  },
  orderId: {
    color: colors.black,
    fontFamily: fonts.SemiBold,
  },
  bottomTextContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: verticalScale(10),
  },
  statusText: {
    fontFamily: fonts.Bold,
    color: '#e2a345',
  },
});
