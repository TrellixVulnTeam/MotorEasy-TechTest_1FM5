import {render} from '@testing-library/react';
import TyreCard from './components/TyreDisplay/TyreCard'
import NavBar from './components/NavBar'




describe('Render testing', () => {

  test("NavBar to render 'TyresDirect'", () => {
    const { getByText } = render(<NavBar />);
    const linkElement = getByText("Tyres Direct");
    expect(linkElement).toBeInTheDocument();
  });

  test("TyreCard to render 'B250'", () => {
    setTimeout = (() => {
        const { getByText } = render(<TyreCard />);
        const linkElement = getByText("B250");
        expect(linkElement).toBeInTheDocument();
    }, 300)
  })

  test("TyreCard to render '£50.00'", () => {
    setTimeout = (() => {
      const { getByText } = render(<TyreCard />);
      const linkElement= getByText("£50.00");
      expect(linkElement).toBeInTheDocument();
    }, 300)
  })
})

