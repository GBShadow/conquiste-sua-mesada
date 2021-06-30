import React, { useCallback, useEffect } from "react";
import { useState } from "react";
import avatarImg from "../../assets/avatar2.png";
import { Alert } from "react-native";

import CheckBox from "../../components/CheckBox";
import { useNavigation } from "@react-navigation/core";
import { useRoute } from "@react-navigation/native";
import api from "../../services/api";
import { Kid, Todo } from "../Dashboard";
import { useAuth } from "../../hooks/auth";
import * as S from "./styles";

type RouteParams = {
  kidId: number;
};

export default function KidProfile() {
  const navigation = useNavigation();
  const route = useRoute();

  const { kidId } = route.params as RouteParams;

  const [kid, setKid] = useState({} as Kid);
  const [todos, setTodos] = useState<Todo[]>([]);

  const { token } = useAuth();

  useEffect(() => {
    async function loadData() {
      const { data } = await api.get(`kids/${kidId}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      const todosTotal = data.todos.reduce((acc: number) => {
        acc += 1;
        return acc;
      }, 0);

      const todosCompleted = data.todos.reduce((acc: number, todo: Todo) => {
        if (todo.active) {
          acc += 1;
        }
        return acc;
      }, 0);

      const parcialValue = data.todos.reduce((acc: number, todo: Todo) => {
        if (todo.active) {
          acc = acc + Number(todo.value);
        }
        return acc;
      }, 0);

      const totalValue = data.todos.reduce((acc: number, todo: Todo) => {
        acc = acc + Number(todo.value);
        return acc;
      }, 0);

      const serializeKid = {
        id: data.id,
        name: data.name,
        parcialValue,
        totalValue,
        todosCompleted,
        todosTotal,
      } as Kid;

      setKid(serializeKid);
      setTodos(data.todos);
    }

    loadData();
  }, [todos]);

  const handleDeleteTodo = async (id: number) => {
    Alert.alert("Deletar tarefa", "Gostaria de Apagar essa tarefa?", [
      {
        text: "Apagar",
        onPress: async () => {
          await api.delete(`/todos/${id}`, {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          });
        },
      },
      {
        text: "Cancel",
        onPress: () => {
          return;
        },
      },
    ]);
  };

  return (
    <S.Container>
      <S.Main>
        <S.DetailsText>Suas Tarefas</S.DetailsText>
        <S.MainHeaderContainer>
          <S.Avatar source={kid.avatar ? { uri: kid.avatar_url } : avatarImg} />
          <S.DetailsContainer>
            <S.Name>{kid.name}</S.Name>
            <S.InfoContainer>
              <S.Info>
                <S.Icon name="check-square" size={16} color="#04D361" />
                <S.InfoText>
                  Tarefas - {kid.todosCompleted} de {kid.todosTotal}
                </S.InfoText>
              </S.Info>
              <S.Info>
                <S.Icon name="dollar-sign" size={16} color="#04D361" />
                <S.InfoText>
                  Atual: RS {kid.parcialValue} - Mesada: R$ {kid.totalValue}
                </S.InfoText>
              </S.Info>
            </S.InfoContainer>
          </S.DetailsContainer>
        </S.MainHeaderContainer>
        <S.ToDoContainer>
          <S.ToDoTitle>Tarefas</S.ToDoTitle>
          <S.ToDoList
            data={todos}
            keyExtractor={(item: Todo) => String(item.id)}
            renderItem={({ item: todo }) => (
              <S.Content>
                <S.ToDoItem>
                  <CheckBox active={todo.active} todoId={todo.id} disabled />
                  <S.ToDoInfo>
                    <S.ToDoName>{todo.name}</S.ToDoName>
                    <S.ToDoValue>{todo.value}</S.ToDoValue>
                  </S.ToDoInfo>
                </S.ToDoItem>
              </S.Content>
            )}
          />
        </S.ToDoContainer>
      </S.Main>
    </S.Container>
  );
}
