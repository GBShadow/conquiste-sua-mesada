import React, { useEffect, useState } from 'react';

import avatarImg from '../../assets/avatar.png';

import * as S from './styles'

interface HeaderProps {
  type?: 'dash'
}

const Header: React.FC<HeaderProps> = ({ type }) => {
  const [title, setTitle] = useState('')

  useEffect(() => {
  if(type === 'dash') {
    setTitle('Bem vindo,')
  } else {
    setTitle('Conquiste sua mesada')
  }
  }, [])

  return (
    <S.HeaderContainer>
      <S.TextContainer>
        <S.PrincipleText>{title}</S.PrincipleText>
        <S.SecondaryText>Gustavo Bezerra Sombra</S.SecondaryText>
      </S.TextContainer>
      <S.MenuContainer>
        <S.AvatarContainer>
          <S.Avatar source={avatarImg} />
        </S.AvatarContainer>
      </S.MenuContainer>
    </S.HeaderContainer>
  )
}

export default Header;