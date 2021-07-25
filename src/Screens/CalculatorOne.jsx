import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  Dimensions,
  TouchableOpacity,
} from "react-native";

const windowWidth = Dimensions.get("window").width;
// const windowHeight = Dimensions.get("window").height;

const CalculatorOne = () => {
  const [inputData, setInputData] = useState("");
  const [history, setHistory] = useState("");

  const handlePress = (value) => {
    try {
      if (inputData.length < 13) {
        if (value === "=") {
          const result = eval(inputData).toString();
          setHistory(inputData + "=" + result);
          setInputData(result);
        } else {
          setInputData(inputData + value);
        }
      }
    } catch (error) {
      return;
    }
  };

  return (
    <View style={styles.content}>
      <View style={styles.calculator}>
        <Text style={styles.title}>Display</Text>
        <Text style={styles.history}>{history}</Text>

        <Text style={styles.display}>{inputData}</Text>
        <View style={styles.calculatorButtonWrapper}>
          <Text
            style={styles.calculatorButtonDelete}
            onPress={() => {
              setInputData("");
              setHistory("");
            }}
          >
            C
          </Text>
          <Text
            style={styles.calculatorButtonDelete}
            onPress={() => setInputData(inputData.slice(0, -1))}
          >
            delete
          </Text>
        </View>
        <View style={styles.calculatorButtonWrapper}>
          <ButtonCalculator value="1" handlePress={handlePress} />
          <ButtonCalculator value="2" handlePress={handlePress} />
          <ButtonCalculator value="-" handlePress={handlePress} operator />
          <ButtonCalculator value="+" handlePress={handlePress} operator />
        </View>

        <View style={styles.calculatorButtonWrapper}>
          <ButtonCalculator value="3" handlePress={handlePress} />
          <ButtonCalculator value="4" handlePress={handlePress} />
          <ButtonCalculator value="/" handlePress={handlePress} operator />
          <ButtonCalculator value="*" handlePress={handlePress} operator />
        </View>

        <View style={styles.calculatorButtonWrapper}>
          <ButtonCalculator value="5" handlePress={handlePress} />
          <ButtonCalculator value="6" handlePress={handlePress} />
          <ButtonCalculator value="%" handlePress={handlePress} operator />
          <ButtonCalculator value="=" handlePress={handlePress} operator />
        </View>

        <View style={styles.calculatorButtonWrapper}>
          <ButtonCalculator value="7" handlePress={handlePress} />
          <ButtonCalculator value="8" handlePress={handlePress} />
          <ButtonCalculator value="9" handlePress={handlePress} />
          <ButtonCalculator value="0" handlePress={handlePress} />
        </View>
      </View>
    </View>
  );
};

const ButtonCalculator = ({ value, handlePress, operator }) => {
  return (
    <TouchableOpacity
      activeOpacity={0.5}
      onPress={() => {
        handlePress(value);
      }}
    >
      <Text
        style={
          operator
            ? styles.calculatorButtonOperator
            : styles.calculatorButtonNumber
        }
      >
        {value}
      </Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  content: {
    flex: 1,
    width: "100%",
    backgroundColor: "#FFA0A0",
    paddingTop: 30,
    paddingHorizontal: 22,
  },
  title: {
    fontWeight: "bold",
    color: "#fff",
    fontSize: 24,
    marginLeft: 23,
  },
  history: {
    fontWeight: "bold",
    color: "#fff",
    fontSize: 18,
    marginBottom: 6,
    marginRight: 10,
    textAlign: "right",
  },
  display: {
    borderColor: "#000",
    height: (windowWidth - 80) * 0.25,
    backgroundColor: "#fff",
    borderRadius: 10,
    fontSize: 50,
    fontWeight: "700",
    textAlign: "right",
    textAlignVertical: "center",
    paddingHorizontal: 20,
    marginBottom: 30,
  },
  calculatorButtonWrapper: {
    width: "100%",
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 12,
  },
  calculatorButtonNumber: {
    width: (windowWidth - (44 + 36)) * 0.25,
    height: (windowWidth - (44 + 36)) * 0.25,
    backgroundColor: "#FF5757",
    textAlign: "center",
    textAlignVertical: "center",
    borderRadius: 10,
    fontSize: 50,
    color: "#fff",
    fontWeight: "700",
  },
  calculatorButtonOperator: {
    width: (windowWidth - (44 + 36)) * 0.25,
    height: (windowWidth - (44 + 36)) * 0.25,
    backgroundColor: "#930707",
    textAlign: "center",
    textAlignVertical: "center",
    borderRadius: 10,
    fontSize: 50,
    color: "#fff",
    fontWeight: "700",
  },
  calculatorButtonDelete: {
    width: (windowWidth - (44 + 12)) * 0.5,
    height: (windowWidth - (44 + 36)) * 0.25,
    backgroundColor: "#930707",
    textAlign: "center",
    textAlignVertical: "center",
    borderRadius: 10,
    fontSize: 50,
    color: "#fff",
    fontWeight: "700",
  },
});

export default CalculatorOne;
