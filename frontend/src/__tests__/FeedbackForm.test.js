import React from 'react';
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import '@testing-library/jest-dom'; // For matchers like toBeInTheDocument
import axios from 'axios';
import FeedbackForm from '../components/FeedbackPage/FeedbackForm';

// Mock axios
jest.mock('axios');

describe('FeedbackForm', () => {
  it('renders form inputs correctly', () => {
    render(<FeedbackForm />);
    
    expect(screen.getByPlaceholderText('Your Name')).toBeInTheDocument();
    expect(screen.getByPlaceholderText('Your Email')).toBeInTheDocument();
    expect(screen.getByPlaceholderText('Your Feedback')).toBeInTheDocument();
    expect(screen.getByText('Submit')).toBeInTheDocument();
  });

  it('submits feedback and clears form on success', async () => {
    const mockResponse = { data: 'Feedback submitted' };
    axios.post.mockResolvedValueOnce(mockResponse);

    render(<FeedbackForm />);
    
    fireEvent.change(screen.getByPlaceholderText('Your Name'), { target: { value: 'John Doe' } });
    fireEvent.change(screen.getByPlaceholderText('Your Email'), { target: { value: 'john@example.com' } });
    fireEvent.change(screen.getByPlaceholderText('Your Feedback'), { target: { value: 'Great site!' } });
    
    fireEvent.click(screen.getByText('Submit'));
    
    // Wait for form submission
    await waitFor(() => screen.getByPlaceholderText('Your Name'));

    // Ensure form is cleared
    expect(screen.getByPlaceholderText('Your Name').value).toBe('');
    expect(screen.getByPlaceholderText('Your Email').value).toBe('');
    expect(screen.getByPlaceholderText('Your Feedback').value).toBe('');
  });

  it('displays an error message on failure', async () => {
    const errorMessage = 'An error occurred';
    axios.post.mockRejectedValueOnce({ response: { data: { message: errorMessage } } });

    render(<FeedbackForm />);

    fireEvent.change(screen.getByPlaceholderText('Your Name'), { target: { value: 'John Doe' } });
    fireEvent.change(screen.getByPlaceholderText('Your Email'), { target: { value: 'john@example.com' } });
    fireEvent.change(screen.getByPlaceholderText('Your Feedback'), { target: { value: 'Great site!' } });

    fireEvent.click(screen.getByText('Submit'));

    // Wait for the error message to appear
    await waitFor(() => screen.getByText(errorMessage));

    // Ensure error message is displayed
    expect(screen.getByText(errorMessage)).toBeInTheDocument();
  });
});
