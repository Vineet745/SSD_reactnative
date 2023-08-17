import {StyleSheet} from 'react-native';
import {colors, fonts} from '../../../utils/Theme';
import {horizontalScale, verticalScale} from '../../../utils/Dimension';

export default homeStyle = StyleSheet.create({
  homemain: {
    backgroundColor: colors.white,
    flex: 1,
  },
  locationHolder: {
    paddingHorizontal: horizontalScale(10),
    paddingVertical: verticalScale(10),
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  locationHolderLeft: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  locationHolderRight: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent:"space-between",
    width:horizontalScale(100),
  },
  swipperView: {
    height: verticalScale(180),
  },
  
});
