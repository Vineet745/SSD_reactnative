import {View, Text, TouchableOpacity, Image} from 'react-native';
import React from 'react';
import orderedItemStyle from './orderedItemStyle';
import {horizontalScale, verticalScale} from '../../utils/Dimension';
import {fonts} from '../../utils/Theme';

const OrderedItem = (item) => {

  return (
    <View style={orderedItemStyle.cartItemMain}>
      <TouchableOpacity
        activeOpacity={1}
        style={orderedItemStyle.productCardMain}>
        {/* Image Wrapper */}

        <View style={orderedItemStyle.imageHolder}>
          <Image source={require('../../assets/images/product_img.png')} />
        </View>

        {/* Detail Wrapper */}

        <View style={orderedItemStyle.detailHolder}>
          <Text style={orderedItemStyle.titleText}>
            {(item?.item?.product?.product_name).substring(0,25)}...
          </Text>

          <View style={orderedItemStyle.MrpView}>
            <View style={orderedItemStyle.MrpViewFirsttextContainer}>
              <Text style={orderedItemStyle.MrpText}>M.R.P. : {item?.item?.inventory_one?.transaction?.purchase_data?.mrp}</Text>
              <View style={orderedItemStyle.strikeLine}></View>
            </View>
            <Text style={orderedItemStyle.offerText}> 20% Off</Text>
            <Text style={orderedItemStyle.ourPriceText}>Our Price: {item?.item?.unit_price}</Text>
          </View>

          {/* Border View */}

          <View
            style={{
              borderWidth: 0.5,
              marginVertical: verticalScale(5),
              borderColor: '#d1dbe2',
            }}
          />

          <View style={orderedItemStyle.bottomWrapper}>
            <View style={orderedItemStyle.bottomWrapperView}>
              <Text style={orderedItemStyle.bottomWrapperheading}>
                Quantity:
              </Text>
              <Text style={orderedItemStyle.bottomWrappertext}> {item?.item?.quantity_count}</Text>
            </View>
            <View style={[orderedItemStyle.bottomWrapperView]}>
              <Text style={orderedItemStyle.bottomWrapperheading}>
                Total Price:
              </Text>
              <Text style={orderedItemStyle.bottomWrappertext}> ₹ {item?.item?.amount}</Text>
            </View>
          </View>
        </View>
      </TouchableOpacity>
    </View>
  );
};

export default OrderedItem;
