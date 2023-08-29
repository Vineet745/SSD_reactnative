import {StyleSheet} from 'react-native';
import {
  horizontalScale,
  moderateScale,
  verticalScale,
} from '../../../utils/Dimension';
import {colors, fonts} from '../../../utils/Theme';

export const profileStyle = StyleSheet.create({
  imageContainerMain: {
    paddingVertical: verticalScale(20),
    alignItems: 'center',
    justifyContent: 'center',
  },
  roundedImageContainer: {
    width: 120,
    height: 120,
    borderRadius: 100,
    overflow: 'hidden',
  },
  bottomView: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: moderateScale(14),
    borderRadius: moderateScale(5),
    marginVertical: verticalScale(5),
    backgroundColor: '#eef3f6',
  },
  heading: {
    fontFamily: fonts.SemiBold,
    color: '#5e7c91',
  },
  profileText: {
    fontFamily: fonts.SemiBold,
    color: colors.black,
  },
});
