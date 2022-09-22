import React from "react";
import { createRoot } from 'react-dom/client';
import Button from './../button';

it("renders without crashing", () => {
    const div = document.createElement("div");
    const root = createRoot(div)
    root.render(<Button />)
})

it("renders button correctly", () => {
    const divElement = createRoot(document.createElement("div"));
    divElement.render(<Button label="click me please"></Button>)
})
