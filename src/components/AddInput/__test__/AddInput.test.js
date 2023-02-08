import { render, screen, fireEvent } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import AddInput from '../AddInput';

describe.only("ADD INPUT", () => {

    const mockedSetTodos = jest.fn();                       // hook mock

    // Text
    const placeholderText = "Add a new task here...";
    const typeText = "Go Grocery Shopping";


    const MockAddInput = ({ todos, setTodos }) => {
        return (
            <BrowserRouter>
                <AddInput todos={todos} setTodos={setTodos} />
            </BrowserRouter>
        );
    }

    // Checks that the input box exists
    it("should render input box", () => {
        render(<MockAddInput todos={[]} setTodos={mockedSetTodos} />);
        const inputElement = screen.getByPlaceholderText(placeholderText);
        expect(inputElement).toBeInTheDocument();
    });

    // Checks typing into input box
    it("should be able to type into input box", () => {
        render(<MockAddInput todos={[]} setTodos={mockedSetTodos} />);
        const inputElement = screen.getByPlaceholderText(placeholderText);

        // Interact with Element 
        fireEvent.change(inputElement, { target: { value: typeText } });
        
        expect(inputElement.value).toBe(typeText);
    });

    // Checks input box is empty when the button is triggered
    it("should have empty input when add button is clicked", () => {
        render(<MockAddInput todos={[]} setTodos={mockedSetTodos} />);
        const inputElement = screen.getByPlaceholderText(placeholderText);
        const buttonElement = screen.getByRole("button", { name: /Add/i });

        // Interact with Element 
        fireEvent.change(inputElement, { target: { value: typeText } });
        fireEvent.click(buttonElement)

        expect(inputElement.value).toBe("");
    });









});