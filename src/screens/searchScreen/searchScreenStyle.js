import {StyleSheet} from 'react-native';
import {colors} from '../../utils/Theme';
import {horizontalScale, verticalScale} from '../../utils/Dimension';

export default searchScreenStyle = StyleSheet.create({
  SearchTabMain: {
    backgroundColor: '#f1f1f1',
    paddingHorizontal: horizontalScale(10),
    paddingVertical: verticalScale(5),
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
});
