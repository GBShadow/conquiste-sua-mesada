import React, { useCallback, useEffect, useState } from "react";
import CheckBox from "@react-native-community/checkbox";
import api from "../../services/api";
import { useAuth } from "../../hooks/auth";

type Props = {
  active: boolean;
  todoId: number;
};

const CheckBoxComponent = ({ active, todoId }: Props) => {
  const [completed, setCompleted] = useState(active);

  const { token } = useAuth();

  useEffect(() => {
    (async () => {
      try {
        await api.put(
          `todos/${todoId}`,
          { active: completed },
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );
      } catch (error) {
        console.log(error);
      }
    })();
  }, [completed]);

  return (
    <CheckBox
      value={completed}
      onValueChange={() => setCompleted(!completed)}
      tintColors={{ true: "#04d361" }}
    />
  );
};

export default CheckBoxComponent;
