import {StyleSheet} from 'react-native';
import {colors, fonts} from '../../utils/Theme';
import {
  horizontalScale,
  moderateScale,
  verticalScale,
} from '../../utils/Dimension';
import {RFValue} from 'react-native-responsive-fontsize';

export default orderedItemStyle = StyleSheet.create({
  productCardMain: {
    backgroundColor: '#eef3f6',
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: verticalScale(10),
    paddingHorizontal: horizontalScale(8),
    borderRadius: moderateScale(10),
    marginBottom: verticalScale(10),
  },
  imageHolder: {
    backgroundColor: colors.white,
    borderRadius: moderateScale(10),
    width: horizontalScale(100),
    alignItems: 'center',
  },
  detailHolder: {
    paddingLeft: horizontalScale(10),
    paddingVertical:verticalScale(10)
  },
  titleText: {
    fontFamily: fonts.SemiBold,
    color: colors.black,
    fontSize:RFValue(12,667)
  },
  productType: {
    color: '#5e7c91',
    fontFamily: fonts.Bold,
    marginTop: verticalScale(5),
  },
  MrpView: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: verticalScale(8),
    width:horizontalScale(200),
    justifyContent: 'space-between',
  },
  MrpViewFirsttextContainer: {
    position: 'relative',
  },
  MrpText: {
    fontFamily: fonts.SemiBold,
    color: colors.black,
    fontSize: RFValue(8.5, 667),
  },
  strikeLine: {
    borderTopWidth: 1,
    borderColor: 'orange',
    position: 'absolute',
    bottom: verticalScale(5),
    width: horizontalScale(60),
  },
  offerText: {
    fontFamily: fonts.SemiBold,
    color: '#faa045',
    fontSize: RFValue(8.5, 667),
  },
  ourPrice: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: verticalScale(5),
    justifyContent: 'space-between',
  },
  ourPriceText: {
    fontFamily: fonts.SemiBold,
    color: colors.black,
    fontSize: RFValue(10, 667),
  },
  bottomWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent:"space-between"
  },
  bottomWrapperView:{
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent:"space-between",
    

  },
  bottomWrapperheading:{
    fontFamily:fonts.Medium,
    color:"#5f7d92"
  },
  bottomWrappertext:{
    fontFamily:fonts.Bold,
    color:"#5f7d92",
    color:colors.black
  }
  
});
