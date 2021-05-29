import React, { useCallback, useEffect, useRef, useState } from "react";
import { FormHandles } from "@unform/core";

import Header from "../../components/Header";
import Button from "../../components/Button";
import Input from "../../components/Input";

import * as S from "./styles";
import { View } from "react-native";

export default function AddToDo() {
  const formRef = useRef<FormHandles>(null);

  const [toDos, setToDos] = useState<string[]>([]);

  const handleSignIn = useCallback(() => {}, []);

  return (
    <S.Container>
      <Header />
      <S.Main>
        <S.Name>Pedro Carvalho Sombra</S.Name>
        <S.DetailsText>Tarefas</S.DetailsText>
        <S.ToDoContainer>
          <S.FormComponent ref={formRef} onSubmit={handleSignIn}>
            <S.ToDoList
              data={toDos}
              keyExtractor={(_, index) => String(index)}
              ItemSeparatorComponent={() => <S.Separator />}
              renderItem={({ index }) => (
                <View key={index}>
                  <Input
                    name="todo"
                    icon="check-square"
                    placeholder="Tarefa"
                    returnKeyType="next"
                  />
                  <Input
                    name="value"
                    icon="dollar-sign"
                    placeholder="Valor"
                    returnKeyType="send"
                    onSubmitEditing={() => {
                      formRef.current?.submitForm();
                    }}
                  />
                </View>
              )}
            />
          </S.FormComponent>
          <S.ButtonContainer>
            <S.ButtonAddToDo onPress={() => setToDos([...toDos, ""])}>
              <S.ButtonText>Adicionar tarefa</S.ButtonText>
            </S.ButtonAddToDo>
            <Button
              onPress={() => {
                formRef.current?.submitForm();
              }}
            >
              Finalizar
            </Button>
          </S.ButtonContainer>
        </S.ToDoContainer>
      </S.Main>
    </S.Container>
  );
}
