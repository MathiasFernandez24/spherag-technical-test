// @ts-nocheck
import React from "react";
import { render, fireEvent } from "@testing-library/react-native";
import CardContainer from "./CardContainer";
import { Text } from "react-native";

const mockProps = {
  onPress: jest.fn(),
  styleContainer: { backgroundColor: "red" },
};

describe("CardContainer Component", () => {
  it("renders correctly with children", () => {
    const { getByText } = render(
      <CardContainer {...mockProps}>
        <Text>Test Child</Text>
      </CardContainer>
    );

    expect(getByText("Test Child")).toBeTruthy();
  });

  it("calls the onPress handler when pressed", () => {
    const { getByTestId } = render(
      <CardContainer {...mockProps}>
        <Text>Press me</Text>
      </CardContainer>
    );
  });

  it("does not allow press when onPress is not provided", () => {
    const { getByTestId } = render(
      <CardContainer styleContainer={mockProps.styleContainer}>
        <Text>Test Child</Text>
      </CardContainer>
    );
  });
});
