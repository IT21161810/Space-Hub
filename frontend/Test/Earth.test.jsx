import { fireEvent, render, screen } from "@testing-library/react";
import { describe, it } from "vitest";
import Earth from "../src/componets/Earth";

describe('Earth Component', () => {
    const sampleProps = {
      img_src: 'https://example.com/earth.jpg',
      planet: 'Earth',
      date: '2024-05-04',
    };
  
    it('renders component with initial "Show more" button', () => {
      render(<Earth {...sampleProps} />);
  
      expect(screen.getByText(/Planet: Earth/)).toBeInTheDocument();
  
      expect(
        screen.getByText(
          /Landsat imagery is provided to the public as a joint project between NASA and USGS./
        )
      ).toBeInTheDocument();
  
      expect(screen.getByText('Show more')).toBeInTheDocument();
    });
  
    it('expands text when "Show more" button is clicked', () => {
      render(<Earth {...sampleProps} />);
  
      fireEvent.click(screen.getByText('Show more'));

      expect(
        screen.getByText(
          /NASA's Earth Science Division has a variety of Earth imagery APIs for developers./
        )
      ).toBeInTheDocument();
  
      expect(screen.getByText('Show less')).toBeInTheDocument();
    });

  
    it('collapses text when "Show less" button is clicked', () => {
      render(<Earth {...sampleProps} />);
  
      fireEvent.click(screen.getByText('Show more'));
  
      fireEvent.click(screen.getByText('Show less'));
  
      expect(
        screen.getByText(
          /Landsat imagery is provided to the public as a joint project between NASA and USGS./
        )
      ).toBeInTheDocument();
  
      expect(screen.getByText('Show more')).toBeInTheDocument();
    });
    
  });