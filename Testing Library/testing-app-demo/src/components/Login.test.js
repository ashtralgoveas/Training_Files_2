import {fireEvent, render, screen} from "@testing-library/react"
import Login from "./login/Login"

test("username input should be rendered", () => {
    render(<Login />);
    const userInputEl = screen.getByPlaceholderText(/Username/i)
    expect(userInputEl).toBeInTheDocument()
})

test("password input should be rendered", () => {
    render(<Login />);
    const passwordInputEl = screen.getByPlaceholderText(/Password/i);
    expect(passwordInputEl).toBeInTheDocument()
})

test("button should be rendered", () => {
    render(<Login />);
    const buttonEl = screen.getByRole("button");
    expect(buttonEl).toBeInTheDocument()
})

test("username input should be empty", () => {
    render(<Login />);
    const userInputEl = screen.getByPlaceholderText(/Username/i)
    expect(userInputEl.value).toBe("")
})

test("password input should be empty", () => {
    render(<Login />);
    const passwordInputEl = screen.getByPlaceholderText(/Password/i)
    expect(passwordInputEl.value).toBe("")
})

test("button should be disabled", () => {
    render(<Login />);
    const buttonEl = screen.getByRole("button");
    expect(buttonEl).toBeDisabled()
})

test("loading should not be rendered", () => {
    render(<Login />);
    const buttonEl = screen.getByRole("button");
    expect(buttonEl).not.toHaveTextContent(/please wait.../i)
})

test("error message should not be visible", () => {
    render(<Login />);
    const errorEl = screen.getByTestId("error");
    expect(errorEl).not.toBeVisible()
})

test("username input should change", () => {
    render(<Login />);
    const usernameInputEl = screen.getByPlaceholderText(/Username/i)
    const testValue = "test"
    fireEvent.change(usernameInputEl, {target: {value: testValue}})
    expect(usernameInputEl.value).toBe(testValue)
})

test("password input should change", () => {
    render(<Login />);
    const passwordInputEl = screen.getByPlaceholderText(/Password/i)
    const testValue = "test"
    fireEvent.change(passwordInputEl, {target: {value: testValue}})
    expect(passwordInputEl.value).toBe(testValue)
})

test("button should not be disabled when inputs exist", () => {
    render(<Login />);
    const buttonEl = screen.getByRole("button");
    const usernameInputEl = screen.getByPlaceholderText(/Username/i)
    const passwordInputEl = screen.getByPlaceholderText(/Password/i)
    const testValue = "test"

    fireEvent.change(usernameInputEl, {target: {value: testValue}})
    fireEvent.change(passwordInputEl, {target: {value: testValue}})
    expect(buttonEl).not.toBeDisabled()
})

test("loading should not be rendered when click", () => {
    render(<Login />);
    const buttonEl = screen.getByRole("button");
    const usernameInputEl = screen.getByPlaceholderText(/Username/i)
    const passwordInputEl = screen.getByPlaceholderText(/Password/i)

    const testValue = "test"

    fireEvent.change(usernameInputEl, {target: {value: testValue}})
    fireEvent.change(passwordInputEl, {target: {value: testValue}})
    fireEvent.click(buttonEl)

    expect(buttonEl).toHaveTextContent(/please wait.../i)
})
