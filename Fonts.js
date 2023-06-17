import { Font } from "expo";

export const registerFonts = async () => {
  await Font.loadAsync({
    "MontserratAlternates-Bold": require("./assets/fonts/MontserratAlternates-Bold.ttf"),
    "MontserratAlternates-Regular": require("./assets/fonts/MontserratAlternates-Regular.ttf"),
    "MontserratAlternates-SemiBold": require("./assets/fonts/MontserratAlternates-SemiBold.ttf"),
    // Add more font styles here if needed
  });
};
