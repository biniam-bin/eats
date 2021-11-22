import React from "react";
import { View, Text, Image, TouchableOpacity } from "react-native";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import { MaterialCommu } from "react-native-vector-icons";
export default function RestaurantItem(props) {
  return (
    <View>
      {props.restaurantData.map((restaurant, index) => {
        return (
          <TouchableOpacity key={index} style={{ marginBottom: 30 }}>
            <View style={{ margin: 10, padding: 15, backgroundColor: "white" }}>
              <RestaurantImage image />
              <RestaurantInfo name rating />
            </View>
          </TouchableOpacity>
        );
      })}
    </View>
  );
}

const RestaurantImage = () => {
  return (
    <View>
      <Image
        style={{ width: "100%", height: 180 }}
        source={{
          uri: "https://media.istockphoto.com/photos/modern-restaurant-interior-design-picture-id1211547141?k=20&m=1211547141&s=612x612&w=0&h=KiZX3NBZVCK4MlSh4BJ8hZNSJcTIMbNSSV2yusw2NmM=",
        }}
      />
      <TouchableOpacity style={{ position: "absolute", right: 20, top: 20 }}>
        <MaterialCommunityIcons name="heart-outline" size={25} color="#fff" />
      </TouchableOpacity>
    </View>
  );
};

const RestaurantInfo = () => {
  return (
    <View
      style={{
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        marginTop: 10,
      }}
    >
      <View>
        <Text style={{ fontSize: 17, fontWeight: "bold" }}>The to kitchen</Text>
        <Text style={{ fontSize: 15, color: "gray" }}>30-45 . min</Text>
      </View>
      <View
        style={{
          backgroundColor: "#eee",
          height: 30,
          width: 30,
          alignItems: "center",
          borderRadius: 15,
          justifyContent: "center",
        }}
      >
        <Text>4.5</Text>
      </View>
    </View>
  );
};
