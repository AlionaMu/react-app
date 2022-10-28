import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import Form from './Form';

const onChange = jest.fn();

describe('Form component', () => {
  it('Form renders', () => {
    render(<Form></Form>);

    expect(screen.getByText('Gender')).toBeInTheDocument();
  });
  it('onChange works', () => {
    render(<Form></Form>);

    userEvent.type(screen.getByRole('textbox'), 'some word');

    expect(onChange).toHaveBeenCalledTimes(0);
  })
})