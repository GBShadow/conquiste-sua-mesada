import React, { useCallback, useEffect, useRef, useState } from "react";
import { Alert, View, TextInput, Platform } from "react-native";
import { Feather as FeatherIcon } from "@expo/vector-icons/";

import Constants from "expo-constants";
import * as Permissions from "expo-permissions";
import * as ImagePicker from "expo-image-picker";

import { Form } from "@unform/mobile";
import { FormHandles } from "@unform/core";

import { useAuth } from "../../hooks/auth";
import Input from "../../components/Input";

import avatarImg from "../../assets/avatar.png";

import * as S from "./styles";
import Button from "../../components/Button";
import { useNavigation } from "@react-navigation/native";
import api from "../../services/api";

const EditProfile = () => {
  const navigation = useNavigation();

  const formRef = useRef<FormHandles>(null);
  const emailInputRef = useRef<TextInput>(null);
  const passwordInputRef = useRef<TextInput>(null);
  const newPasswordInputRef = useRef<TextInput>(null);
  const confirmationPasswordInputRef = useRef<TextInput>(null);

  const { token, user, updateUser } = useAuth();

  const handleUpdateUser = useCallback(
    async (data) => {
      try {
        const response = await api.put(
          "/profile",
          { name: data.name, email: data.email },
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );

        updateUser(response.data);

        Alert.alert("Sucesso", "Atualização realizada com sucesso.");
        navigation.goBack();
      } catch (err) {
        console.log(err);
        Alert.alert(
          "Erro na atualização",
          "Ocorreu um erro ao atualizar perfil."
        );
      }
    },
    [updateUser]
  );

  async function updateAvatar() {
    if (Constants.platform.ios) {
      const { status } = await Permissions.askAsync(Permissions.CAMERA_ROLL);

      if (status !== "granted") {
        alert("Nós precisamos dessa permissão.");
        return;
      }
    }

    const data = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
    });

    if (data.cancelled) {
      return;
    }

    if (!data.uri) {
      return;
    }

    const data2 = new FormData();

    data2.append("avatar", {
      name: `${Date.now()}-${user.id}.jpeg`,
      uri: data.uri,
      type: "image/jpeg",
    });

    const response = await api.patch("/users/avatar", data2, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

    updateUser(response.data);
  }

  return (
    <S.Container>
      <S.GoBack onPress={() => navigation.goBack()}>
        <FeatherIcon name="arrow-left" size={30} color="#fff" />
      </S.GoBack>
      <View style={{ height: 180 }}>
        <S.ImageContainer>
          <S.Avatar
            source={{
              uri: user.avatar_url,
            }}
          />
          <S.IconContainer onPress={() => updateAvatar()}>
            <FeatherIcon name="camera" color="#fff" size={25} />
          </S.IconContainer>
        </S.ImageContainer>
      </View>

      <S.Title>Editar perfil</S.Title>

      <Form initialData={user} ref={formRef} onSubmit={handleUpdateUser}>
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
