import { fireEvent, render, screen } from '@testing-library/react';
import { SearchBar } from './components/SearchBar';
import Forms from './pages/Forms';
import CardList from './components/CardList';

describe('SearchBar', () => {
  it('renders SearchBar component', () => {
    render(<SearchBar />);
    expect(screen.getByText(/search/i)).toBeInTheDocument();
    screen.debug();
    expect(screen.getByPlaceholderText(/s/i)).toBeInTheDocument();
    screen.debug();
    expect(screen.getByPlaceholderText(/search/i)).toHaveClass('search-bar')
  })
})

describe('events', () => {
  it('click', () => {
    const handleChange = jest.fn();
    const { container } = render(<input type='checkbox' onChange={handleChange} />)
    const checkbox = container.firstChild as ChildNode;
    expect(checkbox).not.toBeChecked();
    fireEvent.click(checkbox);
    expect(handleChange).toHaveBeenCalledTimes(1);
    expect(checkbox).toBeChecked();
  });

  it('input focus', () => {
    const { getByTestId } = render(<SearchBar />);
    const input = getByTestId('simple-input');
    expect(input).not.toHaveFocus();
    input.focus();
    expect(input).toHaveFocus();
  })
})

describe('Forms', () => {
  it('renders Form component', () => {
    render(<Forms />);
    expect(screen.getByText(/Name/i)).toBeInTheDocument();
    screen.debug();
  });
}); 

const mockedFetch = jest.fn(() =>
  Promise.resolve({
    json: () => Promise.resolve({}),
  })
) as jest.Mock;

global.fetch = mockedFetch;

test('Renders the component with posts', async () => {
  render(<CardList />);
  expect(fetch).toHaveBeenCalledTimes(0);
});


 
