import styled from "styled-components/native";
import { Feather as FeatherIcon } from "@expo/vector-icons/";

export const Container = styled.View`
  flex: 1;
`;

export const HeaderContainer = styled.View`
  padding: 32px 24px;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  background-color: #4d3795;
`;

export const TextContainer = styled.View``;

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

export const MenuContainer = styled.View``;

export const AvatarContainer = styled.View``;

export const Avatar = styled.Image`
  width: 64px;
  height: 64px;
  border-radius: 32px;
`;

export const MainContainer = styled.View`
  flex: 1;
  padding: 24px;
`;

export const Title = styled.Text`
  font-family: "RobotoSlab_700Bold";
  font-size: 22px;
  color: #fff;
  margin-bottom: 24px;
`;

export const ListContainer = styled.FlatList.attrs({
  showsVerticalScrollIndicator: false
})`
  flex: 1;
`;

export const ItemContainer = styled.TouchableOpacity`
  flex-direction: row;
  align-items: center;
  padding: 20px 14px;
  margin-bottom: 24px;
  background-color: #8d79cd;
  border-radius: 8px;
`;

export const DetailsContainer = styled.View`
  margin-left: 16px;
`;

export const Name = styled.Text`
  color: #fff;
  font-family: "RobotoSlab_400Regular";
  font-size: 16px;
`;

export const InfoContainer = styled.View`
  margin-top: 16px;
`;

export const Info = styled.View`
  flex-direction: row;
  align-items: center;
  margin-bottom: 6px;
`;

export const Icon = styled(FeatherIcon)`
  margin-right: 8px;
`;

export const InfoText = styled.Text`
  color: #fff;
  font-family: "RobotoSlab_400Regular";
  font-size: 12px;
`;

export const ButtonContainer = styled.View`
  margin-top: 16px;
`;
