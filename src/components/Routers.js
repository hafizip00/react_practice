import styled from 'styled-components'



export const Nav = styled.div`
    background-color: #33ccdd;
    width: 100%;
    height: 90px;
    display: flex;
    justify-content: center;
    padding: .3rem;
    align-items: center;
    @media screen and (max-width: 400px){
    padding: .5rem;

}
`

export const Wrapper = styled.div`
    display: flex;
    justify-content: center;
    height: 90px;
    width: 100%;
    align-items: center;

    
}
`

export const Element = styled.span`
    color: black;
    font-size: large;
    border-bottom: .25rem;
    padding: .5em;

}
`

export const Logo = styled.h2`
    font-weight: bold;
    padding-left: 0.2em;
`

export const Signup = styled.button`
    height: 4rem;
    padding-left: 4rem;
    padding-right: 4rem;
    border-radius: 4rem;
    background-color: transparent;
    margin-right: 4rem;

`