import React from 'react'
import { create } from 'react-test-renderer'
import PostCard from '../components/postCard'

describe('Post card component', () => {
    test('The expected post card title should be same!', () => {
        const component = create(<PostCard post={{title: 'Fake title', body: 'This is a fake body. Don\'t look at this!'}} />)
        const rootInstance = component.root
        expect(rootInstance.props.post.title).toBe('Fake title')
    })
    test('The expected post card body should be same!', () => {
        const component = create(<PostCard post={{title: 'Fake title', body: 'This is a fake body. Don\'t look at this!'}} />)
        const rootInstance = component.root
        expect(rootInstance.props.post.body).toBe('This is a fake body. Don\'t look at this!')
        })
})