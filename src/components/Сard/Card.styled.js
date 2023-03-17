import styled from 'styled-components';
import picture from 'assets/picture.svg'

export const Wrapper = styled.div`
  height: 460px;
  width: 380px;
  align-items: center;
  justify-content: center;
  border-radius: 20px;
  background: linear-gradient(114.99deg, #471CA9 -0.99%, #5736A3 54.28%, #4B2A99 78.99%);
  box-shadow: -2.5777px 6.87386px 20.6216px rgba(0, 0, 0, 0.23);
`
export const TopContainer = styled.div`
  padding: 20px 36px 18px 20px;
`
export const Picture = styled.div`
  position: relative;
  width: 308px;
  height: 168px;
  margin-left: 16px;
  margin-top: 8px;
  background-repeat: no-repeat;
  background-size: cover;
  background-image: url(${picture});
`
export const Button = styled.button`
  width: 196px;
  height: 50px;
  background: #EBD8FF;
  box-shadow: 0 3.43693px 3.43693px rgba(0, 0, 0, 0.25);
  border-radius: 10.3108px;
  font-weight: 600;
  font-size: 18px;
  color: #373737;
  font-style: normal;
  text-transform: uppercase
`
export const Logo = styled.img`
  position: absolute;
`
export const Rectangle = styled.div`
  width: 380px;
  height: 8px;
  position: relative;
  background: #EBD8FF;
  box-shadow: 0 3.43693px 3.43693px rgba(0, 0, 0, 0.06), inset 0px -1.71846px 3.43693px #AE7BE3, inset 0px 3.43693px 2.5777px #FBF8FF;
`
export const Ellipse = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 80px;
  height: 80px;

  border-radius: 50%;
  background-color: #EBD8FF;
  box-shadow: 0 4.39163px 4.39163px rgba(0, 0, 0, 0.06),
  inset 0px -2.19582px 4.39163px #AE7BE3,
  inset 0px 4.39163px 3.29372px #FBF8FF;
`
export const User = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 62px;
  height: 62px;
  border-radius: 50%;
  background-color:#5736A3;
`
export const Img = styled.img`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 65px;
  height: 65px;
`
export const BottomContainer = styled.div`
  padding: 42px 0 0 0;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`
export const Name = styled.div`
  font-weight: 600;
  font-size: 20px;
  margin-bottom: 10px;
`
export const Tweets = styled.div`
  text-transform: uppercase;
  font-style: normal;
  font-size: 20px;
  line-height: 24px;
  font-weight: 500;
  color: #EBD8FF;
  margin-bottom: 16px;
`
export const Followers = styled.div`
  font-style: normal;
  font-weight: 500;
  font-size: 20px;
  line-height: 24px;
  text-transform: uppercase;
  margin-bottom: 16px;
  color: #EBD8FF;
`
