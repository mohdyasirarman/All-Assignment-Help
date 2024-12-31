import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import { AccessibleButton } from '../accessible-button';

describe('AccessibleButton', () => {
  it('renders with default props', () => {
    render(<AccessibleButton>Click me</AccessibleButton>);
    const button = screen.getByRole('button', { name: /click me/i });
    expect(button).toBeInTheDocument();
  });

  it('handles click events', () => {
    const handleClick = jest.fn();
    render(<AccessibleButton onClick={handleClick}>Click me</AccessibleButton>);
    const button = screen.getByRole('button', { name: /click me/i });
    fireEvent.click(button);
    expect(handleClick).toHaveBeenCalledTimes(1);
  });

  it('shows loading state', () => {
    render(
      <AccessibleButton loading loadingText="Processing...">
        Click me
      </AccessibleButton>
    );
    expect(screen.getByText('Processing...')).toBeInTheDocument();
    expect(screen.getByRole('button')).toHaveAttribute('aria-busy', 'true');
  });

  it('is disabled when loading', () => {
    render(
      <AccessibleButton loading>
        Click me
      </AccessibleButton>
    );
    expect(screen.getByRole('button')).toBeDisabled();
  });

  it('renders with different variants', () => {
    const { rerender } = render(
      <AccessibleButton variant="secondary">Click me</AccessibleButton>
    );
    expect(screen.getByRole('button')).toHaveClass('bg-secondary');

    rerender(<AccessibleButton variant="outline">Click me</AccessibleButton>);
    expect(screen.getByRole('button')).toHaveClass('border-input');
  });

  it('renders with icons', () => {
    const icon = <span data-testid="test-icon">Icon</span>;
    render(
      <AccessibleButton icon={icon} iconPosition="left">
        Click me
      </AccessibleButton>
    );
    expect(screen.getByTestId('test-icon')).toBeInTheDocument();
  });
});
