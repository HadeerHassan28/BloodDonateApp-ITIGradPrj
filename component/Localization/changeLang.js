import React from "react";
import { Button, Text, View } from "react-native";
import { Trans, useTranslation } from "react-i18next";
import { Picker } from "@react-native-picker/picker";

const ChangeLang = () => {
  const { i18n, t } = useTranslation();

  const changeLang = (e) => {
    i18n.changeLanguage("ar");
  };
  return (
    <View
      style={{
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-evenly",
      }}
    >
      <Button onPress={changeLang} title="change"></Button>
      <Text>{t("Change Language")}</Text>
      <Picker onValueChange={changeLang} style={{ color: "black" }}>
        <Picker.Item label="English (en)" value="en" />
        <Picker.Item label="العربية (ar)" value="ar" />
      </Picker>
    </View>
  );
};

export default ChangeLang;
