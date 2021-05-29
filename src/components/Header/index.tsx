import { useNavigation } from '@react-navigation/core';
import React, { useEffect, useState } from 'react';
import { View } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';

import avatarImg from '../../assets/avatar.png';

import * as S from './styles'

interface HeaderProps {
  type?: 'dash'
}

const Header: React.FC<HeaderProps> = ({ type }) => {
  const navigation = useNavigation();

  const [title, setTitle] = useState('')
  const [showButton, setShowButton] = useState(true)

  useEffect(() => {
    if (type === 'dash') {
      setTitle('Bem vindo,')
      setShowButton(false)
    } else {
      setTitle('Conquiste sua mesada')
    }
  }, [])

  return (
    <S.HeaderContainer>
      {showButton ? (
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <S.Icon name="arrow-left" color="#fff" size={30} />
        </TouchableOpacity> 
      ): (
        <View />
      )}
      <View>
        <S.PrincipleText>{title}</S.PrincipleText>
        <S.SecondaryText>Gustavo Bezerra Sombra</S.SecondaryText>
      </View>
      <View>
        <View>
          <S.Avatar source={avatarImg} />
        </View>
      </View>
    </S.HeaderContainer>
  )
}

export default Header;