import React from "react";
import { Image } from "react-native";
import { useNavigation } from "@react-navigation/native";
import Button from "../../components/Button";

import checkImage from "../../assets/check.png";

import * as S from "./styles";

export default function Success2() {
  const navigation = useNavigation();

  return (
    <S.Container>
      <S.Content>
        <S.ImageContainer>
          <Image source={checkImage} />
        </S.ImageContainer>
        <S.TextContainer>
          <S.PrincipleText>Cadastro concluído</S.PrincipleText>
          <S.SecondaryText>
            Agora você pode adicionar as tarefas.
          </S.SecondaryText>
        </S.TextContainer>
        <S.ButtonContainer>
          <Button onPress={() => navigation.navigate("Dashboard")}>Ok</Button>
        </S.ButtonContainer>
      </S.Content>
    </S.Container>
  );
}
