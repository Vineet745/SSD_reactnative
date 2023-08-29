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
  modalContainer: {
    height: 60,
    width: 60,
    justifyContent: 'center',
    position: 'absolute',
    top: 340,
    left: 150,
    alignItems: 'center',
    borderRadius: 20,
  },
});
