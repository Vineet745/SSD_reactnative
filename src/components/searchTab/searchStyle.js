import {StyleSheet} from 'react-native';
import {colors} from '../../utils/Theme';
import {horizontalScale, verticalScale} from '../../utils/Dimension';
export default searchStyle = StyleSheet.create({
  SearchTabMain: {
    backgroundColor: colors.greycolor,
    paddingHorizontal: horizontalScale(10),
    paddingVertical: verticalScale(15),
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
});
