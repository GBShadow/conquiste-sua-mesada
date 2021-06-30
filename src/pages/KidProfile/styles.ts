import styled from "styled-components/native";
import { Feather as FeatherIcon } from "@expo/vector-icons/";

export const Container = styled.View`
  flex: 1;
`;

export const Main = styled.View`
  flex: 1;
`;

export const DetailsText = styled.Text`
  font-family: "RobotoSlab_700Bold";
  font-size: 22px;
  color: #fff;
  margin-top: 16px;
  text-align: center;
`;

export const MainHeaderContainer = styled.View`
  flex-direction: row;
  align-items: center;
  padding: 20px;
  margin-top: 16px;
  border-radius: 8px;
`;

export const Avatar = styled.Image`
  width: 64px;
  height: 64px;
  border-radius: 32px;
`;

export const DetailsContainer = styled.View`
  margin-left: 16px;
`;

export const Name = styled.Text`
  color: #fff;
  font-family: "RobotoSlab_400Regular";
  font-size: 18px;
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
  font-size: 14px;
`;

export const ToDoContainer = styled.View`
  flex: 1;
  padding: 16px 24px;
`;

export const ToDoTitle = styled.Text`
  font-family: "RobotoSlab_700Bold";
  font-size: 20px;
  color: #fff;
  margin-bottom: 24px;
  text-align: center;
`;

export const ToDoList = styled.FlatList.attrs({
  showsVerticalScrollIndicator: false,
})`
  flex: 1;
`;

export const Content = styled.View`
  flex-direction: row;
  padding: 24px;
  align-items: center;
  justify-content: space-between;
  background-color: #4d3795;
  margin-bottom: 16px;
  border-radius: 10px;
`;

export const ToDoItem = styled.View`
  flex-direction: row;
  align-items: center;
`;

export const ToDoInfo = styled.View`
  margin-left: 16px;
`;

export const ToDoName = styled.Text`
  color: #fff;
  font-family: "RobotoSlab_400Regular";
  font-size: 16px;
`;

export const ToDoValue = styled.Text`
  color: #04d361;
  font-family: "RobotoSlab_400Regular";
  font-size: 16px;
`;

export const ButtonContainer = styled.View`
  /* margin-top: 16px; */
`;

export const IconButton = styled(FeatherIcon)``;

export const DeleteButton = styled.TouchableOpacity`
  height: 100%;
  justify-content: flex-start;
  padding-top: 10px;
`;
