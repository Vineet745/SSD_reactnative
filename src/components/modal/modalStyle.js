import {StyleSheet} from 'react-native';
import {moderateScale, verticalScale} from '../../utils/Dimension';
import {colors, fonts} from '../../utils/Theme';
export const modalStyle = StyleSheet.create({
  modalmain: {
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'white',
    borderRadius: moderateScale(10),
    position: 'absolute',
    left: 20,
    padding: moderateScale(25),
    elevation: 5,
  },
  modalTopTextContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingBottom: verticalScale(10),
  },
  modalTextSubmit: {
    fontFamily: fonts.Medium,
    color: colors.black,
    marginBottom: verticalScale(5),
  },
  modalText: {
    fontFamily: fonts.Medium,
    color: colors.black,
    marginBottom: verticalScale(5),
  },
  modalbottomtext: {
    flexDirection: 'row',
    alignContent: 'center',
    justifyContent: 'center',
  },
});
