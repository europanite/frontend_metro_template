import React, { useEffect, useMemo, useRef, useState } from "react";
import { 
  View, 
  Text, 
  Pressable, 
  useWindowDimensions, 
  ScrollView,
  TouchableOpacity,
  Linking 
} from "react-native";
import {REPO_URL} from "./HomeScreenUtil" 

export default function HomeScreen() {
  return (
    <View style={{ flex: 1 }}>
      <View
          style={{
            alignSelf: "center",
            width: "100%",
            paddingHorizontal: 12,
            paddingVertical: 10,
            gap: 8,
          }}
      >
        <TouchableOpacity onPress={() => Linking.openURL(REPO_URL)}>
          <Text
            style={{
              fontSize: 24,
              fontWeight: "800",
              marginBottom: 12,
              color: "#333333ff",
              textDecorationLine: "underline",
            }}
          >
            Frontend Metro Template
          </Text>
        </TouchableOpacity>
      </View>
    </View>

  );
}
















