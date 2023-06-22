import React, { useState } from "react";
import emailjs from "@emailjs/browser";
// import { toast } from "react-hot-toast";
import {
  ScrollView,
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
} from "react-native";
import t from "../../../i18n/i18n";

const ContactUs = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [message, setMessage] = useState("");

  const serviceId = "service_qikwrd7";
  const templateId = "template_gpnjabj";

  emailjs.init("fVLokjsl-V-BCyU5i");

  function handleChange(event) {
    const target = event.target;
    const value = target.value;
    const name = target.name;

    if (name === "name") {
      setName(value);
    } else if (name === "email") {
      setEmail(value);
    } else if (name === "phone") {
      setPhone(value);
    } else if (name === "message") {
      setMessage(value);
    }
  }
  function sendEmail(event) {
    event.preventDefault();

    const templateParams = {
      from_name: name,
      from_email: email,
      phone: phone,
      message: message,
    };

    emailjs.send(serviceId, templateId, templateParams).then(
      (result) => {
        console.log(result.text);
        toast.success("thank u for contact us", { duration: 2000 });
        setName("");
        setEmail("");
        setPhone("");
        setMessage("");
      },
      (error) => {
        toast.error("error, please try again later", { duration: 2000 });
      }
    );
  }

  return (
    <ScrollView style={styles.container}>
      <View style={styles.textContainer}>
        <Text style={styles.title}>{t("Connect With Us")}</Text>
        <Text style={styles.subtitle}>
          {t("Whether you want some help or just to ask us a question, you are welcome to do it using the form below.")}
        </Text>
      </View>
      <View style={styles.formContainer}>
        <TextInput
          style={styles.input}
          placeholder={t("Full Name")}
          name="name"
          value={name}
          onChangeText={(value) => handleChange(value, "name")}
        />
        <TextInput
          style={styles.input}
          placeholder={t("Email")}
          name="email"
          value={email}
          onChangeText={(value) => handleChange(value, "email")}
        />
        <TextInput
          style={styles.input}
          placeholder={t("Phone Number")}
          name="phone"
          value={phone}
          onChangeText={(value) => handleChange(value, "phone")}
        />
        <TextInput
          style={styles.textarea}
          multiline
          placeholder={t("Your Message")}
          name="message"
          value={message}
          onChangeText={(value) => handleChange(value, "message")}
        />
        <TouchableOpacity style={styles.button} onPress={sendEmail}>
          <Text style={styles.buttonText}>{t("Send")}</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingVertical: 20,
    paddingHorizontal: 20,
    backgroundColor: "#fbf1f0",
  },
  textContainer: {
    alignItems: "center",
    padding: 20,
    marginBottom: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    color: "red",
    marginBottom: 10,
  },
  subtitle: {
    fontSize: 16,
    color: "#999",
    textAlign: "center",
  },
  formContainer: {
    marginBottom: 20,
  },
  input: {
    borderWidth: 1,
    borderColor: "#ddd",
    borderRadius: 5,
    paddingVertical: 10,
    paddingHorizontal: 15,
    marginBottom: 10,
  },
  textarea: {
    borderWidth: 1,
    borderColor: "#ddd",
    borderRadius: 5,
    padding: 15,
    marginBottom: 10,
    height: 100,
    textAlignVertical: "top",
  },
  button: {
    backgroundColor: "red",
    borderRadius: 5,
    paddingVertical: 10,
    paddingHorizontal: 15,
    alignItems: "center",
    alignSelf: "flex-end",
  },
  buttonText: {
    color: "#fff",
    fontWeight: "bold",
  },
});
export default ContactUs;
