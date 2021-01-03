import styled from "styled-components";


const Section = styled.section `
 padding: 6rem 0;
 background: var(--pure);
   


  .container{
    max-width: 1100px;
    padding: 0 15px;
    margin: 0 auto;
    display: flex;
    align-items: center;

    .aboutImg{
      flex: 1;

      img {
        height: 450px;
      }
    }

    @media (max-width: 1024px){
      .aboutImg img{
        height: 360px;
      }
    }

    .bio{
      flex: 1;

      h1{
        margin-bottom: 1rem;
        font-size: 1.6rem;
        font-weight: 400;

        span{
          color: var(--primary);
        }
      }

      h3{
        font-size: 1rem;
        margin-bottom: 1rem;
        font-weight: 400;
        
        span{
          color: var(--primary);
        }
      }

      p{
        font-family: "Lato", sans-serif;
        color: var(--ternary);
        line-height: 1.8;
        margin-bottom: 2rem;
      }

      div.social{
        display: flex;

        a{
          display: flex;
          align-items: center;
          justify-content: center;
          width: 35px;
          height: 35px;
          background: var(--dark);
          border-radius: 50%;
          margin-right: 0.6rem;
          transition: all .3s ease;

          &:hover{
            background: var(--primary);
          }

          img{
            width: 100%;
            height: 100%;
            padding: 0.5rem;
          }
        }
      }
    }

  }

  @media (max-width: 576px){
    
    padding: 3rem 0;

    .container{
      flex-direction: column;
    
      .bio{
        margin-top: 2rem;
        text-align: center;
        
        .social{
          justify-content: center;
        }
      }
    }
  }


`;



export default Section;