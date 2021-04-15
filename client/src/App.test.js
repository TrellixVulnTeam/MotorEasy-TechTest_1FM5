import {render} from '@testing-library/react';

import NavBar from './components/NavBar'




describe('Render testing', () => {

  test('Render Testing', () => {
    const { getByText } = render(<NavBar />);

    const linkElement = getByText("Tyres Direct");

    expect(linkElement).toBeInTheDocument();
  });

})

