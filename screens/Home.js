import React, { useEffect, useState } from "react";
import { View, Text, SafeAreaView, ScrollView } from "react-native";
import Categories from "../components/Categories";
import HeaderTabs from "../components/HeaderTabs";
import RestaurantItems from "../components/RestaurantItems";
import SearchBar from "../components/SearchBar";

export default function Home() {
  const [restaurantData, setRestaurantData] = useState([1, 2]);
  
  const getRestaurantsFromYelp = () => {
    const yelpUrl = `https://api.yelp.com/v3/businesses/search?term=restaurants&location=San Francisco`;
    const yelp_api_key =
      "IOEcErBB3R-5a6iD_Be8V0LonrrRKquva1nT1YZACC162GTygQSDKm02sjNiiaRSaCEfmAJPl1Nkn-QZ6jO1cCXeuMwq1F7q3FSoCC4RbhgcHbax5RkSi6t8fZOaYXYx";

    const apiOptions = {
      headers: {
        Authorization: `Bearer ${yelp_api_key}`,
      },
    };
    
    return fetch(yelpUrl, apiOptions)
      .then((res) => res.json())
      .then((json) =>
        // setRestaurantData(
        //   json.businesses.filter((business) =>
        //     business.transactions.includes(activeTab.toLowerCase())
        //   )
        // )
        console.log(json)
      );
  };


  //   return fetch(yelpurl, options)
  //     .then((res) => res.json())
  //     .then(json => setRestaurantData(json.businesses));
  // };

  useEffect(() => {
    getRestaurantsFromYelp()
    console.log(restaurantData)
  }, [])
  return (
    <SafeAreaView style={{ backgroundColor: "#eee", flex: 1 }}>
      <View style={{ backgroundColor: "white", padding: 15 }}>
        <HeaderTabs />
        <SearchBar />
      </View>
      <ScrollView showsVerticalScrollIndicator={false}>
        <Categories />
        <RestaurantItems restaurantData={restaurantData} />
      </ScrollView>
    </SafeAreaView>
  );
}
