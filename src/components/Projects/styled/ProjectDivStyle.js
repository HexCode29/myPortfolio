import styled from "styled-components";


const Section = styled.section `  
    text-align: center;
    background: linear-gradient(rgba(0,0,0,0.7),rgba(0,0,0,0.7)), url(../../../images/camera.png);
    padding: 10rem 0;
    color: var(--pure);
    clip-path: polygon(0 0, 100% 0, 100% 100%, 70% 80%, 0 100%);
    padding-bottom: 14rem;


    h1{
      font-size: 2rem;
      margin-bottom: 0.5rem;
    }

    p{
      margin-bottom: 2rem;
      font-family: "Lato", sans-serif;
    }

    button{
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

    @media (max-width: 576px){
      
      clip-path: polygon(0 0,100% 0,100% 100%,77% 88%,0 100%);
      padding: 8rem 0;
      
      h1{
        line-height: 1.2;
        font-size: 1.6rem;
        margin-bottom: 1.5rem;
      }
    }
`;


const ProjectSection = styled.div `
  
  .container{
    padding: 50px 15px;
    max-width: 1100px;
    margin: 0 auto;

    h1{
      color: var(--secondary);
      text-align: center;
      margin-bottom: 1rem;
      margin-top: 20px;
      line-height: 0.5;

      span{
        color: var(--primary);
      }
    }

    p{
      color: var(--ternary);
      font-family: "Lato",sans-serif;
      text-align: center;
      margin-bottom: 5rem;
    }

    .card-wrapper{
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
      grid-gap: 2rem;

      .card{
        position: relative;

        &:hover{
          .overlay{
            opacity: 1;
          }
        }

        img{
          width: 100%;
        }

        .overlay{
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background: rgba(242,170,76, 0.9);
          display: flex;
          justify-content: center;
          align-items: center;
          opacity: 0;
          transition: all .3s ease;

          a{
            color: var(--secondary);
            text-decoration: none;
          }
        }
      }
    }
  }

`;

export {ProjectSection};

export default Section;