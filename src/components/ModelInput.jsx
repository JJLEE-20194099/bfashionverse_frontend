import React, { useEffect, useRef, useState } from "react";
import CommentComponents from "./CommentComponents";
import { Actionsheet, Button, Avatar, Input, Spinner } from "native-base";
import {
  Dimensions,
  KeyboardAvoidingView,
  Platform,
  ScrollView,
  Text,
  TextInput,
  View,
  Keyboard,
} from "react-native";
import { Padding, Purplerose1 } from "../constants";
import { observer } from "mobx-react";
import { useStore } from "../utils/context";
import { postRequestJson } from "../hooks/api";
import InputKeyboard from "../test/InputKeyboard";
import RBSheet from "react-native-raw-bottom-sheet";
const ModelInput = observer(() => {
  const {
    modelStore: { isModelInput, closeModelInput },
  } = useStore();
  const refRBSheet = useRef();
  useEffect(() => {
    if (isModelInput && refRBSheet.current) {
      refRBSheet.current.open();
    }
  }, [isModelInput]);
  return (
    <RBSheet
      ref={refRBSheet}
      closeOnDragDown={true}
      closeOnPressMask={false}
      onClose={closeModelInput}
      // height={500}
      customStyles={{
        wrapper: {
          backgroundColor: "transparent",
        },
        container: {
          backgroundColor: "blue",
          paddingBottom: 20,
          position: "relative",
          height: 50
        },
        draggableIcon: {
          backgroundColor: "pink",
          display: 'none'
        },
      }}
    >
      <Input />
    </RBSheet>
  );
});
export default ModelInput;
