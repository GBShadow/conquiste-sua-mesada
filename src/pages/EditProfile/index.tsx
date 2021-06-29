import React, { useCallback, useRef } from "react";
import { Alert, View, TextInput, TouchableOpacity } from "react-native";
import { Feather as FeatherIcon } from "@expo/vector-icons/";

import { Form } from "@unform/mobile";
import { FormHandles } from "@unform/core";

import { useAuth } from "../../hooks/auth";
import Input from "../../components/Input";

import avatar from "../../assets/avatar.png";

import * as S from "./styles";
import Button from "../../components/Button";
import { useNavigation } from "@react-navigation/native";
import api from "../../services/api";

const EditProfile: React.FC = () => {
  const navigation = useNavigation();

  const formRef = useRef<FormHandles>(null);
  const emailInputRef = useRef<TextInput>(null);
  const passwordInputRef = useRef<TextInput>(null);
  const newPasswordInputRef = useRef<TextInput>(null);
  const confirmationPasswordInputRef = useRef<TextInput>(null);

  const { token } = useAuth();

  const handleSignIn = useCallback(async (data) => {
    console.log(data);
    try {
      await api.put(
        "/profile",
        { name: data.name, email: data.email },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      Alert.alert("Sucesso", "Atualização realizada com sucesso.");
    } catch (err) {
      console.log(err);
      Alert.alert(
        "Erro na atualização",
        "Ocorreu um erro ao atualizar perfil."
      );
    }
  }, []);

  return (
    <S.Container>
      <S.GoBack onPress={() => navigation.goBack()}>
        <FeatherIcon name="arrow-left" size={30} color="#fff" />
      </S.GoBack>
      <View style={{ height: 180 }}>
        <S.ImageContainer>
          <S.Avatar source={avatar} />
          <S.IconContainer>
            <FeatherIcon name="camera" color="#fff" size={25} />
          </S.IconContainer>
        </S.ImageContainer>
      </View>

      <S.Title>Editar perfil</S.Title>

      <Form ref={formRef} onSubmit={handleSignIn}>
        <Input
          autoCorrect={false}
          autoCapitalize="none"
          keyboardType="default"
          name="name"
          icon="user"
          placeholder="Nome"
          returnKeyType="next"
          onSubmitEditing={() => {
            emailInputRef.current?.focus();
          }}
        />
        <Input
          ref={emailInputRef}
          autoCorrect={false}
          autoCapitalize="none"
          keyboardType="email-address"
          name="email"
          icon="mail"
          placeholder="E-mail"
          returnKeyType="next"
          onSubmitEditing={() => {
            passwordInputRef.current?.focus();
          }}
        />
        <View style={{ marginTop: 20, marginBottom: 20 }}>
          <Input
            ref={passwordInputRef}
            secureTextEntry
            name="old_password"
            icon="lock"
            placeholder="Senha atual"
            returnKeyType="send"
            onSubmitEditing={() => {
              newPasswordInputRef.current?.focus();
            }}
          />
          <Input
            ref={newPasswordInputRef}
            secureTextEntry
            name="password"
            icon="lock"
            placeholder="Nova senha"
            returnKeyType="send"
            onSubmitEditing={() => {
              confirmationPasswordInputRef.current?.focus();
            }}
          />
          <Input
            ref={confirmationPasswordInputRef}
            secureTextEntry
            name="confirmation_password"
            icon="lock"
            placeholder="Confirmação da senha"
            returnKeyType="send"
            onSubmitEditing={() => {
              formRef.current?.submitForm();
            }}
          />
        </View>
      </Form>
      <Button
        onPress={() => {
          formRef.current?.submitForm();
        }}
      >
        Confirmar mudanças
      </Button>
    </S.Container>
  );
};

export default EditProfile;
