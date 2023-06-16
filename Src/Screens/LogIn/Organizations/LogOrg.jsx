import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
} from "react-native";
import axios from "axios";
import { useNavigation } from "@react-navigation/native";
import routes from "../../../Common/routes";

const LogOrg = () => {
  const [orgCode, setOrgCode] = useState("");
  const [password, setPassword] = useState("");
  const { navigate } = useNavigation();
  const handleOrgCode = (code) => {
    setOrgCode(code);
  };

  const handlePassword = (pass) => {
    setPassword(pass);
  };

  const handleSubmit = () => {
    if (orgCode.trim().length !== 0 && password.trim().length !== 0) {
      axios.get("http://localhost:3000/org").then((res) => {
        const orgLogin = res.data.filter((elem) => {
          return (
            elem.OrganizationCode === orgCode && elem.password === password
          );
        });
        if (orgLogin) {
          console.warn("done");
          navigate(routes.OrgProfile);
        } else {
          console.warn("error");
        }
        // console.warn(orgLogin);
      });
    }
  };

  return (
    <View style={styles.login_org}>
      <View style={styles.login_org_content}>
        <Text style={styles.heading}>Log In - Organizations</Text>
        <View style={styles.form}>
          <View style={styles.formGroup}>
            <Text style={styles.label}>Organization Code</Text>
            <TextInput
              style={styles.input}
              onChangeText={handleOrgCode}
              value={orgCode}
              placeholder="Organization Code"
              placeholderTextColor="#888"
            />
          </View>
          <View style={styles.formGroup}>
            <Text style={styles.label}>Password</Text>
            <TextInput
              style={styles.input}
              onChangeText={handlePassword}
              value={password}
              secureTextEntry
              placeholder="Password"
              placeholderTextColor="#888"
            />
          </View>

          <TouchableOpacity style={styles.signInButton} onPress={handleSubmit}>
            <Text style={styles.signInButtonText}>Sign In</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  login_org: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#fbf1f0",
  },
  login_org_content: {
    width: "80%",
  },
  heading: {
    textAlign: "center",
    fontSize: 20,
    fontWeight: "bold",
    color: "red",
    marginBottom: 20,
  },
  form: {
    marginBottom: 20,
  },
  formGroup: {
    marginBottom: 15,
  },
  label: {
    fontSize: 16,
    marginBottom: 5,
  },
  input: {
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 5,
    padding: 10,
    fontSize: 16,
  },
  signInButton: {
    backgroundColor: "red",
    borderRadius: 5,
    padding: 15,
    alignItems: "center",
  },
  signInButtonText: {
    color: "white",
    fontSize: 16,
    fontWeight: "bold",
  },
});

export default LogOrg;
