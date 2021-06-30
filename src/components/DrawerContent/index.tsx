import React, { useEffect, useState } from "react";
import {
  DrawerItem,
  DrawerContentScrollView,
  DrawerContentComponentProps,
} from "@react-navigation/drawer";
import { Feather as FeatherIcon } from "@expo/vector-icons/";

import { useAuth } from "../../hooks/auth";
import { View, Image, Text, TouchableOpacity } from "react-native";

import avatar from "../../assets/avatar.png";
import avatar2 from "../../assets/avatar2.png";

import * as S from "./styles";
import { Kid } from "../../pages/Dashboard";
import api from "../../services/api";

type User = {
  name: string;
  avatar_url: string;
  avatar: string | null;
};

type DrawerContentProps = {
  user: User;
  props: DrawerContentComponentProps;
};

export default function DrawerContent({ user, props }: DrawerContentProps) {
  const { signOut } = useAuth();
  const [kids, setKids] = useState<Kid[]>([]);

  const { token } = useAuth();

  const [name] = user.name.split(" ");

  useEffect(() => {
    (async () => {
      try {
        const { data } = await api.get("kids", {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });

        setKids(data);
      } catch (error) {
        console.log(error);
      }
    })();
  }, []);

  return (
    <View style={{ flex: 1 }}>
      <S.HeaderContainer>
        <Image
          source={user.avatar ? { uri: user.avatar_url } : avatar}
          style={{ width: 60, height: 60, borderRadius: 30 }}
        />
        <S.HeaderMenu>
          <S.Name>{name}</S.Name>
          <TouchableOpacity
            onPress={() => props.navigation.navigate("EditProfile")}
          >
            <S.EditProfileText>Edit Profile</S.EditProfileText>
          </TouchableOpacity>
        </S.HeaderMenu>
      </S.HeaderContainer>
      <DrawerContentScrollView {...props} style={{ flex: 1 }}>
        {kids.map((kid) => {
          return (
            <TouchableOpacity
              key={kid.id}
              onPress={() =>
                props.navigation.navigate("KidProfile", { kidId: kid.id })
              }
              style={{
                backgroundColor: "#8D79CD",
                padding: 10,
                height: 80,
                margin: 10,
                borderRadius: 10,
                justifyContent: "center",
              }}
            >
              <View style={{ flexDirection: "row", alignItems: "center" }}>
                <Image
                  source={kid.avatar ? { uri: kid.avatar_url } : avatar2}
                  style={{
                    width: 60,
                    height: 60,
                    borderRadius: 30,
                    marginRight: 15,
                  }}
                />
                <S.ItemName>{kid.name}</S.ItemName>
              </View>
            </TouchableOpacity>
          );
        })}
      </DrawerContentScrollView>
      <DrawerItem
        label="Logout"
        labelStyle={{ fontSize: 17, color: "#fff" }}
        icon={({ color, size }) => (
          <FeatherIcon name="log-out" size={size} color="#fff" />
        )}
        onPress={signOut}
      />
    </View>
  );
}
