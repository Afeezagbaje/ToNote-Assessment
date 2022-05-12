/* eslint-disable @typescript-eslint/no-unused-expressions */
import ReactDOM from 'react-dom';
import { cleanup, render, screen } from '@testing-library/react';
import '@testing-library/jest-dom'

import HeroContent from '../components/heroContent/HeroContent';

afterEach(() => {
  cleanup();
});

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<HeroContent />, div);
});

it('should render hero content properly', () => {
	render(<HeroContent  />);
	const h3Element = screen.getByText(/SBS MTV The Kpop Show Ticket Package/i);
	expect(h3Element).toBeVisible();
});

it('should render hero content properly in the DOM', () => {
	render(<HeroContent  />);
	const paragraphElement = screen.getByText(/Look no further! Our SBS The Show tickets are the simplest way for you to experience a live Kpop recording./i);
	expect(paragraphElement).toBeInTheDocument();
});
