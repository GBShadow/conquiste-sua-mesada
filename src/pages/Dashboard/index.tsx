import React from 'react';
import { useNavigation } from '@react-navigation/native'

import Button from '../../components/Button';
import avatarImg from '../../assets/avatar.png';

import * as S from './styles';
import Header from '../../components/Header';

const Dashboard: React.FC = () => {
  const navigation = useNavigation();

  return (
    <S.Container>
      <Header type="dash" />
      <S.MainContainer>
        <S.Title>Criança/Adolescente</S.Title>
        <S.ListContainer
          data={[1, 2, 3, 4]}
          renderItem={(item) => (
            <S.ItemContainer
              key={Number(item)}
              onPress={() => navigation.navigate('Details')}
            >
              <>
                <S.Avatar source={avatarImg} />
                <S.DetailsContainer>
                  <S.Name>Pedro Carvalho Sombra</S.Name>
                  <S.InfoContainer>
                    <S.Info>
                      <S.Icon name="check-square" size={16} color='#04D361' />
                      <S.InfoText>Tarefas - 5 de 5</S.InfoText>
                    </S.Info>
                    <S.Info>
                      <S.Icon name='dollar-sign' size={16} color='#04D361' />
                      <S.InfoText>Mesada: R$ 150,00 - Atual: RS150,00</S.InfoText>
                    </S.Info>
                  </S.InfoContainer>
                </S.DetailsContainer>
              </>
            </S.ItemContainer>
          )}
        />
        <S.ButtonContainer>
          <Button>Adicionar criança/adolescente</Button>
        </S.ButtonContainer>
      </S.MainContainer>
    </S.Container>
  );
};

export default Dashboard;