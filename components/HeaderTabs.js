import React, { useEffect, useState } from "react";
import { View, Text, TouchableOpacity } from "react-native";

export default function HeaderTabs() {
  const [activeTab, setActiveTab] = useState("Delivery");

  return (
    <View style={{ flexDirection: "row", alignSelf: "center" }}>
      {/* Header buttons */}
      <HeaderButton
        title="Delivery"
        btnColor="black"
        textColor="white"
        avtiveTab={activeTab}
        setActiveTab={setActiveTab}
      />
      <HeaderButton
        title="Pickup"
        btnColor="white"
        textColor="black"
        avtiveTab={activeTab}
        setActiveTab={setActiveTab}
      />
      {/* Header buttons */}
    </View>
  );
}

const HeaderButton = (props) => (
  <TouchableOpacity
    style={{
      backgroundColor: props.activeTab == props.title ? "black" : "white",
      paddingVertical: 8,
      paddingHorizontal: 16,
      borderRadius: 30,
    }}
    onPress={() => props.setActiveTab(props.title)}
  >
    <Text
      style={{
        color: props.activeTab == props.title ? "white" : "black",
        fontSize: 15,
        fontWeight: 900,
      }}
    >
      {props.title}
    </Text>
  </TouchableOpacity>
);
