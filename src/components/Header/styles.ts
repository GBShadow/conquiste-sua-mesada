import styled from 'styled-components/native';
import { Feather as FeatherIcon } from "@expo/vector-icons/";

export const Icon = styled(FeatherIcon)`
`;

export const HeaderContainer = styled.View`
  padding: 32px 16px;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  background-color: #4d3795;
`;

export const PrincipleText = styled.Text`
  font-family: "RobotoSlab_500Medium";
  font-size: 18px;
  color: #fff;
  margin-bottom: 8px;
`;

export const SecondaryText = styled.Text`
  font-family: "RobotoSlab_500Medium";
  font-size: 18px;
  color: #04d361;
`;

export const Avatar = styled.Image`
  width: 64px;
  height: 64px;
  border-radius: 32px;
`;