import styled from 'styled-components'

export const ScoreHeaderContainer = styled.div`
  background-color: transparent;
  height: 15vh;
  border: 2px #ffffff solid;
  border-radius: 7px;
  padding: 25px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 60%;

  @media screen and (max-width: 576px) {
    height: 20vh;
    width: 90%;
    padding: 35px;
  }
`

export const ScoreTitle = styled.h1`
  color: #ffffff;
  font-size: 18px;
  font-weight: 400;
  font-family: 'Bree Serif';
`

export const ScoreBox = styled.div`
  background-color: #ffffff;
  border-radius: 8px;
  width: 120px;
  height: 90px;
  padding-top: 20px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  @media screen and (max-width: 576px) {
    width: 100px;
    height: 80px;
  }
`

export const ScoreText = styled.p`
  font-size: 18px;
  font-weight: 400;
  font-family: 'Bree Serif';
  color: #223a5f;
  margin-bottom: 0px;
`

export const ScoreNumber = styled.p`
  color: #223a5f;
  font-size: 32px;
  margin-top: 0px;
  font-family: 'Roboto';
  font-weight: 500;
`
