// import React from "react";
// import { View, Text, Image, TouchableOpacity, StyleSheet } from "react-native";
// import { Link } from "react-router-dom";
// import user from "assets/user.jpg";

// const UserProfile = ({ TokenData }) => {
//   console.log(TokenData);

//   return (
//     <View style={{ backgroundColor: "#fbf1f0" }}>
//       <View style={styles.container}>
//         <View style={styles.row}>
//           <View style={styles.col}>
//             <View style={styles.card}>
//               <View style={styles.cardBody}>
//                 <Image
//                   source={{
//                     uri: "https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-chat/ava3.webp",
//                   }}
//                   style={styles.avatar}
//                 />
//                 <Text style={styles.name}>{TokenData.firstName}</Text>
//                 <Text style={styles.text}>
//                   Blood Type: {TokenData.bloodType}
//                 </Text>
//                 <Text style={styles.text}>City: {TokenData.city}</Text>
//                 <View style={styles.buttonsContainer}>
//                   <Link style={styles.link} to="edit">
//                     <TouchableOpacity
//                       style={[styles.button, styles.dangerButton]}
//                     >
//                       <Text style={styles.buttonText}>Edit</Text>
//                     </TouchableOpacity>
//                   </Link>
//                   <TouchableOpacity
//                     style={[styles.button, styles.outlineDangerButton]}
//                   >
//                     <Text style={styles.buttonText}>Message</Text>
//                   </TouchableOpacity>
//                 </View>
//               </View>
//             </View>
//           </View>
//           <View style={styles.col}>
//             <View style={styles.card}>
//               <View style={styles.cardBody}>
//                 <View style={styles.infoRow}>
//                   <Text style={styles.infoLabel}>Full Name</Text>
//                   <Text style={styles.infoText}>
//                     {TokenData.firstName} {TokenData.lastName}
//                   </Text>
//                 </View>
//                 <View style={styles.divider} />
//                 <View style={styles.infoRow}>
//                   <Text style={styles.infoLabel}>Email</Text>
//                   <Text style={styles.infoText}>{TokenData.email}</Text>
//                 </View>
//                 <View style={styles.divider} />
//                 <View style={styles.infoRow}>
//                   <Text style={styles.infoLabel}>Phone</Text>
//                   <Text style={styles.infoText}>{TokenData.pNumber}</Text>
//                 </View>
//                 <View style={styles.divider} />
//                 <View style={styles.infoRow}>
//                   <Text style={styles.infoLabel}>Address</Text>
//                   <Text style={styles.infoText}>{TokenData.Address}</Text>
//                 </View>
//                 <View style={styles.divider} />
//                 <View style={styles.infoRow}>
//                   <Text style={styles.infoLabel}>Available to Donate</Text>
//                   <Text style={styles.infoText}>
//                     {TokenData.isVolunteer ? "Available" : "Not Available"}
//                   </Text>
//                 </View>
//               </View>
//             </View>
//             <TouchableOpacity style={styles.availabilityButton}>
//               <Text style={styles.buttonText}>
//                 Be Available for Volunteering
//               </Text>
//             </TouchableOpacity>
//           </View>
//         </View>
//       </View>
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     paddingVertical: 20,
//     paddingHorizontal: 15,
//   },
//   row: {
//     flexDirection: "row",
//     marginBottom: 20,
//   },
//   col: {
//     flex: 1,
//   },
//   card: {
//     marginBottom: 20,
//   },
//   cardBody: {
//     alignItems: "center",
//   },
//   avatar: {
//     width: 150,
//     height: 150,
//     borderRadius: 75,
//   },
//   name: {
//     fontSize: 20,
//     fontWeight: "bold",
//     marginTop: 10,
//     marginBottom: 3,
//   },
//   text: {
//     color: "gray",
//     marginBottom: 5,
//   },
//   buttonsContainer: {
//     flexDirection: "row",
//     justifyContent: "center",
//     marginTop: 10,
//   },
//   button: {
//     paddingHorizontal: 10,
//     paddingVertical: 5,
//     marginLeft: 5,
//     borderRadius: 5,
//   },
//   dangerButton: {
//     backgroundColor: "red",
//   },
//   outlineDangerButton: {
//     backgroundColor: "transparent",
//     borderColor: "red",
//     borderWidth: 1,
//   },
//   buttonText: {
//     color: "#fff",
//   },
//   infoRow: {
//     flexDirection: "row",
//   },
//   infoLabel: {
//     width: 80,
//     marginBottom: 10,
//   },
//   infoText: {
//     marginBottom: 10,
//     flex: 1,
//   },
//   divider: {
//     borderBottomWidth: 1,
//     borderBottomColor: "#ccc",
//     marginBottom: 10,
//   },
//   availabilityButton: {
//     marginVertical: 10,
//     alignSelf: "center",
//     paddingHorizontal: 20,
//     paddingVertical: 10,
//     backgroundColor: "red",
//     borderRadius: 5,
//   },
// });

// export default UserProfile;
