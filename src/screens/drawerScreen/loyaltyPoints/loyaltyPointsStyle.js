import {StyleSheet} from 'react-native';
import {horizontalScale, verticalScale} from '../../../utils/Dimension';
import {colors, fonts} from '../../../utils/Theme';

export default loyaltyPointsStyle = StyleSheet.create({
  loyaltyMainView: {
    flex: 1,
    backgroundColor: 'white',
  },
  loyaltyTopView: {
    backgroundColor: 'white',
    marginVertical: verticalScale(10),
    paddingHorizontal: horizontalScale(10),
  },
  topText: {
    fontFamily: fonts.SemiBold,
    marginVertical: verticalScale(10),
  },

  ScrollView: {
    paddingBottom: verticalScale(60),
    paddingTop: verticalScale(10),
  },

  bottomSheetView: {
    backgroundColor: 'white',
    borderTopWidth: 0.6,
    paddingVertical: verticalScale(10),
    paddingHorizontal: horizontalScale(20),
  },
  bottomSheetText: {
    fontFamily: fonts.Medium,
    color: colors.black,
    marginBottom: verticalScale(5),
  },
});
