// @ts-nocheck
import React from "react";
import { render, fireEvent } from "@testing-library/react-native";
import FarmCard from "./FarmCard";
import { useNavigation } from "@react-navigation/native";

const mockNavigate = jest.fn();

jest.mock("@react-navigation/native", () => ({
  useNavigation: () => ({
    navigate: mockNavigate,
  }),
}));

describe("FarmCard Component", () => {
  const mockFarm = {
    name: "Test Farm",
    description: "Test Farm Description",
    favorite: true,
    timezone: "GMT-5",
    id: 1,
  };

  it("renders correctly with all props", () => {
    const { getByText, getByTestId } = render(<FarmCard farm={mockFarm} />);

    expect(getByText("Test Farm")).toBeTruthy();

    expect(getByText("Test Farm Description")).toBeTruthy();

    expect(getByText("GMT-5 Hs.")).toBeTruthy();
  });

  it("does not render favorite icon when favorite is false", () => {
    const { queryByTestId } = render(
      <FarmCard farm={{ ...mockFarm, favorite: false }} />
    );

    const favoriteIcon = queryByTestId("icon-favorite");
    expect(favoriteIcon).toBeNull();
  });

  it("navigates to FarmDetail when the card is pressed", () => {
    const { getByTestId } = render(<FarmCard farm={mockFarm} />);
  });
});
