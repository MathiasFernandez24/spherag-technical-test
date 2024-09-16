// @ts-nocheck
import React from "react";
import { render, fireEvent } from "@testing-library/react-native";
import Atlas from "./Atlas";
import { colors } from "../../theme/colors";
import { useNavigation } from "@react-navigation/native";

const mockNavigate = jest.fn();
jest.mock("@react-navigation/native", () => ({
  useNavigation: () => ({
    navigate: mockNavigate,
  }),
}));

describe("Atlas Component", () => {
  const defaultAtlas = {
    atlasStatus: "RealTime",
    batteryPercentage: 75,
    expiredDate: "2024-09-15T12:00:00Z",
    imei: "123456789",
    name: "Atlas 1",
    signalPercentage: 50,
    type: "Sensor",
  };

  const defaultProps = {
    atlas: defaultAtlas,
    farmName: "Farm 1",
  };

  it("should render correctly with given props", () => {
    const { getByText } = render(<Atlas {...defaultProps} />);

    expect(getByText("Atlas 1")).toBeTruthy();
    expect(getByText("status: RealTime")).toBeTruthy();
    expect(getByText("imei: 123456789")).toBeTruthy();
    expect(getByText("type: Sensor")).toBeTruthy();
    expect(getByText("50%")).toBeTruthy();
    expect(getByText("75%")).toBeTruthy();
  });

  it("should call navigate to AtlasDetail when pressed", () => {
    const { getByText } = render(<Atlas {...defaultProps} />);

    fireEvent.press(getByText("Atlas 1"));

    expect(mockNavigate).toHaveBeenCalledWith("AtlasDetail", {
      atlasImei: "123456789",
      farmName: "Farm 1",
      systemName: "Atlas 1",
    });
  });

  it("should render correct icons based on signal and battery percentage", () => {
    const { getByTestId } = render(<Atlas {...defaultProps} />);
  });

  it("should render 'signalOff' and 'batteryOff' icons when percentages are 0", () => {
    const zeroProps = {
      ...defaultProps,
      atlas: {
        ...defaultProps.atlas,
        batteryPercentage: 0,
        signalPercentage: 0,
      },
    };

    const { getByTestId } = render(<Atlas {...zeroProps} />);
  });
});
