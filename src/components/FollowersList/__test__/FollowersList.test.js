import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import FollowersList from '../FollowersList';

// Mock Followers List (BrowserRouter)
const MockFollowersList = () => {
    return (
        <BrowserRouter>
            <FollowersList />
        </BrowserRouter>
    );
}

describe("FOLLOWERS LIST", () => {

    /*
    beforeAll(() => {
        console.log("RUNS ONCE BEFORE ALL FOLLOWERS LIST TESTS");
    });

    beforeEach(() => {
        console.log("RUNS BEFORE EACH TEST");
    });

    afterEach(() => {
        console.log("RUNS AFTER EACH TEST");
    });

    afterAll(() => {
        console.log("RUNS ONCE AFTER ALL FOLLOWERS LIST TESTS");
    });
    */

    describe("Render Follower(s)", () => {
        // Check if first follower card is rendered
        test("should render the first follower", async () => {
            render(<MockFollowersList />);
            const followerDivElement = await screen.findByTestId("follower-item-0");
            expect(followerDivElement).toBeInTheDocument();
        });

        // Check if the follower cards are rendered
        test("should render all followers", async () => {
            render(<MockFollowersList />);
            const followerDivElements = await screen.findAllByTestId(/follower-item/i);
            expect(followerDivElements.length).toBe(5);
        });
    });
});