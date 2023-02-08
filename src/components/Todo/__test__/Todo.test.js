import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { BrowserRouter } from 'react-router-dom';
import Todo from "../Todo";

// Mock Todo Footer (BrowserRouter)
const MockTodo = () => {
    return (
        <BrowserRouter>
            <Todo />
        </BrowserRouter>
    );
}

describe("TODO", () => {

    // Text
    const placeholderText = "Add a new task here...";
    const taskList = ["Go Grocery Shopping", "Pet My Cat", "Clean My Hands"];

    // Add Task
    const addTasks = async (tasks) => {
        const user = userEvent.setup();

        const inputElement = screen.getByPlaceholderText(placeholderText);
        const buttonElement = screen.getByRole("button", { name: "Add" });

        // Add Todo Items to Todo List
        for (let i = 0; i < tasks.length; i++) {
            await user.click(inputElement); 
            await user.keyboard(tasks[i]); 
            await user.click(buttonElement);
        }
    }

    describe("Add Todo Item(s)", () => {
        // Add a todo item to the todo list
        test("should render adding a todo item to the todo list", async () => {
            render(<MockTodo />);
            const inputElement = screen.getByPlaceholderText(placeholderText);

            await addTasks([taskList[0]]);
            expect(inputElement.value).toBe("");

            const divElement = screen.getByText(new RegExp(taskList[0], "i"));
            expect(divElement).toBeInTheDocument();
        });

        // Add multiple todo item to the todo list
        test("should render adding multiple todo items to the todo list", async () => {
            render(<MockTodo />);
            await addTasks(taskList);

            const divElements = screen.getAllByTestId("task-container");
            expect(divElements.length).toBe(taskList.length);
        });
    });

    describe("Active/Completed Task Item", () => {

        // Check added task is active
        test("task should be active when initially rendered", async () => {
            render(<MockTodo />);
            await addTasks([taskList[0]]);

            const divElement = screen.getByText(taskList[0]);
            expect(divElement).not.toHaveClass("todo-item-active");
        });

        // Check added task is clicked and completed
        test("task should be completed when clicked after being rendered", async () => {
            const user = userEvent.setup();
            render(<MockTodo />);
            await addTasks([taskList[0]]);

            const divElement = screen.getByText(taskList[0]);
            await user.click(divElement);
            expect(divElement).toHaveClass("todo-item-active");
        });

    });

});