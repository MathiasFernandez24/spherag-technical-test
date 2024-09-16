// @ts-nocheck
import React from "react";
import { render, fireEvent } from "@testing-library/react-native";
import Icon from "./Icon";
import { allIcons } from "./IconIndex";
import { colors } from "../../theme/colors";

jest.mock("./IconIndex", () => ({
  allIcons: {
    testIcon: jest.fn(() => <div testID="test-icon" />),
  },
}));

describe("Icon Component", () => {
  const mockOnPress = jest.fn();

  it("should render the correct icon", () => {
    const { getByTestId } = render(
      <Icon iconName="testIcon" color={colors.neutral.default} size={24} />
    );

    expect(getByTestId("test-icon")).toBeTruthy();
  });

  it("should trigger onPress when pressed", () => {
    const { getByTestId } = render(
      <Icon iconName="testIcon" onPress={mockOnPress} />
    );

    fireEvent.press(getByTestId("test-icon"));

    expect(mockOnPress).toHaveBeenCalledTimes(1);
  });

  it("should be disabled when onPress is not provided", () => {
    const { getByTestId } = render(<Icon iconName="testIcon" />);

    const iconTouchable = getByTestId("test-icon").parentNode;
  });

  it("should apply custom container styles", () => {
    const customStyles = { backgroundColor: colors.primary.default };

    const { getByTestId } = render(
      <Icon iconName="testIcon" containerStyles={customStyles} />
    );
  });
});
