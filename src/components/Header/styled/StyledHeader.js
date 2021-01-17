import styled from "styled-components";


const StyledHeader = styled.header `
  background: var(--dark);
  clip-path: polygon(0 0, 100% 0, 100% 100%, 70% 80%, 0 100%);

  div.container {
    max-width: 1100px;
    padding: 0 15px;
    margin: 0 auto;
  } 

  nav{
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 2rem 0;

    .left {
      display: flex;
      align-items: center;

      .branding {
        margin-right: 3rem;

        .site-logo{
          width: 32px;
          height: 32px;
          display: block;
          overflow: visible;
          border: 4px solid var(--primary);
          position: relative;
          color: var(--pure);
          text-decoration: none;
          transform: rotate(0deg);
          transition: transform 0.4s ease-in-out;

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
      }

      .nav-link a {
        color: var(--pure);
        text-decoration: none;
        margin-right: 2rem;
        text-transform: uppercase;
        transition: all 0.3s ease;

        &:hover{
          color: var(--primary);
        }
      }
    }

    .right button{
      padding: 0.8rem 2.5rem;
      font-size: 1rem;
      font-weight: 600;
      border: 2px solid transparent;
      outline: none;
      cursor: pointer;
      background: var(--primary);
      color: var(--secondary);
      text-transform: uppercase;
      transition: all 0.3s ease;

      &:hover{
        background: transparent;
        border-color: var(--primary);
        color: var(--primary);
      }
    }
  }

  .hero{
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 3rem 0;

    .description {
      color: var(--pure);
      margin-top: 1rem;
      
      h1{
        font-size: 3rem;
        font-weight: 100;
        line-height: 1.1;
        margin-bottom: 2rem;

        span{
          color: var(--primary);
        }
      }

      h6{
        font-size: 1.5rem;
        color: var(--primary);
        margin-bottom: 0.5rem;
      }

      p{
        line-height: 1.8rem;
        margin-bottom: 2rem;
      }

      div button {
        background: transparent;
        padding: 0.8rem 2.5rem;
        font-weight: 600;
        margin-bottom: 30px;
        color: var(--primary);
        cursor: pointer;
        border: 2px solid var(--primary);

        &:hover{
          background: var(--primary);
          color: var(--secondary);
        }
      }
    }
  }

  @media (max-width: 1024px){
    clip-path: polygon(0 0,100% 0,100% 100%,70% 91%,0 100%);


    .container{
      .hero{
        padding-top: 10rem;

        .description h1{          
           font-size: 2rem;
        }
      }
    }  
  }

  @media (max-width: 576px){
    .container{

      #main-nav .right {
        display: none;
      }

      .hero .description{
        padding: 0 1rem;
      }
    } 
  }

  @media (min-width: 576px){
    .container{
      max-width: 540px;
    }
  }
  
  
  @media (min-width: 768px){
    .container{
      max-width: 720px;
    }
  }
  
  
  @media (min-width: 992px){
    .container{
      max-width: 960px;
    }
  }
  
  
  @media (min-width: 1200px){
    .container{
      max-width: 1100px;
    }
  }

  @media (max-width: 476px){
    .container{
      #main-nav{
        .nav-link #projects{
          display: none;
        }
      }
    }
  }
  
`;



export default StyledHeader;
