import {StyleSheet} from 'react-native';
import { horizontalScale, verticalScale } from '../../../utils/Dimension';

export default categoriesScreenStyle = StyleSheet.create({
  categoriesScreenMain: {
    flexDirection: 'row',
    alignItems: 'center',
    flexWrap: 'wrap',
    paddingHorizontal:horizontalScale(15),
    paddingVertical:verticalScale(10)
  },
});
