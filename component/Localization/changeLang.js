import React from 'react';
import { Text, View, Picker } from 'react-native';
import { Trans, useTranslation } from 'react-i18next';

const ChangeLang = () => {
    const {i18n, t} = useTranslation();

    const changeLang = (e)=>{
      i18n.changeLanguage(e.target.value);
    }
    return (
        <View style={{flexDirection: "row", alignItems: "center", justifyContent: "space-evenly"}}>
            <Text>{t("Change Language")}</Text>
            <Picker
            onValueChange={changeLang}
            style={{color: "black"}}
          >
            <Picker.Item label="English (en)" value="en" />
            <Picker.Item label="العربية (ar)" value="ar" />
          </Picker>
        </View>
    );
};

export default ChangeLang;