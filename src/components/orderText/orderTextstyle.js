import {StyleSheet} from 'react-native';
import {horizontalScale, verticalScale} from '../../utils/Dimension';
import {fonts} from '../../utils/Theme';
export default orderTextstyle = StyleSheet.create({
  childView: {
    paddingVertical: verticalScale(10),
    paddingHorizontal: horizontalScale(10),
    marginBottom: verticalScale(10),
  },
  childHeadings: {
    fontFamily: fonts.SemiBold,
    color: '#5e7c91',
    marginBottom: verticalScale(5),
  },
  childText: {
    color: 'black',
    fontFamily: fonts.SemiBold,
    letterSpacing: horizontalScale(1),
    marginTop: verticalScale(3),
  },
});
