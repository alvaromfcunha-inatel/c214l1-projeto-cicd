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

  const slide = container.querySelector('#slide-1')

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

  const slide1 = container.querySelector('#slide-1')
  const slide2 = container.querySelector('#slide-2')
  const slide3 = container.querySelector('#slide-3')
  const slide4 = container.querySelector('#slide-4')

  expect(slide1).toBeTruthy()
  expect(slide2).toBeTruthy()
  expect(slide3).toBeTruthy()
  expect(slide4).toBeTruthy()
})
