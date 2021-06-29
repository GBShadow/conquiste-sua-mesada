import React, { useCallback, useRef, useState } from "react";
import { useNavigation, useRoute } from "@react-navigation/native";
import { FormHandles, Scope } from "@unform/core";

import {
  Alert,
  View,
  ScrollView,
  SafeAreaViewBase,
  Platform,
} from "react-native";

import Header from "../../components/Header";
import Button from "../../components/Button";
import Input from "../../components/Input";

import api from "../../services/api";

import * as S from "./styles";
import { useAuth } from "../../hooks/auth";

type RouteParams = {
  kidId: number;
};

type Todo = {
  name: string;
  value: number;
};

type TodoFormData = {
  todos: Todo[];
};

export default function AddToDo() {
  const navigation = useNavigation();
  const route = useRoute();
  const formRef = useRef<FormHandles>(null);

  const { token } = useAuth();

  const { kidId } = route.params as RouteParams;

  const [formTodos, setTodos] = useState<Todo[]>([]);

  const handleAddTodo = useCallback(
    async ({ todos }: TodoFormData) => {
      try {
        console.log(todos);
        await api.post(
          "/todos",
          { todos, kid_id: kidId },
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );

        navigation.navigate("Dashboard");
      } catch (err) {
        Alert.alert(
          "Erro no cadastro",
          "Ocorreu um erro ao cadastrar tarefas, tente novamente"
        );
      }
    },
    [navigation]
  );

  return (
    <ScrollView>
      <S.Container>
        <Header />
        <S.Main>
          <S.Name>Pedro Carvalho Sombra</S.Name>
          <S.DetailsText>Tarefas</S.DetailsText>
          <S.ToDoContainer>
            <S.FormComponent ref={formRef} onSubmit={handleAddTodo}>
              <S.ToDoList
                data={formTodos}
                keyExtractor={(_, index) => String(index)}
                ItemSeparatorComponent={() => <S.Separator />}
                renderItem={({ index }) => (
                  <Scope path={`todos[${index}]`}>
                    <View key={index}>
                      <Input
                        name="name"
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
                  </Scope>
                )}
              />
            </S.FormComponent>
            <S.ButtonContainer>
              <S.ButtonAddToDo
                onPress={() => setTodos([...formTodos, { name: "", value: 0 }])}
              >
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
    </ScrollView>
  );
}
