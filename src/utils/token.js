import AsyncStorage from "@react-native-async-storage/async-storage"


export const getToken = async()=>{
try {
    const token = await AsyncStorage.getItem("TOKEN")
    return token;
} catch (error) {
    console.log("Error",error)
    return null;
}
}