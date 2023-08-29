import {StyleSheet} from 'react-native';
import {
  horizontalScale,
  moderateScale,
  verticalScale,
} from '../../../utils/Dimension';
import {colors, fonts} from '../../../utils/Theme';
import {RFValue} from 'react-native-responsive-fontsize';
export default checkOutStyle = StyleSheet.create({
  checkOutMain: {
    backgroundColor: 'white',
    flex: 1,
  },
  addressMain: {
    paddingHorizontal: horizontalScale(20),
    paddingVertical: verticalScale(10),
    backgroundColor: '#eef3f6',
  },
  addressTop: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  DeliveryText: {
    fontFamily: fonts.Medium,
    color: '#8299aa',
  },
  ChangeText: {
    fontFamily: fonts.Bold,
    color: '#5e7c91',
  },
  address: {
    width: horizontalScale(250),
    marginVertical: verticalScale(10),
    paddingVertical: verticalScale(5),
    paddingHorizontal: horizontalScale(10),
  },
  addressText: {
    fontFamily: fonts.Medium,
    color: colors.black,
  },
  dataTimeSelector:{
    marginTop:verticalScale(10),
    paddingHorizontal:horizontalScale(20),
    backgroundColor:"#eef3f6"
    
  },
  dateTimeMainText: {
    fontFamily: fonts.SemiBold,
    color: '#5e7c91',
    marginVertical:verticalScale(10)
  },

  selectedDelievery:{
   marginVertical:verticalScale(5),
   flexDirection:"row",
   alignItems:"center",
   justifyContent:"space-between",
   borderWidth:0.3,
   paddingVertical:verticalScale(12),
   paddingHorizontal:horizontalScale(10),
   borderRadius:moderateScale(5)

  },

  contactView: {
    marginTop: verticalScale(12),
    paddingHorizontal: horizontalScale(20),
    paddingVertical: verticalScale(10),
    backgroundColor: '#eef3f6',
  },
  contactMainText: {
    fontFamily: fonts.SemiBold,
    color: '#5e7c91',
  },
  inputView: {
    backgroundColor: 'white',
    marginVertical: verticalScale(10),
    borderRadius: moderateScale(10),
    paddingLeft: horizontalScale(10),
  },

  LoyaltyView: {
    marginTop: verticalScale(12),
    paddingHorizontal: horizontalScale(20),
    paddingVertical: verticalScale(10),
    backgroundColor: '#eef3f6',
  },
  loyaltyPoints: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: '#e3eaef',
    paddingVertical: verticalScale(10),
    paddingHorizontal: horizontalScale(10),
    marginVertical: verticalScale(10),
  },
  loyaltyPointsText: {fontFamily: fonts.SemiBold, color: '#7f94a2'},
  ReddemView: {
    backgroundColor: 'white',
    borderRadius: moderateScale(10),
    paddingLeft: horizontalScale(10),
    flexDirection:"row",
    alignItems:"center",
    justifyContent:"space-between"
  },
  ReddemButton: {
    backgroundColor: '#5e7c91',
    paddingVertical: verticalScale(10),
    paddingHorizontal: horizontalScale(10),
    borderRadius: moderateScale(10),
    alignItems: 'center',
    justifyContent: 'center',
  },
  ReddemButtonText: {
    fontFamily: fonts.SemiBold,
    color: colors.white,
  },
  couponCode: {
    marginTop: verticalScale(12),
    paddingHorizontal: horizontalScale(20),
    paddingVertical: verticalScale(10),
    backgroundColor: '#eef3f6',
  },
  couponCodeView: {
    backgroundColor: 'white',
    borderRadius: moderateScale(10),
    paddingLeft: horizontalScale(10),
    marginTop:verticalScale(10),
    flexDirection:"row",
    alignItems:"center",
    justifyContent:"space-between"
  },
  offerView:{
    fontFamily:fonts.SemiBold,
    color:"#508afd",
    marginTop:verticalScale(8),
    fontSize:RFValue(10,667),
    
  },

  bottomHolderView: {
    borderTopWidth: 0.5,
    borderColor: 'black',
    alignItems: 'center',
    justifyContent: 'center',
  },
  bottomTextHolder: {
    width: horizontalScale(300),
    marginVertical: verticalScale(10),
  },
  informationView: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: verticalScale(8),
  },
  informationLeftText: {
    fontFamily: fonts.Medium,
    fontSize: RFValue(14, 667),
    color: '#7f94a2',
  },
  informationRightText: {
    fontFamily: fonts.Medium,
    fontSize: RFValue(14, 667),
    color: '#7f94a2',
  },
  totalAmount: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    width:verticalScale(260),
    marginVertical:verticalScale(10)
  },
  totalAmountLeftText: {
    fontFamily: fonts.Medium,
    fontSize: RFValue(14, 667),
    color: '#7f94a2',
  },
  totalAmountRightText: {
    fontFamily: fonts.Medium,
    fontSize: RFValue(14, 667),
    color: '#7f94a2',
  },
  ButtonStyle:{
    backgroundColor:colors.violetcolor,
    alignItems:"center",
    justifyContent:"center",
    flexDirection:"row",
    padding:verticalScale(10),
    borderRadius:moderateScale(20),
    width:horizontalScale(300),
    marginVertical:verticalScale(10)
   },
   ButtonTextStyle:{
    color:"white",
    fontFamily:fonts.SemiBold
   }
});
