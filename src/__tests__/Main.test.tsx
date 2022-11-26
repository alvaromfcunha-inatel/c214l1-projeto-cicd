import { render, screen } from '@testing-library/react';

import Main from '../components/Main/Main';

test('renders Main component successfuly', async () => {
  render(<Main />)

  const expectedHeader = 'Criar Aprensentação'
  const header = await screen.findByText(expectedHeader)

  expect(header).toBeTruthy()
})