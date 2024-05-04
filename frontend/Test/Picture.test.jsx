import { fireEvent, render,screen } from "@testing-library/react";
import { describe,it } from "vitest";
import Picture from "../src/componets/Picture"

describe('Picture Component', () => {
    const sampleProps = {
      title: 'Sample Title',
      date: '2024-05-04',
      explanation: 'This is a sample explanation for testing purposes.',
      hdurl: 'https://sampleurl.com/image.jpg',
      copyright: 'Sample Copyright'
    };
  
    it('renders with provided props', () => {
      render(<Picture {...sampleProps} />);
      
      expect(screen.getByText(`Title: ${sampleProps.title}`)).toBeInTheDocument();
      expect(screen.getByText(`Date: ${sampleProps.date}`)).toBeInTheDocument();
      expect(screen.getByText(`Explanation: ${sampleProps.explanation.slice(0, 100)}...`)).toBeInTheDocument();
  
    });

  
    it('displays correct alt text for the image', () => {
      render(<Picture {...sampleProps} />);
  
      const imageElement = screen.getByAltText('Astronomy Picture of the day');
      expect(imageElement).toBeInTheDocument();
      expect(imageElement).toHaveAttribute('src', sampleProps.hdurl);
    });
  
    it('renders default "No Copyright" when copyright is not provided', () => {
      const propsWithoutCopyright = {
        ...sampleProps,
        copyright: null
      };
      render(<Picture {...propsWithoutCopyright} />);
      expect(screen.getByText('Copyright: No Copyright')).toBeInTheDocument();
    });
  });