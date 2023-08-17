import {StyleSheet} from 'react-native';
import {
  horizontalScale,
  moderateScale,
  verticalScale,
} from '../../../utils/Dimension';
import { RFValue } from 'react-native-responsive-fontsize';
import { fonts } from '../../../utils/Theme';

export default categoryCardStyle = StyleSheet.create({
  cardmain: {
    paddingVertical: verticalScale(10),
    paddingHorizontal: horizontalScale(20),
    borderRadius: moderateScale(10),
    marginVertical: verticalScale(5),
    marginHorizontal: horizontalScale(3),
  },
  cardtext: {
    fontFamily: fonts.Medium,
    color: 'white',
    fontSize: RFValue(13, 667),
  },
});
