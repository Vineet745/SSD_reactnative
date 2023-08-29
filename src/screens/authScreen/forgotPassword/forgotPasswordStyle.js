import {StyleSheet} from 'react-native';
import {
  horizontalScale,
  moderateScale,
  verticalScale,
} from '../../../utils/Dimension';
import {colors, fonts} from '../../../utils/Theme';
import {RFPercentage, RFValue} from 'react-native-responsive-fontsize';

export default Forgotpasswordstyle = StyleSheet.create({
  registerMain: {
    flex: 1,
    paddingBottom: verticalScale(20),
    backgroundColor: 'white',
  },
  textArea: {
    flex: 1,
    paddingHorizontal: horizontalScale(20),
    paddingBottom: verticalScale(10),
    backgroundColor: 'white',
  },
  registerTaintext: {
    fontFamily: fonts.SemiBold,
    color: colors.black,
    fontSize: RFValue(18, 667),
    fontWeight: '600',
  },
  inputHolder: {
    marginVertical: verticalScale(10),
  },
  textInput: {
    backgroundColor: colors.greycolor,
    borderRadius: moderateScale(10),
    paddingLeft: verticalScale(10),
    marginTop: verticalScale(9),
    fontFamily: fonts.Bold,
    fontSize: verticalScale(10),
  },

  forgotView: {
    alignItems: 'flex-end',
    padding: horizontalScale(10),
    paddingVertical: verticalScale(5),
  },
  forgotText: {
    fontFamily: fonts.SemiBold,
    color: colors.skyblue,
  },

  otpLogin: {
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: verticalScale(5),
  },

  alreadyCustomer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginVertical: verticalScale(10),
  },
  textOne: {
    fontFamily: fonts.SemiBold,
    color: colors.black,
  },
  textTwo: {
    color: colors.skyblue,
    fontFamily: fonts.SemiBold,
  },
});
