// import React, { useRef, useState } from "react";
// import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
// //import { BsHospital } from "react-icons/bs";
// // import { AiOutlineUser } from "react-icons/ai";
// import { Link } from "react-router-dom";

// const Selection = ({ onSelection }) => {
//   const optionOne = useRef();
//   const optionTwo = useRef();

//   const [isOptionOneSelected, setIsOptionOneSelected] = useState(false);
//   const [isOptionTwoSelected, setIsOptionTwoSelected] = useState(false);

//   const toggleSelection = () => {
//     onSelection(false);
//   };

//   const handleOptionOne = () => {
//     if (!isOptionOneSelected && isOptionTwoSelected) {
//       setIsOptionOneSelected(true);
//       setIsOptionTwoSelected(false);
//     } else if (!isOptionOneSelected) {
//       setIsOptionOneSelected(true);
//     }
//   };

//   const handleOptionTwo = () => {
//     if (!isOptionTwoSelected && isOptionOneSelected) {
//       setIsOptionTwoSelected(true);
//       setIsOptionOneSelected(false);
//     } else if (!isOptionTwoSelected) {
//       setIsOptionTwoSelected(true);
//     }
//   };

//   return (
//     <>
//       <TouchableOpacity style={styles.overlay} onPress={toggleSelection} />
//       <View style={[styles.selection, { width: "75%" }]}>
//         <View style={styles.container}>
//           <Text style={styles.heading}>Choose Your Plan</Text>
//           <View style={styles.row}>
//             <TouchableOpacity
//               style={[
//                 styles.option,
//                 styles.rounded,
//                 { borderWidth: isOptionOneSelected ? 2 : 0 },
//               ]}
//               onPress={handleOptionOne}
//               ref={optionOne}
//             >
//               <Text style={styles.optionTitle}>Organization</Text>
//               <BsHospital size={64} color="#ee394a" />
//               <Text style={styles.optionDescription}>
//                 This Plan Include Hospitals and Blood Banks
//               </Text>
//               {isOptionOneSelected && (
//                 <Text style={styles.optionSelectedText}>
//                   * You are Following the Organizational Plan
//                 </Text>
//               )}
//             </TouchableOpacity>
//             <TouchableOpacity
//               style={[
//                 styles.option,
//                 styles.rounded,
//                 { borderWidth: isOptionTwoSelected ? 2 : 0 },
//               ]}
//               onPress={handleOptionTwo}
//               ref={optionTwo}
//             >
//               <Text style={styles.optionTitle}>User</Text>
//               <AiOutlineUser size={64} color="#ee394a" />
//               <Text style={styles.optionDescription}>
//                 This Plan Include Donors and Recipients
//               </Text>
//               {isOptionTwoSelected && (
//                 <Text style={styles.optionSelectedText}>
//                   * You are Following the Users Plan
//                 </Text>
//               )}
//             </TouchableOpacity>
//           </View>

//           {isOptionOneSelected && (
//             <View style={styles.buttons}>
//               <TouchableOpacity
//                 style={[styles.button, styles.secondaryButton]}
//                 onPress={toggleSelection}
//               >
//                 <Text style={styles.buttonText}>Cancel</Text>
//               </TouchableOpacity>
//               <Link to="signup-org">
//                 <TouchableOpacity style={[styles.button, styles.dangerButton]}>
//                   <Text style={styles.buttonText}>Sign Up</Text>
//                 </TouchableOpacity>
//               </Link>
//             </View>
//           )}

//           {isOptionTwoSelected && (
//             <View style={styles.buttons}>
//               <TouchableOpacity
//                 style={[styles.button, styles.secondaryButton]}
//                 onPress={toggleSelection}
//               >
//                 <Text style={styles.buttonText}>Cancel</Text>
//               </TouchableOpacity>
//               <Link to="signup-user">
//                 <TouchableOpacity style={[styles.button, styles.dangerButton]}>
//                   <Text style={styles.buttonText}>Sign Up</Text>
//                 </TouchableOpacity>
//               </Link>
//             </View>
//           )}
//         </View>
//       </View>
//     </>
//   );
// };

// const styles = StyleSheet.create({
//   overlay: {
//     ...StyleSheet.absoluteFillObject,
//     backgroundColor: "rgba(0, 0, 0, 0.5)",
//   },
//   selection: {
//     position: "absolute",
//     top: "50%",
//     left: "50%",
//     transform: [{ translateX: "-50%" }, { translateY: "-50%" }],
//     backgroundColor: "#fff",
//     padding: 20,
//     borderRadius: 10,
//   },
//   container: {
//     flex: 1,
//     alignItems: "center",
//   },
//   heading: {
//     marginBottom: 10,
//     fontSize: 20,
//     fontWeight: "bold",
//   },
//   row: {
//     flexDirection: "row",
//     marginBottom: 20,
//   },
//   option: {
//     flex: 1,
//     padding: 10,
//     alignItems: "center",
//   },
//   rounded: {
//     borderRadius: 10,
//   },
//   optionTitle: {
//     fontSize: 18,
//     fontWeight: "bold",
//     marginBottom: 10,
//   },
//   optionDescription: {
//     textAlign: "center",
//     marginBottom: 10,
//   },
//   optionSelectedText: {
//     color: "red",
//     marginBottom: 10,
//   },
//   buttons: {
//     flexDirection: "row",
//     justifyContent: "flex-end",
//   },
//   button: {
//     paddingHorizontal: 10,
//     paddingVertical: 5,
//     marginLeft: 5,
//     borderRadius: 5,
//   },
//   secondaryButton: {
//     backgroundColor: "#ccc",
//   },
//   dangerButton: {
//     backgroundColor: "red",
//   },
//   buttonText: {
//     color: "#fff",
//   },
// });

// export default Selection;
