import React from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import Modal from "react-native-modal";
import { AntDesign } from "@expo/vector-icons";
import fontSize from "../../../utils/constant/fontSize";

const ModalNotification = ({ isVisible, message, onClose }) => {
  return (
    <Modal isVisible={isVisible}>
      <View style={styles.modalContainer}>
        <View style={styles.modalContent}>
          <TouchableOpacity onPress={onClose} style={styles.close}>
            <AntDesign name="close" size={30} color="#ff7337" />
          </TouchableOpacity>
          <Text
            style={{
              zIndex: 2,
              fontSize: fontSize.h2,
              marginTop: 40,
              color: "green",
            }}
          >
            {message}
          </Text>
          <AntDesign
            style={styles.checkIcon}
            name="check"
            size={80}
            color="green"
          />
        </View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  modalContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  modalContent: {
    backgroundColor: "white",
    paddingVertical: 40,
    paddingHorizontal: 30,
    borderRadius: 10,
    alignItems: "center",
    position: "relative",
    width: "auto",
    height: 180,
  },
  close: {
    width: 40,
    height: 40,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 5,
    top: 5,
    position: "absolute",
    right: 10,
  },
  closeButton: {
    marginTop: 90,
  },
  checkIcon: {
    position: "absolute",
    top: 40,
    alignSelf: "center",
    backgroundColor: "green",
    opacity: 0.3,
    borderRadius: 50,
    padding: 10,
    zIndex: 0,
  },
});

export default ModalNotification;
