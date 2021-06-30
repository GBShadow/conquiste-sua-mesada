import styled from "styled-components/native";

export const Container = styled.View`
  flex: 1;
  align-items: center;
  padding: 32px;
`;

export const GoBack = styled.TouchableOpacity`
  position: absolute;
  top: 50px;
  left: 32px;
`;

export const ImageContainer = styled.View`
  position: relative;
  width: 150px;
  justify-content: center;
  align-items: center;
`;

export const Avatar = styled.Image`
  width: 140px;
  height: 140px;
  border-radius: 70px;
`;

export const IconContainer = styled.TouchableOpacity`
  position: absolute;
  bottom: 0;
  right: 0;
  background-color: #04d361;
  width: 44px;
  height: 44px;
  border-radius: 22px;
  justify-content: center;
  align-items: center;
`;

export const Title = styled.Text`
  font-family: "RobotoSlab_700Bold";
  font-size: 22px;
  color: #fff;
  margin-bottom: 24px;
`;
