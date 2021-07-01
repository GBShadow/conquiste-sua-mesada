import React, { useCallback, useRef } from "react";
import {
  KeyboardAvoidingView,
  Platform,
  View,
  TextInput,
  Alert,
} from "react-native";
import { useNavigation } from "@react-navigation/native";

import { Form } from "@unform/mobile";
import { FormHandles } from "@unform/core";

import { useAuth } from "../../hooks/auth";

import Input from "../../components/Input";
import Button from "../../components/Button";

import { Container, Title, Image } from "./styles";

import avatar from "../../assets/avatar.png";

export default function LockUser() {
  const formRef = useRef<FormHandles>(null);
  const passwordInputRef = useRef<TextInput>(null);

  const navigation = useNavigation();

  const { signIn, user } = useAuth();

  interface SignInFormData {
    email: string;
    password: string;
  }

  const handleSignIn = useCallback(
    async (data: SignInFormData) => {
      try {
        await signIn({
          email: user.email,
          password: data.password,
        });

        navigation.navigate("Dashboard");
      } catch (err) {
        Alert.alert(
          "Erro na autenticação",
          "Ocorreu um erro ao fazer o login, cheque as credenciais"
        );
      }
    },
    [signIn]
  );

  return (
    <KeyboardAvoidingView
      style={{ flex: 1 }}
      behavior={Platform.OS === "ios" ? "padding" : undefined}
      enabled
    >
      <Container>
        <Image source={avatar} />

        <View>
          <Title>{user.name}</Title>
        </View>

        <Form ref={formRef} onSubmit={handleSignIn}>
          <Input
            ref={passwordInputRef}
            secureTextEntry
            name="password"
            icon="lock"
            placeholder="Senha"
            returnKeyType="send"
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
          Entrar
        </Button>
      </Container>
    </KeyboardAvoidingView>
  );
}
