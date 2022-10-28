import { render, screen } from '@testing-library/react';
import CardList from '../components/CardList';


describe('CardList component', () => {
  it('CardList renders without data', () => {
    render(<CardList></CardList>);

    expect(screen.getByText('List is empty')).toBeInTheDocument();
    expect(screen.queryByRole('img')).toBeNull();
  })
})