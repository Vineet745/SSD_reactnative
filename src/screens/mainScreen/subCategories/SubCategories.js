// import {View, Text, TouchableOpacity} from 'react-native';
// import React from 'react';
// import {useNavigation} from '@react-navigation/native';
// import { useDispatch } from 'react-redux';
// import { getCategoryName } from '../../../redux/slice/categorySlice';

// const SubCategories = ({backgroundColor, item}) => {
//   const dispatch = useDispatch()
//   const {navigate} = useNavigation();
//   const categoryId = item.id;

//   dispatch(getCategoryName(item.name))

//   return (
//     <TouchableOpacity
//       onPress={() => navigate('Category_data', {category: categoryId,categoryName:item.name})}>
//       <View
//         style={[
//           categoryCardStyle.cardmain,
//           {backgroundColor: backgroundColor},
//         ]}>
//         <Text style={categoryCardStyle.cardtext}>{item.name}</Text>
//       </View>
//     </TouchableOpacity>
//   );
// };

// export default SubCategories;
