import React from 'react';
import { render, screen } from '@testing-library/react';
import ScorePage from './index';

test('Renders Live Score Board', () => {
    render(<ScorePage />);
    const linkElement = screen.getByText('Live Score Board');
    expect(linkElement).toBeInTheDocument();
});
