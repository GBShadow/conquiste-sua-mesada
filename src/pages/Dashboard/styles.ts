import styled from "styled-components/native";
import { Feather as FeatherIcon } from "@expo/vector-icons/";
import { RectButton } from "react-native-gesture-handler";

export const Container = styled.View`
  flex: 1;
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
  showsVerticalScrollIndicator: false,
})`
  flex: 1;
`;

export const Content = styled.View`
  flex-direction: row;
  align-items: center;
  background-color: #8d79cd;
  border-radius: 8px;
  margin-bottom: 24px;
  padding: 5px;
  justify-content: space-between;
`;

export const DeleteButton = styled.TouchableOpacity`
  height: 100%;
  justify-content: flex-start;
  padding-top: 10px;
`;

export const ItemContainer = styled.TouchableOpacity`
  align-items: center;
  justify-content: space-between;
`;

export const DetailsContainer = styled.View`
  margin-left: 16px;
  padding: 5px;
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

export const IconButton = styled(FeatherIcon)``;

export const InfoText = styled.Text`
  color: #fff;
  font-family: "RobotoSlab_400Regular";
  font-size: 12px;
`;

export const Button = styled.TouchableOpacity`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #04d361;
  height: 48px;
  width: 48px;
  border-radius: 24px;
  position: absolute;
  bottom: 20px;
  right: 20px;
`;
