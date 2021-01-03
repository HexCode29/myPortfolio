import styled from "styled-components";


const Section = styled.section `
 background: var(--light);  
 

  .container{
    max-width: 1100px;
    padding: 50px 15px;
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

    h1 + p{
      color: var(--ternary);
      font-family: "Lato", sans-serif;
      text-align: center;
      margin-bottom: 5rem;

      @media (max-width: 576px){
        margin-bottom: 3rem;
      }
    }

    .card-wrapper{
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
      grid-column-gap: 2rem;
      grid-row-gap: 2rem;

      .card{
        background: var(--pure);
        padding: 3rem 2rem;
        position: relative;
        padding-top: 5rem;
        text-align: center;
        transition: all .3s ease;

        &:hover{
          background: var(--dark);

          h2,p{
            color: var(--pure);
          }
        }

        img{
          position: absolute;
          top: 1.7rem;
          left: 50%;
          transform: translateX(-50%)
        }

        h2{
          font-weight: 400;
          font-size: 1.2rem;
          margin-bottom: 0.5rem;
        }

        p{
          font-family: "Lato", sans-serif;
          color: var(--ternary);
          line-height: 1.6;
        }
      }
    }
  }

`;


export default Section;