import React from "react";
import { View, Text } from "react-native";
import { GooglePlacesAutocomplete } from "react-native-google-places-autocomplete";
import { Ionicons, AntDesign } from "react-native-vector-icons";
export default function SearchBar() {
  return (
    <View style={{ marginTop: 15, flexDirection: "row" }}>
      <GooglePlacesAutocomplete
        placeholder="Search..."
        
        styles={{
          textInput: {
            backgroundColor: "#eee",
            borderRadius: 20,
            fontWeight: 700,
            marginTop: 7,
            
            
          },
          textInputContainer: {
            backgroundColor: "#eee",
            borderRadius: 50,
            flexDirection: "row",
            alignItems: "center",
            marginRight: 10,
          },
        }}
        renderLeftButton={() => {
          return (
            <View style={{ marginLeft: 20 }}>
              <Ionicons name="location-sharp" size={24} />
            </View>
          );
        }}
        renderRightButton={() => {
          return (
            <View style={{ display: "flex", flexDirection: "row", marginRight: 8, backgroundColor: "white", padding: 9, borderRadius:30, alignItems: "center" }}>
              <AntDesign name="clockcircle" size={11} style={{marginRight: 7}} />
              <Text>search</Text>
            </View>
          );
        }}
      />
    </View>
  );
}
