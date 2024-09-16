// @ts-nocheck
import React from "react";
import { render, fireEvent } from "@testing-library/react-native";
import ButtonBase from "./ButtonBase";

describe("ButtonBase Component", () => {
  const mockOnPress = jest.fn();

  it("should render correctly with the given title", () => {
    const { getByText } = render(
      <ButtonBase title="Click me" onPress={mockOnPress} />
    );

    expect(getByText("Click me")).toBeTruthy();
  });

  it("should call the onPress handler when pressed", () => {
    const { getByText } = render(
      <ButtonBase title="Click me" onPress={mockOnPress} />
    );

    fireEvent.press(getByText("Click me"));

    expect(mockOnPress).toHaveBeenCalledTimes(1);
  });
});
