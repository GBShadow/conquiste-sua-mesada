import React from "react";
import { useNavigation } from "@react-navigation/native";

import Button from "../../components/Button";
import avatarImg from "../../assets/avatar.png";

import * as S from "./styles";
import Header from "../../components/Header";

export default function Dashboard() {
  const navigation = useNavigation();

  return (
    <S.Container>
      <Header type="dash" />
      <S.MainContainer>
        <S.Title>Criança/Adolescente</S.Title>
        <S.ListContainer
          data={[1, 2, 3, 4]}
          keyExtractor={(_, index) => String(index)}
          renderItem={() => (
            <S.ItemContainer onPress={() => navigation.navigate("Details")}>
              <>
                <S.Avatar source={avatarImg} />
                <S.DetailsContainer>
                  <S.Name>Pedro Carvalho Sombra</S.Name>
                  <S.InfoContainer>
                    <S.Info>
                      <S.Icon name="check-square" size={16} color="#04D361" />
                      <S.InfoText>Tarefas - 5 de 5</S.InfoText>
                    </S.Info>
                    <S.Info>
                      <S.Icon name="dollar-sign" size={16} color="#04D361" />
                      <S.InfoText>
                        Mesada: R$ 150,00 - Atual: RS150,00
                      </S.InfoText>
                    </S.Info>
                  </S.InfoContainer>
                </S.DetailsContainer>
              </>
            </S.ItemContainer>
          )}
        />
        <S.Button onPress={() => navigation.navigate("AddToDo")}>
          <S.IconButton name="plus" size={24} color="#FFF" />
        </S.Button>
      </S.MainContainer>
    </S.Container>
  );
}
