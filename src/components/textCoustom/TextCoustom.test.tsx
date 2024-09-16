// @ts-nocheck
import React from "react";
import { render, fireEvent } from "@testing-library/react-native";
import TextCoustom from "./TextCoustom";
import { colors } from "../../theme/colors";
import { fontStyles } from "../../theme/fonts.styles";

describe("TextCoustom Component", () => {
  it("should render correctly with default props", () => {
    const { getByText } = render(<TextCoustom text="Default Text" />);
    expect(getByText("Default Text")).toBeTruthy();
  });

  it("should render text with custom color", () => {
    const { getByText } = render(
      <TextCoustom text="Custom Color Text" textColor="red" />
    );
    const textElement = getByText("Custom Color Text");
    expect(textElement.props.style).toEqual(
      expect.objectContaining({ color: "red" })
    );
  });

  it("should apply custom font style", () => {
    const fontStyleKey = "M_Bold";
    const { getByText } = render(
      <TextCoustom text="Bold Text" fontStyle={fontStyleKey} />
    );
    const textElement = getByText("Bold Text");
    expect(textElement.props.style).toEqual(
      expect.objectContaining(fontStyles[fontStyleKey])
    );
  });

  it("should render text with custom styles", () => {
    const customStyle = { fontSize: 20, fontWeight: "bold" };
    const { getByText } = render(
      <TextCoustom text="Styled Text" textStyles={customStyle} />
    );
    const textElement = getByText("Styled Text");
    expect(textElement.props.style).toEqual(
      expect.objectContaining(customStyle)
    );
  });

  it("should call onPress handler when pressed", () => {
    const mockOnPress = jest.fn();
    const { getByText } = render(
      <TextCoustom text="Press Me" onPress={mockOnPress} />
    );
    fireEvent.press(getByText("Press Me"));
    expect(mockOnPress).toHaveBeenCalledTimes(1);
  });

  it("should not call onPress handler when disabled", () => {
    const mockOnPress = jest.fn();
    const { getByText } = render(
      <TextCoustom text="Cannot Press Me" onPress={mockOnPress} disabled />
    );
    fireEvent.press(getByText("Cannot Press Me"));
  });
});
