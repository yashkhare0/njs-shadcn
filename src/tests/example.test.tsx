import { render, screen } from './test-utils';
import { describe, it, expect } from '@jest/globals';
import { Button } from '@/components/ui/button';

describe('Button Component', () => {
  it('renders a button with text', () => {
    render(<Button>Click me</Button>);
    const buttonElement = screen.getByText('Click me');
    expect(buttonElement).toBeInTheDocument();
  });

  it('applies variant class correctly', () => {
    render(<Button variant="destructive">Delete</Button>);
    const buttonElement = screen.getByText('Delete');
    expect(buttonElement).toHaveClass('bg-destructive');
  });
}); 