import React from 'react';
import { Text, View, Picker } from 'react-native';
import { t, changeLanguage} from "../../i18n/i18n"

const ChangeLang = () => {
    const changeLang = (e)=>{
        changeLanguage(e.target.value);
    }
    return (
        <View>
            <Text>{t("Change Language")}</Text>
            <Picker
            onValueChange={changeLang}
          >
            <Picker.Item label="English (en)" value="en" />
            <Picker.Item label="العربية (ar)" value="ar" />
          </Picker>
        </View>
    );
};

export default ChangeLang;