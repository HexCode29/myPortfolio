import styled from "styled-components";


const Section = styled.section `

background: var(--dark);
text-align: center;
padding: 5rem 0;

.site-logo {
  width: 32px;
  height: 32px;
  display: block;
  overflow: visible;
  border: 4px solid var(--primary);
  position: relative;
  top: 0%;
  left: 48%;
  color: var(--pure);
  text-decoration: none;
  transform: rotate(0deg);
  transition: transform 0.4s ease-in-out;
  margin-bottom: 3rem;

  &:hover{
    opacity: 1;
    transform: rotate(-90deg);
    transition: transform 0.4s ease-in-out;

    .logo-text{
      transform: translate(-50%, -50%) rotate(90deg);
      transform-origin: center;
    }
  }

  .logo-text{
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%) rotate(0deg);
    transition: transform 0.4s ease-in-out;
    font-weight: bold;
    font-size: 10px;
  }
}

@media (min-width: 600px) {
  .site-logo {
    width: 50px;
    height: 50px;
    border: 5px solid var(--primary);

    .logo-text{
      font-size: 13px;
    }
  }
}

.footer-socials{
margin-bottom: 3rem;
  
  a{
    margin-right: 1rem;
    
    img{
      width: 35px;
      height: 35px;
    }
  }
}


div.copyright{
  color: var(--ternary);
}

`;


export default Section;