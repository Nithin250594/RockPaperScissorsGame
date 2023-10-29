import styled from 'styled-components'

import {RiCloseLine} from 'react-icons/ri'

export const RockPaperScissorsBg = styled.div`
  background-color: #223a5f;
  opacity: ${props => (props.popup ? 0.2 : 1)};
  height: 100vh;
  padding-top: 50px;
  padding-bottom: 50px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  @media screen and (max-width: 576px) {
    min-height: 100vh;
  }
`
export const RockPaperScissorsUl = styled.ul`
  padding-left: 0px;
  list-style-type: none;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  margin-top: 80px;
  padding-left: 500px;
  padding-right: 500px;
  @media screen and (max-width: 576px) {
    padding-left: 5px;
    padding-right: 5px;
  }
`

export const ImageChoice = styled.img`
  width: 180px;
  height: 180px;
`
export const RulesButton = styled.button`
  background-color: #ffffff;
  color: #223a5f;
  font-size: 12px;
  font-weight: 600;
  font-family:"Bree Serif"
  border-width: 0px;
  padding-left: 15px;
  padding-right: 15px;
  padding-top: 8px;
  padding-bottom: 8px;
  align-self: flex-end;
  border-radius: 5px;
  margin-right:8px;
  cursor:pointer;
  outline:none;
`

export const PopupContainer = styled.div`
  background-color: #ffffff;
  position: fixed;
  width: 50%;
  top: 15%;
  left: 25%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 20px;

  @media screen and (max-width: 576px) {
    width: 90%;
    top: 35%;
    left: 5%;
  }
`
export const IconCross = styled(RiCloseLine)`
  align-self: flex-end;
  width: 25px;
`

export const RulesImage = styled.img`
  width: 40vw;

  @media screen and (max-width: 576px) {
    width: 80%;
  }
`

export const GameResultView = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 80px;
`

export const GameChoiceView = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`

export const ChoiceView = styled(GameResultView)`
  flex-direction: column;
`

export const ChoiceTitle = styled.h1`
  color: #ffffff;
  font-size: 18px;
  font-weight: 500;
  font-family: 'Roboto';
`

export const GameResult = styled.p`
  color: #ffffff;
  font-size: 28px;
  font-weight: 600;
  font-family: 'Roboto';
`

export const PlayAgainButton = styled(RulesButton)`
  font-size: 14px;
  padding-left: 28px;
  padding-right: 28px;
  padding-top: 12px;
  padding-bottom: 12px;
  border-radius: 10px;
  align-self: center;
`
