import React, { useRef, useCallback } from "react";
import {
  Image,
  KeyboardAvoidingView,
  Platform,
  View,
  ScrollView,
  Alert,
} from "react-native";
import { useNavigation } from "@react-navigation/native";

import { FormHandles } from "@unform/core";
import { Form } from "@unform/mobile";

import api from "../../services/api";

import Input from "../../components/Input";
import Button from "../../components/Button";

import { Container, Title } from "./styles";

import Header from "../../components/Header";
import { useAuth } from "../../hooks/auth";

interface SignUpFormData {
  name: string;
}

export default function AddKid() {
  const formRef = useRef<FormHandles>(null);

  const navigation = useNavigation();

  const { user, token } = useAuth();

  const handleSignUp = useCallback(
    async (data: SignUpFormData) => {
      try {
        formRef.current?.setErrors({});

        await api.post("/kids", data, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });

        navigation.navigate("Success2");
      } catch (err) {
        Alert.alert(
          "Erro no cadastro",
          "Ocorreu um erro ao fazer o cadastro, tente novamente"
        );
      }
    },
    [navigation]
  );

  return (
    <KeyboardAvoidingView
      style={{ flex: 1 }}
      behavior={Platform.OS === "ios" ? "padding" : undefined}
      enabled
    >
      <Header />
      <View>
        <Title>Adicionar criança/adolescente</Title>
      </View>

      <Container>
        <Form ref={formRef} onSubmit={handleSignUp}>
          <Input
            autoCapitalize="words"
            name="name"
            icon="user"
            placeholder="Nome"
            returnKeyType="next"
            onSubmitEditing={() => {
              formRef.current?.submitForm();
            }}
          />
        </Form>
        <Button
          onPress={() => {
            formRef.current?.submitForm();
          }}
        >
          Criar
        </Button>
      </Container>
    </KeyboardAvoidingView>
  );
}
