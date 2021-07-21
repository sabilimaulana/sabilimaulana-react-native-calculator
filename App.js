import { StatusBar } from "expo-status-bar";
import React from "react";
import Container from "./src/Components/Container";
import CalculatorOne from "./src/Screens/CalculatorOne";

export default function App() {
  return (
    <Container>
      <CalculatorOne />
      {/* <StatusBar style="auto" /> */}
    </Container>
  );
}
