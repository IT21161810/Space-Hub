import { fireEvent, render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import MarsCard from "../src/componets/MarsCard";


describe(('Mars Card component'), () => {

    const sampleProps = {
        img_src: 'https://example.com/mars.jpg',
        fullName: 'Curiosity Rover',
        cameraName: 'Mastcam',
        roverName: 'Curiosity',
        landingDate: 'August 6, 2012',
        launchingDate: 'November 26, 2011',
        status: 'Active',
    };

    it("render MarsCard with provided props", () => {
        render(<MarsCard {...sampleProps} />)

        expect(screen.getByText(sampleProps.fullName)).toBeInTheDocument();

        // Assert that camera name is displayed
        expect(screen.getByText(`Camera Name: ${sampleProps.cameraName}`)).toBeInTheDocument();

        // Assert that rover name is displayed
        expect(screen.getByText(`Rover Name: ${sampleProps.roverName}`)).toBeInTheDocument();

        // Assert that landing date is displayed
        expect(screen.getByText(`Landing Date: ${sampleProps.landingDate}`)).toBeInTheDocument();

        // Assert that launching date is displayed
        expect(screen.getByText(`Launching Date: ${sampleProps.launchingDate}`)).toBeInTheDocument();

        // Assert that status is displayed
        expect(screen.getByText(`Status: ${sampleProps.status}`)).toBeInTheDocument();

        // Assert that the card image is rendered with alt text
        const cardImage = screen.getByAltText('NASA');
        expect(cardImage).toBeInTheDocument();
        expect(cardImage).toHaveAttribute('src', sampleProps.img_src);
        
    })
})