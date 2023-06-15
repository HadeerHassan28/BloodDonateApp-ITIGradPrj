import { Platform, StyleSheet } from "react-native";
import colors from "../../Common/Colors";
import { color } from "react-native-reanimated";
import { Colors } from "react-native/Libraries/NewAppScreen";

const styles = StyleSheet.create({
  container: {
    marginTop: Platform.OS === "android" ? 30 : 0,
    flex: 1,
    padding: 20,
    backgroundColor: "#fbf1f0",
  },
  row: {
    flexDirection: "row",
    alignItems: "center",
  },
  col: {
    flex: 1,
  },
  justifyContentCenter: {
    justifyContent: "center",
  },

  heading: {
    color: colors.mainColor,
    fontSize: 24,
    textAlign: "center",
    fontWeight: "bold",
    marginBottom: 10,
  },
  paragraph: {
    fontSize: 20,
    textAlign: "center",
    marginBottom: 10
  },
  searchBox: {
    padding: 15,
    backgroundColor: "#ffffff",
    marginTop: 50,
    borderRadius: 5,
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "space-around",
    alignItems: "center",
    border: "1px solid gray",
},
  button: {
    backgroundColor: colors.mainColor,
    paddingVertical: 15,
    borderRadius: 5,
    marginTop: 20,
  },
  buttonText: {
    color: "#fff",
    fontSize: 16,
    textAlign: "center",
  },
  tableTitle: {
    color: colors.mainColor,
    fontSize: 13,
    marginBottom: 13,
    textAlign: "center",
    fontWeight: "bold",
    textAlignVertical: "center",
  },
  tableCell: {
    textAlign: "center",
  },
  title: {
    color: colors.mainColor,
    fontSize: 16,
    marginBottom: 16,
    textAlign: "center",
    fontWeight: "bold",
  },
  navigateRes:{
    width: "30px",
    height: "30px",
    textAlign: "center",
    border: "1px solid grey",
    borderRadius: "15px",
    textAlignVertical: "center",
    margin: 5,
},
profile:
{ 
    width: "8vw", 
    height: "8vw", 
    borderRadius: "4vw" 
},
disNone:{
    display: "none",
},
disBlock:{
    display: "block",
    textAlign: "center",
    color: colors.mainColor,
},
filterWith :{
    color: colors.mainColor,
    fontWeight: "bold",
},
select :{
    color: gray,
    borderRadius: "5px",
    border: "1px solid gray",
    height: "38px",
},
customInput: {
    width: "150px",
    height: "38px",
    borderRadius: "5px",
    border: "1px solid gray",
}
});

export default styles;
