import React from 'react';
import { render, screen } from '@testing-library/react';
import Loader from './Loader';

describe('Loader component', () => {
  it('renders LinearProgress and CircularProgress when there is no error', () => {
    render(<Loader error="" />);
    
    // Verifica que LinearProgress se esté mostrando
    expect(screen.getByTitle('linear')).toBeInTheDocument();
  });

  it('renders error message when there is an error', () => {
    const errorMessage = 'An error occurred';
    render(<Loader error={errorMessage} />);
    
    // Verificar mensaje de error
    expect(screen.getByText(errorMessage)).toBeInTheDocument();
  });

  it('renders CircularProgress regardless of error state', () => {
    render(<Loader error="An error occurred" />);
    
    // Verifica que CircularProgress siempre esté presente
    expect(screen.getByTitle('circular')).toBeInTheDocument();
  });
});
