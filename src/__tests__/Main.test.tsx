import { render, screen } from '@testing-library/react';
import user from '@testing-library/user-event';

import Main from '../components/Main/Main';

test('renders Main component successfuly', async () => {
  const { container } = render(<Main />)

  const expectedHeader = 'Criar Aprensentação'
  const header = container.querySelector('h1')

  expect(header?.textContent).toBeTruthy()
  expect(header?.textContent).toBe(expectedHeader)
})

test('empty slide list inital state', async () => {
  const { container } = render(<Main />)

  const slideList = container.querySelector('.card-item')

  expect(slideList).toBe(null)
})

test('add one slide successfuly', async () => {
  const { container } = render(<Main />)

  const initialSlideList = container.querySelector('.card-item')
  const slideAddButton = await screen.findByText('Add')

  expect(initialSlideList).toBe(null)

  await user.click(slideAddButton)

  const slide = await screen.findByTestId('slide-0')

  expect(slide).toBeTruthy()
})

test('add many slides successfuly', async () => {
  const { container } = render(<Main />)

  const initialSlideList = container.querySelector('.card-item')
  const slideAddButton = await screen.findByText('Add')

  expect(initialSlideList).toBe(null)

  await user.click(slideAddButton)
  await user.click(slideAddButton)
  await user.click(slideAddButton)
  await user.click(slideAddButton)

  const slide0 = await screen.findByTestId('slide-0')
  const slide1 = await screen.findByTestId('slide-1')
  const slide2 = await screen.findByTestId('slide-2')
  const slide3 = await screen.findByTestId('slide-3')

  expect(slide0).toBeTruthy()
  expect(slide1).toBeTruthy()
  expect(slide2).toBeTruthy()
  expect(slide3).toBeTruthy()
})
