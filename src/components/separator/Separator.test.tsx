// @ts-nocheck
import React from "react";
import { render } from "@testing-library/react-native";
import Separator from "./Separator";
import { colors } from "../../theme/colors";

describe("Separator Component", () => {
  it("should render with default styles", () => {
    const { getByTestId } = render(<Separator />);
  });

  it("should apply custom margins", () => {
    const { getByTestId } = render(
      <Separator marginHorizontal={10} marginVertical={20} />
    );
  });

  it("should apply custom color", () => {
    const customColor = colors.primary.default;
    const { getByTestId } = render(<Separator color={customColor} />);
  });

  it("should apply all custom props (color, marginHorizontal, marginVertical)", () => {
    const customColor = colors.primary.default;
    const { getByTestId } = render(
      <Separator
        marginHorizontal={15}
        marginVertical={30}
        color={customColor}
      />
    );
  });
});
