import { render, screen, fireEvent } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import AddInput from '../AddInput';

describe.only("ADD INPUT", () => {

    const mockedSetTodos = jest.fn();                       // hook mock

    // Text
    const placeholderText = "Add a new task here...";
    const typeText = "Go Grocery Shopping";

    // Checks that the input box exists
    it("should render input box", () => {
        render(<AddInput todos={[]} setTodos={mockedSetTodos} />);
        const inputElement = screen.getByPlaceholderText(placeholderText);
        expect(inputElement).toBeInTheDocument();
    });

    describe("FIRE EVENT INTERACTIONS", () => {
        // Checks typing into input box
        it("should be able to type into input box", () => {
            render(<AddInput todos={[]} setTodos={mockedSetTodos} />);
            const inputElement = screen.getByPlaceholderText(placeholderText);

            // Interact with Element 
            fireEvent.change(inputElement, { target: { value: typeText } });

            expect(inputElement.value).toBe(typeText);
        });

        // Checks input box is empty when the add button is triggered (fireEvent)
        it("should have empty input when add button is clicked - fireEvent", () => {
            render(<AddInput todos={[]} setTodos={mockedSetTodos} />);
            const inputElement = screen.getByPlaceholderText(placeholderText);
            const buttonElement = screen.getByRole("button", { name: /Add/i });

            // Interact with Element 
            fireEvent.change(inputElement, { target: { value: typeText } });
            fireEvent.click(buttonElement)

            expect(inputElement.value).toBe("");
        });
    });

    describe("USER EVENT INTERACTIONS", () => {

        // Checks typing into input box (userEvent)
        it("should be able to type into input box - userEvent", async () => {
            const user = userEvent.setup()
    
            render(<AddInput todos={[]} setTodos={mockedSetTodos} />);
            const inputElement = screen.getByPlaceholderText(placeholderText);
    
            // Interact with Element 
            await user.click(inputElement);
            await user.keyboard(typeText)
    
            expect(inputElement.value).toBe(typeText);
        });

        // Checks input box is empty when the add button is triggered (userEvent)
        it("should have empty input when add button is clicked - userEvent", async () => {
            const user = userEvent.setup()

            render(<AddInput todos={[]} setTodos={mockedSetTodos} />);
            const inputElement = screen.getByPlaceholderText(placeholderText);
            const buttonElement = screen.getByRole("button", { name: /Add/i });

            // Interact with Element 
            await user.click(inputElement);
            await user.keyboard(typeText)
            await user.click(buttonElement);

            expect(inputElement.value).toBe("");
        });
    });

});