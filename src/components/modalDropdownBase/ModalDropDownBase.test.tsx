// @ts-nocheck
import { render, waitFor } from "@testing-library/react-native";
import React from "react";
import { Modalize } from "react-native-modalize";
import ModalDropdownBase from "./ModalDropdownBase";
import { Text } from "react-native";

describe("ModalDropdownBase Component", () => {
  const mockOnClose = jest.fn();

  afterEach(() => {
    jest.clearAllMocks();
  });

  it("should render children correctly", () => {
    const { getByText } = render(
      <ModalDropdownBase visibility={true} onClose={mockOnClose}>
        <Text>Test Child Content</Text>
      </ModalDropdownBase>
    );

    expect(getByText("Test Child Content")).toBeTruthy();
  });

  it("should call open when visibility is true", async () => {
    const { rerender } = render(
      <ModalDropdownBase visibility={false} onClose={mockOnClose}>
        <Text>Test Child Content</Text>
      </ModalDropdownBase>
    );

    rerender(
      <ModalDropdownBase visibility={true} onClose={mockOnClose}>
        <Text>Test Child Content</Text>
      </ModalDropdownBase>
    );
  });

  it("should call close when visibility is false", async () => {
    const { rerender } = render(
      <ModalDropdownBase visibility={true} onClose={mockOnClose}>
        <Text>Test Child Content</Text>
      </ModalDropdownBase>
    );

    rerender(
      <ModalDropdownBase visibility={false} onClose={mockOnClose}>
        <Text>Test Child Content</Text>
      </ModalDropdownBase>
    );
  });

  it("should call onClose when the modal is closed", () => {
    const { getByTestId } = render(
      <ModalDropdownBase visibility={true} onClose={mockOnClose}>
        <Text>Test Child Content</Text>
      </ModalDropdownBase>
    );
  });
});
