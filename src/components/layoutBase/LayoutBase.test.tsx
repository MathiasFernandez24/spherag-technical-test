// @ts-nocheck
import React from "react";
import { render, fireEvent } from "@testing-library/react-native";
import LayoutBase from "./LayoutBase";
import { useNavigation } from "@react-navigation/native";
import { useAuth } from "../../store/AuthContext";

jest.mock("@react-navigation/native", () => ({
  useNavigation: jest.fn(),
}));

jest.mock("../../store/AuthContext", () => ({
  useAuth: jest.fn(),
}));

describe("LayoutBase Component", () => {
  const mockNavigate = jest.fn();
  const mockSetToken = jest.fn();

  beforeEach(() => {
    (useNavigation as jest.Mock).mockReturnValue({
      navigate: mockNavigate,
    });

    (useAuth as jest.Mock).mockReturnValue({
      setToken: mockSetToken,
    });
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  it("should render the header title and subtitle correctly", () => {
    const { getByText } = render(
      <LayoutBase headerTitle="Farm Name" headerSubTitle="Location" />
    );

    expect(getByText("Farm Name")).toBeTruthy();
    expect(getByText("Location")).toBeTruthy();
  });

  it("should navigate to the Farms screen when the logo is pressed", () => {
    const { getByTestId } = render(
      <LayoutBase headerTitle="Farm Name" headerSubTitle="Location" />
    );
  });

  it("should open the logout modal when the logout icon is pressed", () => {
    const { getByTestId } = render(
      <LayoutBase headerTitle="Farm Name" headerSubTitle="Location" />
    );
  });

  it("should close the logout modal when close is triggered", () => {
    const { getByTestId } = render(
      <LayoutBase headerTitle="Farm Name" headerSubTitle="Location" />
    );
  });

  it("should call the logout function when the 'Salir' button is pressed", () => {
    const { getByText, getByTestId } = render(
      <LayoutBase headerTitle="Farm Name" headerSubTitle="Location" />
    );
  });
});
