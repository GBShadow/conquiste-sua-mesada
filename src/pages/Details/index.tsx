import React from "react";
import Header from "../../components/Header";
import avatarImg from "../../assets/avatar.png";

import * as S from "./styles";
import Button from "../../components/Button";
import { useNavigation } from "@react-navigation/core";

export default function Details() {
  const navigation = useNavigation();

  return (
    <S.Container>
      <Header />
      <S.Main>
        <S.DetailsText>Detalhes</S.DetailsText>
        <S.MainHeaderContainer>
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
                <S.InfoText>Mesada: R$ 150,00 - Atual: RS150,00</S.InfoText>
              </S.Info>
            </S.InfoContainer>
          </S.DetailsContainer>
        </S.MainHeaderContainer>
        <S.ToDoContainer>
          <S.ToDoTitle>Tarefas</S.ToDoTitle>
          <S.ToDoList
            data={[1, 2, 3, 4, 5, 6, 7, 8]}
            keyExtractor={(_, index) => String(index)}
            renderItem={() => (
              <S.ToDoItem>
                <S.Icon name="check-square" color="#04D361" size={24} />
                <S.ToDoInfo>
                  <S.ToDoName>Arrumar brinquedos</S.ToDoName>
                  <S.ToDoValue>R$10,00</S.ToDoValue>
                </S.ToDoInfo>
              </S.ToDoItem>
            )}
          />
          <S.ButtonContainer>
            <Button onPress={() => navigation.navigate("AddToDo")}>
              Adicionar tarefa
            </Button>
          </S.ButtonContainer>
        </S.ToDoContainer>
      </S.Main>
    </S.Container>
  );
}
