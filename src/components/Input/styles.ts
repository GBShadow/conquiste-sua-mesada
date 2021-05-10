import styled, { css } from 'styled-components/native';
import { Feather as FeatherIcon } from '@expo/vector-icons/';


interface ContainerProps {
  isFocused: boolean;
  isErrored: boolean;
}

export const Container = styled.View<ContainerProps>`
  width: 100%;
  height: 60px;
  padding: 0 16px;
  background: #4D3795;
  border-radius: 10px;
  margin-bottom: 8px;
  border-width: 2px;
  border-color: #4D3795;
  flex-direction: row;
  align-items: center;
  ${(props) => props.isErrored
    && css`
      border-color: #c53030;
    `}
    
    ${(props) => props.isFocused
    && css`
      border-color: #04D361;
    `}
`;

export const TextInput = styled.TextInput`
  flex: 1;
  color: #fff;
  font-size: 16px;
  font-family: 'RobotoSlab_400Regular';
`;

export const Icon = styled(FeatherIcon)`
  margin-right: 16px;
`;