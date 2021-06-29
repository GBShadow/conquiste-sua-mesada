import styled from "styled-components/native";
import { Feather as FeatherIcon } from "@expo/vector-icons/";
import { Form } from "@unform/mobile";

export const Container = styled.View`
  flex: 1;
`;

export const Main = styled.View`
  flex: 1;
  padding-top: 16px;
`;

export const DetailsText = styled.Text`
  font-family: "RobotoSlab_700Bold";
  font-size: 22px;
  color: #fff;
  margin-top: 16px;
  text-align: center;
`;

export const Name = styled.Text`
  color: #fff;
  font-family: "RobotoSlab_400Regular";
  font-size: 24px;
  text-align: center;
`;

export const Icon = styled(FeatherIcon)`
  margin-right: 8px;
`;

export const ToDoContainer = styled.View`
  flex: 1;
  padding: 16px 24px;
`;

export const FormComponent = styled(Form)`
  flex: 1;
`;

export const ToDoList = styled.FlatList.attrs({
  showsVerticalScrollIndicator: false,
})`
  flex: 1;
`;

export const Separator = styled.View`
  margin-top: 8px;
  margin-bottom: 16px;
  background-color: #999999;
  height: 1px;
`;

export const ButtonAddToDo = styled.TouchableOpacity`
  width: 100%;
  height: 60px;
  border-color: #04d361;
  border-width: 3px;
  border-style: solid;
  border-radius: 10px;
  margin-top: 8px;
  justify-content: center;
  align-items: center;
`;

export const ButtonText = styled.Text`
  font-family: "RobotoSlab_500Medium";
  color: #fff;
  font-size: 18px;
`;

export const ButtonContainer = styled.View``;
