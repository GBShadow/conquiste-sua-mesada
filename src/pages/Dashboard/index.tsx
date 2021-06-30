import React, { useEffect, useState } from "react";
import { useNavigation } from "@react-navigation/native";

import avatarImg from "../../assets/avatar.png";
import avatarImg2 from "../../assets/avatar2.png";

import api from "../../services/api";
import Header from "../../components/Header";
import { useAuth } from "../../hooks/auth";

import * as S from "./styles";
import { TouchableOpacity, Alert, View } from "react-native";

export type Todo = {
  id: number;
  name: string;
  value: number;
  active: boolean;
};

export type Kid = {
  id: number;
  name: string;
  todos: Todo[];
  parcialValue: number;
  totalValue: number;
  todosTotal: number;
  todosCompleted: number;
  avatar_url: string;
  avatar: string | null;
};

export default function Dashboard() {
  const navigation = useNavigation();
  const [kids, setKids] = useState<Kid[]>([]);

  const { token } = useAuth();

  useEffect(() => {
    async function loadData() {
      const { data } = await api.get("kids", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      const serializeKids = data.map((kid: Kid) => {
        const todosTotal = kid.todos.reduce((acc: number, todo: Todo) => {
          acc += 1;
          return acc;
        }, 0);

        const todosCompleted = kid.todos.reduce((acc: number, todo: Todo) => {
          if (todo.active) {
            acc += 1;
          }
          return acc;
        }, 0);

        const parcialValue = kid.todos.reduce((acc: number, todo: Todo) => {
          if (todo.active) {
            acc = acc + Number(todo.value);
          }
          return acc;
        }, 0);

        const totalValue = kid.todos.reduce((acc: number, todo: Todo) => {
          acc = acc + Number(todo.value);
          return acc;
        }, 0);

        return {
          id: kid.id,
          name: kid.name,
          parcialValue,
          totalValue,
          todosCompleted,
          todosTotal,
        };
      });

      setKids(serializeKids);
    }

    loadData();
  }, [kids]);

  const handleDeleteKid = async (id: number) => {
    Alert.alert(
      "Deletar criança/adolescente",
      "Gostaria de Apagar essa criança/adolescente?",
      [
        {
          text: "Apagar",
          onPress: async () => {
            await api.delete(`/kids/${id}`, {
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
      ]
    );
  };

  return (
    <S.Container>
      <Header type="dash" />
      <S.MainContainer>
        <S.Title>Criança/Adolescente</S.Title>
        <S.ListContainer
          data={kids}
          keyExtractor={(kid: Kid) => String(kid.id)}
          renderItem={({ item: kid }) => (
            <S.Content>
              <S.ItemContainer
                onPress={() =>
                  navigation.navigate("Details", { kidId: kid.id })
                }
              >
                <View
                  style={{
                    flex: 1,
                    flexDirection: "row",
                    alignItems: "center",
                  }}
                >
                  <S.Avatar source={avatarImg2} />
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
                          Mesada: R$ {kid.totalValue} - Atual: R${" "}
                          {kid.parcialValue}
                        </S.InfoText>
                      </S.Info>
                    </S.InfoContainer>
                  </S.DetailsContainer>
                </View>
              </S.ItemContainer>
              <S.DeleteButton onPress={() => handleDeleteKid(kid.id)}>
                <S.IconButton name="trash" size={16} color="#ec2106" />
              </S.DeleteButton>
            </S.Content>
          )}
        />
        <S.Button onPress={() => navigation.navigate("AddKid")}>
          <S.IconButton name="plus" size={24} color="#FFF" />
        </S.Button>
      </S.MainContainer>
    </S.Container>
  );
}
