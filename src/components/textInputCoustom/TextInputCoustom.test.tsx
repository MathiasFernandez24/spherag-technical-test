// @ts-nocheck
import React from "react";
import { render, fireEvent } from "@testing-library/react-native";
import TextInputCoustom from "./TextInputCoustom";
import Icon from "../icon/Icon";
import Separator from "../separator/Separator";

jest.mock("../icon/Icon", () => "Icon");
jest.mock("../separator/Separator", () => "Separator");

describe("TextInputCoustom Component", () => {
  it("should render correctly with default props", () => {
    const { getByPlaceholderText } = render(
      <TextInputCoustom value="" setValue={() => {}} placeholder="Type here" />
    );
    expect(getByPlaceholderText("Type here")).toBeTruthy();
  });

  it("should display a left icon if leftIconName is provided", () => {
    const { getByText } = render(
      <TextInputCoustom
        value=""
        setValue={() => {}}
        placeholder="Type here"
        leftIconName="search"
      />
    );
  });

  it("should not display a left icon if leftIconName is not provided", () => {
    const { queryByText } = render(
      <TextInputCoustom value="" setValue={() => {}} placeholder="Type here" />
    );
    expect(queryByText("Icon")).toBeNull();
  });

  it("should call setValue when text input changes", () => {
    const mockSetValue = jest.fn();
    const { getByPlaceholderText } = render(
      <TextInputCoustom
        value=""
        setValue={mockSetValue}
        placeholder="Type here"
      />
    );
    fireEvent.changeText(getByPlaceholderText("Type here"), "New Value");
    expect(mockSetValue).toHaveBeenCalledWith("New Value");
  });
});
