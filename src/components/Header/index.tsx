import { useNavigation } from "@react-navigation/core";
import React, { useEffect, useState } from "react";
import { View } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import { DrawerActions } from "@react-navigation/native";

import avatarImg from "../../assets/avatar.png";

import * as S from "./styles";
import { useAuth } from "../../hooks/auth";
import { color } from "react-native-reanimated";

interface HeaderProps {
  type?: "dash";
}

const Header: React.FC<HeaderProps> = ({ type }) => {
  const navigation = useNavigation();

  const [title, setTitle] = useState("");
  const [showButton, setShowButton] = useState(true);

  const { user } = useAuth();

  useEffect(() => {
    if (type === "dash") {
      setTitle("Bem vindo,");
      setShowButton(false);
    } else {
      setTitle("Conquiste sua mesada");
    }
  }, []);

  return (
    <S.HeaderContainer>
      {showButton && (
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <S.Icon name="arrow-left" color="#fff" size={30} />
        </TouchableOpacity>
      )}
      <View>
        <S.PrincipleText>{title}</S.PrincipleText>
        <S.SecondaryText>{user.name}</S.SecondaryText>
      </View>
      <View>
        <TouchableOpacity onPress={() => navigation.openDrawer()}>
          <S.Avatar
            source={user.avatar ? { uri: user.avatar_url } : avatarImg}
          />
        </TouchableOpacity>
      </View>
    </S.HeaderContainer>
  );
};

export default Header;
