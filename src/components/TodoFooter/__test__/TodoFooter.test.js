import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import TodoFooter from '../TodoFooter';

// Mock Todo Footer (BrowserRouter)
const MockTodoFooter = ({ numberOfIncompleteTasks }) => {
    return (
        <BrowserRouter>
            <TodoFooter numberOfIncompleteTasks={numberOfIncompleteTasks} />
        </BrowserRouter>
    );
}

describe("TODO FOOTER", () => {

    const taskNumber = 0;
    const paragraphText = `${taskNumber} ${taskNumber !== 1 ? "tasks" : "task"} left`;

    describe("Testing Render", () => {
        // Unit Test: Render `taskNumber` text
        test("should render the correct amount of incomplete tasks (adjustable)", () => {
            render(<MockTodoFooter numberOfIncompleteTasks={taskNumber} />);
            const paragraphElement = screen.getByText(new RegExp(paragraphText, "i"));      // x tasks left (x !== 1)
            expect(paragraphElement).toBeInTheDocument();
        });

        // Unit Test: Render `1 task` text
        test("should render the correct amount of incomplete tasks - 1 task", () => {
            render(<MockTodoFooter numberOfIncompleteTasks={1} />);
            const paragraphElement = screen.getByText(/1 task left/i);                      // 1 task left 
            expect(paragraphElement).toBeInTheDocument();
        });
    });

    describe("Different Assertions", () => {
        // Unit Test: Assertion (toBeVisible)
        test("toBeVisible - check visibility", () => {
            render(<MockTodoFooter numberOfIncompleteTasks={taskNumber} />);
            const paragraphElement = screen.getByText(new RegExp(paragraphText, "i"));    
            expect(paragraphElement).toBeVisible();
        });

        // Unit Test: Assertion (toContainHTML) - tag (<p>)
        test("toContainHTML - check tag (<p></p>)", () => {
            render(<MockTodoFooter numberOfIncompleteTasks={taskNumber} />);
            const paragraphElement = screen.getByText(new RegExp(paragraphText, "i"));    
            expect(paragraphElement).toContainHTML("p");
        });

        // Unit Test: Assertion (toHaveTextContent)
        test("toHaveTextContent - check element's text content", () => {
            render(<MockTodoFooter numberOfIncompleteTasks={taskNumber} />);
            const paragraphElement = screen.getByText(new RegExp(paragraphText, "i"));    
            expect(paragraphElement).toHaveTextContent(new RegExp(paragraphText, "i"));
        });

        // Unit Test: Assertion (not.toBeFalsy)
        test("not.toBeFalsy - demonstrates `not`, checks for false", () => {
            render(<MockTodoFooter numberOfIncompleteTasks={taskNumber} />);
            const paragraphElement = screen.getByText(new RegExp(paragraphText, "i"));    
            expect(paragraphElement).not.toBeFalsy();
        });

        // Unit Test: Assertion (toBe)
        test("toBe - check text content equality", () => {
            render(<MockTodoFooter numberOfIncompleteTasks={taskNumber} />);
            const paragraphElement = screen.getByText(new RegExp(paragraphText, "i"));    
            expect(paragraphElement.textContent).toBe(paragraphText);
        });
    });

});








