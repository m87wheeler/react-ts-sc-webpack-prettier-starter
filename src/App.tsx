import React from 'react'
import styled, { css } from 'styled-components'

const gradient = css`
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen,
        Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    text-align: center;
    background: linear-gradient(to right, #f32170, #ff6b08, #cf23cf, #eedd44);
    -webkit-text-fill-color: transparent;
    background-clip: text;
    -webkit-background-clip: text;
`

const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 2rem;
`

const Welcome = styled.h1`
    font-size: 8rem;
    line-height: 1.5;
    margin: 0;
    ${gradient};
`

const Text = styled.p`
    font-size: 2.5rem;
    font-weight: 500;
    ${gradient};
`

const Button = styled.a`
    display: inline-block;
    margin: 0 auto;
    padding: 0.75rem 2.5rem;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen,
        Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    font-size: 1.5rem;
    color: white;
    background: linear-gradient(to right, #f32170, #ff6b08, #cf23cf, #eedd44);
    background-attachment: fixed;
    cursor: pointer;
`

const App: React.FC = () => {
    return (
        <Container>
            <Welcome>My App</Welcome>
            <Text>
                React, TypeScript, Styled Components, Webpack, Babel &amp;
                ESLint
            </Text>
            <Button>GitHub</Button>
        </Container>
    )
}

export default App
