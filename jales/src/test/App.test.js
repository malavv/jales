import { render, screen } from '@testing-library/react';
import DebugViewer from '../viewer/debug/Viewer';

test('renders app shows file title', () => {
  const content = {};

  render(<DebugViewer content={content} />);
  
  const recipe = screen.getByText(/\{\}/i);
  expect(recipe).toBeInTheDocument();
});
