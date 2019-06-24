import React from 'react'
import { render, cleanup, waitForElement } from '@testing-library/react'
import moxios from 'moxios'
import PostCardContainer from '../components/postCardContainer'

describe('Post card container test suite. Mock get request.', () => {
    test('This test will fetch posts.', async () => {
        const response = [
            {title: 'One', body: 'One - body'},
            {title: 'Two', body: 'Two - body'},
            {title: 'Three', body: 'Three - body'}
        ]
        const {getByText, getByTestId, container, asFragment} = render(
            <PostCardContainer />,
        )
        //expect(axiosMock.get).toHaveBeenCalledTimes(1)
    })
})