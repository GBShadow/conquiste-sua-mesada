import React, { useCallback, useRef } from 'react';
import {
  Image,
  KeyboardAvoidingView,
  Platform,
  View,
  ScrollView,
  TextInput,
  Alert,
} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { Feather as Icon } from '@expo/vector-icons';
import * as Yup from 'yup';

import { Form } from '@unform/mobile';
import { FormHandles } from '@unform/core';

import { useAuth } from '../../hooks/auth';

import getValidationErrors from '../../utils/getValidationErrors';

import Input from '../../components/Input';
import Button from '../../components/Button';

import {
  Container,
  Title,
  BackToSign,
  BackToSignText,
} from './styles';

import logoImg from '../../assets/logo.png';

export default function SignIn() {
  const formRef = useRef<FormHandles>(null);

  const navigation = useNavigation();

  const { signIn, user } = useAuth();


  interface SignInFormData {
    email: string;
    password: string;
  }

  const handleSignIn = useCallback(
    async (data: SignInFormData) => {
      try {
        formRef.current?.setErrors({});

        const schema = Yup.object().shape({
          email: Yup.string()
            .required('E-mail obrigatório')
            .email('Digite um e-mail válido'),
        });

        await schema.validate(data, {
          abortEarly: false,
        });

        await signIn({
          email: data.email,
          password: data.password,
        });
      } catch (err) {
        if (err instanceof Yup.ValidationError) {
          const errors = getValidationErrors(err);

          formRef.current?.setErrors(errors);

          return;
        }

        Alert.alert(
          'Erro ao tentar recuperar o e-mail',
          'Ocorreu um erro ao fazer a recuperação, cheque o e-mail e tente novamente',
        );
      }
    },
    [signIn],
  );

  return (
    <KeyboardAvoidingView
      style={{ flex: 1 }}
      behavior={Platform.OS === 'ios' ? 'padding' : undefined}
      enabled
    >
      <Container>
        <Image source={logoImg} />

        <View>
          <Title>Esqueci minha senha</Title>
        </View>

        <Form ref={formRef} onSubmit={handleSignIn}>
          <Input
            autoCorrect={false}
            autoCapitalize="none"
            keyboardType="email-address"
            name="email"
            icon="mail"
            placeholder="E-mail"
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
          Recuperar
          </Button>

        <BackToSign onPress={() => navigation.goBack()}>
          <Icon name="arrow-left" size={20} color="#fff" />
          <BackToSignText>Voltar para logon</BackToSignText>
        </BackToSign>
      </Container>
    </KeyboardAvoidingView>
  );
};
