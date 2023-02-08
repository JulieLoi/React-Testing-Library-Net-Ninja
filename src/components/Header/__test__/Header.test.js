import { render, screen } from '@testing-library/react';
import Header from '../Header';


describe("HEADER", () => {

    const titleText = "MY HEADER";

    // Unit Test: getByText
    test('should render same text passed into title prop - getByText', () => {
        render(<Header title={titleText} />);
        const headingElement = screen.getByText(new RegExp(titleText, "i"));     // /MY HEADER/i
        expect(headingElement).toBeInTheDocument();
    });

    // Unit Test: getByRole (specifies which header based on object)
    test('should render same text passed into title prop - getByRole', () => {
        render(<Header title={titleText} />);
        const headingElement = screen.getByRole("heading", { name: titleText });     // h1
        expect(headingElement).toBeInTheDocument();
    });

    // Unit Test: getByTitle (Semantic Query)
    test('should render same text passed into title prop - getByTitle (semantic query)', () => {
        render(<Header title={titleText} />);
        const headingElement = screen.getByTitle("header-title");
        expect(headingElement).toBeInTheDocument();
    });

    // Unit Test: getByTestId (Test ID)
    test('should render same text passed into title prop - getByTestId (test id)', () => {
        render(<Header title={titleText} />);
        const headingElement = screen.getByTestId("header-test-id");
        expect(headingElement).toBeInTheDocument();
    });

    // Unit Test: findByText (asynchronous)
    test('should render same text passed into title prop - findByText (async)', async () => {
        render(<Header title={titleText} />);
        const headingElement = await screen.findByText(new RegExp(titleText, "i"));     // /MY HEADER/i
        expect(headingElement).toBeInTheDocument();
    });

    // Unit Test: queryByText (asynchronous)
    test('should render same text passed into title prop - queryByText (different text, not in document)', () => {
        render(<Header title={titleText} />);
        const headingElement = screen.queryByText(new RegExp("failtext", "i"));     // /MY HEADER/i
        expect(headingElement).not.toBeInTheDocument();
    });

    // Unit Test: getAllByRole
    test('should render same text passed into title prop - getAllByText (array result)', () => {
        render(<Header title={titleText} />);
        const headingElement = screen.getAllByRole("heading", { name: titleText });     // h1
        expect(headingElement.length).toBe(1);
    });
});
