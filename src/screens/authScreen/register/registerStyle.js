import {StyleSheet} from 'react-native';
import {
  horizontalScale,
  moderateScale,
  verticalScale,
} from '../../../utils/Dimension';
import {colors, fonts} from '../../../utils/Theme';
import {RFPercentage, RFValue} from 'react-native-responsive-fontsize';

export default registerStyle = StyleSheet.create({
  registerMain: {
    flex: 1,
    paddingBottom: verticalScale(20),
    backgroundColor: 'white',
  },
  modalContainer: {
    height: 60,
    width: 60,
    justifyContent: 'center',
    position: 'absolute',
    top: 340,
    left: 150,
    alignItems: 'center',
    backgroundColor: 'white',
    borderRadius: 20,
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
  termConditionTextContainer: {
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'center',
  },
  termConditionText: {
    fontFamily: fonts.SemiBold,
    color: colors.black,
    fontSize: RFValue(12, 667),
  },
  clickableText: {
    fontFamily: fonts.SemiBold,
    color: colors.skyblue,
    fontSize: RFValue(12, 667),
    textDecorationLine: 'underline',
    textDecorationStyle: 'solid',
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
