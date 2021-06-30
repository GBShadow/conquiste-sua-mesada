import React, { useCallback, useEffect, useRef, useState } from "react";
import { Alert, View, TextInput, Platform } from "react-native";
import { Feather as FeatherIcon } from "@expo/vector-icons/";

// import ImagePicker from "react-native-image-picker";
import * as ImagePicker from "expo-image-picker";
// import DocumentPicker from "react-native-document-picker";

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

  const [image, setImage] = useState<string | null>(null);

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

  // useEffect(() => {
  //   (async () => {
  //     if (Platform.OS !== "web") {
  //       const { status } =
  //         await ImagePicker.requestMediaLibraryPermissionsAsync();
  //       if (status !== "granted") {
  //         alert("Sorry, we need camera roll permissions to make this work!");
  //       }
  //     }
  //   })();
  // }, []);

  // const updateAvatar = async () => {
  //   let result = await ImagePicker.launchImageLibraryAsync({
  //     mediaTypes: ImagePicker.MediaTypeOptions.Images,
  //     quality: 1,
  //     allowsEditing: false,
  //     base64: true,
  //   });

  //   if (result.cancelled) {
  //     return;
  //   }

  //   console.log(result.base64);

  // const source = {
  //   name: `avatar-${Date.now()}.jpeg`,
  //   type: "image/jpeg",
  //   uri: result.uri,
  // };

  // console.log(source);

  // setImage(source.uri);

  //   const data = new FormData();

  //   data.append("avatar", result.base64);

  //   api
  //     .patch("/users/avatar", data, {
  //       headers: {
  //         Authorization: `Bearer ${token}`,
  //       },
  //     })
  //     .then((response) => {
  //       Alert.alert("Avatar atualizada!");
  //     })
  //     .catch((error) => {
  //       Alert.alert(`Error ao atualizar avatar`, error);
  //     });
  // };

  // const updateAvatar = useCallback(async () => {
  //   ImagePicker.showImagePicker({}, (response) => {
  //     console.log(response.uri);
  //   });
  // }, []);

  return (
    <S.Container>
      <S.GoBack onPress={() => navigation.goBack()}>
        <FeatherIcon name="arrow-left" size={30} color="#fff" />
      </S.GoBack>
      <View style={{ height: 180 }}>
        <S.ImageContainer>
          <S.Avatar source={image ? { uri: image } : avatar} />
          <S.IconContainer onPress={() => {}}>
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
