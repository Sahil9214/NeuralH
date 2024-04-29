/* eslint-disable jest/no-conditional-expect */
import React from "react";
import userEvent from "@testing-library/user-event";
import { render, screen, waitFor } from "@testing-library/react";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import Home from "./Pages/Home/Home";
import Constant from "./Utils/Constant";
import { Link } from "react-router-dom";
import AboutUSTeam from "./Pages/AboutUs/AboutUs";
import { Employees } from "./Utils/TeamMember";
describe("App", () => {
  beforeEach(() => {
    render(
      <BrowserRouter>
        <App />
      </BrowserRouter>
    );
  });

  test("Check if 'NeuralHQ@2024' is present", async () => {
    await waitFor(
      () => {
        const checkText = screen.getByText("NeuralHQ@2024");
        expect(checkText).toBeInTheDocument();
      },
      { timeout: 3000 }
    );
  });

  test("Check if footer is present", async () => {
    await waitFor(
      () => {
        const checkFooter = screen.getByTestId("footer");
        expect(checkFooter).toBeInTheDocument();
      },
      { timeout: 3000 }
    );
  });

  test("Check if Navbar is present", async () => {
    await waitFor(
      () => {
        const checkNavbar = screen.getByTestId("navbar");
        expect(checkNavbar).toBeInTheDocument();
      },
      { timeout: 3000 }
    );
  });
});

describe("About Us Component", () => {
  beforeEach(() => {
    render(
      <BrowserRouter>
        <Home />
      </BrowserRouter>
    );
  });
  test("Check if 'Know More' text is present", () => {
    const checkButton = screen.getByText(Constant.KNOW_MORE);
    expect(checkButton).toBeInTheDocument();
  });
  test("check the About us  text present or not in AboutUsComponent", () => {
    const aboutUsText = screen.getByText(Constant.ABOUT_US);
    expect(aboutUsText).toBeInTheDocument();
  });
  test("check the About us our team defination of text present or not in AboutUsComponent", () => {
    const aboutUsText = screen.getByText(Constant.ABOUT_US_OUR_TEAM);
    expect(aboutUsText).toBeInTheDocument();
  });
  test("check the About us context  text present or not in AboutUsComponent", () => {
    const aboutUsText = screen.getByText(Constant.ABOUT_US_CONTEXT);
    expect(aboutUsText).toBeInTheDocument();
  });
});

describe("Checking the About Us Page Owner and employees data", () => {
  beforeEach(() => {
    render(
      <BrowserRouter>
        <AboutUSTeam />
      </BrowserRouter>
    );
  });
  test("there must be 3 owner ", () => {
    const ownerDiv = screen.getByTestId("owner");
    const ownerTeamDivs = ownerDiv.querySelectorAll(".owner_team");
    expect(ownerTeamDivs).toHaveLength(3);
  });
  test("show More button is present or not", () => {
    if (Employees.length > 3) {
      const checkShowButton = screen.getByRole("button", {
        name: /show more/i,
      });
      expect(checkShowButton).toBeInTheDocument();
    }
  });
});
