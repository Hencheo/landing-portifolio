import React from 'react';
import styled from 'styled-components';

interface BotaoEstrelaProps {
  children: React.ReactNode;
  onClick?: () => void;
  className?: string;
  type?: 'button' | 'submit' | 'reset';
}

const StyledWrapper = styled.div`
  position: relative;
`;

const StyledButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 13rem;
  overflow: hidden;
  height: 3rem;
  background-size: 300% 300%;
  cursor: pointer;
  backdrop-filter: blur(1rem);
  border-radius: 5rem;
  transition: 0.5s;
  animation: gradient_301 5s ease infinite;
  border: double 4px transparent;
  background-image: linear-gradient(#212121, #212121),
    linear-gradient(
      137.48deg,
      #ffdb3b 10%,
      #fe53bb 45%,
      #8f51ea 67%,
      #0044ff 87%
    );
  background-origin: border-box;
  background-clip: content-box, border-box;
  
  &:hover {
    transform: scale(1.1);
  }
  
  &:active {
    border: double 4px #fe53bb;
    background-origin: border-box;
    background-clip: content-box, border-box;
    animation: none;
  }
  
  &:active .circle {
    background: #fe53bb;
  }
  
  &:hover #container-stars {
    z-index: 1;
    background-color: #212121;
  }
  
  @keyframes gradient_301 {
    0% {
      background-position: 0% 50%;
    }
    50% {
      background-position: 100% 50%;
    }
    100% {
      background-position: 0% 50%;
    }
  }
`;

const ButtonContent = styled.strong`
  z-index: 2;
  font-family: sans-serif;
  font-size: 12px;
  letter-spacing: 5px;
  color: #ffffff;
  text-shadow: 0 0 4px white;
  font-weight: 600;
  text-transform: uppercase;
`;

const ContainerStars = styled.div`
  position: absolute;
  z-index: -1;
  width: 100%;
  height: 100%;
  overflow: hidden;
  transition: 0.5s;
  backdrop-filter: blur(1rem);
  border-radius: 5rem;
`;

const Stars = styled.div`
  position: relative;
  background: transparent;
  width: 200rem;
  height: 200rem;
  
  &::after {
    content: "";
    position: absolute;
    top: -10rem;
    left: -100rem;
    width: 100%;
    height: 100%;
    animation: animStarRotate 90s linear infinite;
    background-image: radial-gradient(#ffffff 1px, transparent 1%);
    background-size: 50px 50px;
  }
  
  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: -50%;
    width: 170%;
    height: 500%;
    animation: animStar 60s linear infinite;
    background-image: radial-gradient(#ffffff 1px, transparent 1%);
    background-size: 50px 50px;
    opacity: 0.5;
  }
  
  @keyframes animStar {
    from {
      transform: translateY(0);
    }
    to {
      transform: translateY(-135rem);
    }
  }
  
  @keyframes animStarRotate {
    from {
      transform: rotate(360deg);
    }
    to {
      transform: rotate(0);
    }
  }
`;

const Glow = styled.div`
  position: absolute;
  display: flex;
  width: 12rem;
`;

const Circle = styled.div`
  width: 100%;
  height: 30px;
  filter: blur(2rem);
  animation: pulse_3011 4s infinite;
  z-index: -1;
  
  &:nth-of-type(1) {
    background: rgba(254, 83, 186, 0.636);
  }
  
  &:nth-of-type(2) {
    background: rgba(142, 81, 234, 0.704);
  }
  
  @keyframes pulse_3011 {
    0% {
      transform: scale(0.75);
      box-shadow: 0 0 0 0 rgba(0, 0, 0, 0.7);
    }
    70% {
      transform: scale(1);
      box-shadow: 0 0 0 10px rgba(0, 0, 0, 0);
    }
    100% {
      transform: scale(0.75);
      box-shadow: 0 0 0 0 rgba(0, 0, 0, 0);
    }
  }
`;

/**
 * Botão com efeito de estrelas brilhantes e borda colorida
 */
const BotaoEstrela: React.FC<BotaoEstrelaProps> = ({ 
  children, 
  onClick, 
  className = '', 
  type = 'button' 
}) => {
  return (
    <StyledWrapper>
      <StyledButton 
        type={type} 
        onClick={onClick} 
        className={`btn ${className}`}
      >
        <ContainerStars id="container-stars">
          <Stars id="stars" />
        </ContainerStars>

        <Glow id="glow">
          <Circle className="circle" />
          <Circle className="circle" />
        </Glow>
        
        <ButtonContent>{children}</ButtonContent>
      </StyledButton>
    </StyledWrapper>
  );
};

export default BotaoEstrela; 