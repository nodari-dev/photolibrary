import React from "react";
import {fireEvent, render} from "@testing-library/react";
import Header from "../header";

describe("Header", () => {
    describe("test", () => {
        const { getByTestId } = render(<Header/>);

        it("hello world", () =>{
            console.log("123")
        })
    })
})