import styled from "styled-components";


const Section  = styled.section `
  background: var(--pure);
  
  .container{
    padding: 50px 15px;
    max-width: 1100px;
    margin: 0 auto;

    h1#mainHead{
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
      margin-bottom: 5rem
    }

    .card-wrapper{
      display: grid;
      grid-template-columns: repeat(2, 1fr);

      .card{
        text-align: center;

        img{
          margin-bottom: 1rem;
          width: 64px;
        }

        h1{
          font-weight: 400;
          margin-bottom: 1rem;
        }

        h6{
          font-size: 1rem;
          color: var(--ternary);
          font-weight: 400;
          margin-bottom: 4rem;
        }
      }

      @media (max-width: 576px){
        grid-template-columns: repeat(1, 1fr);
      }
    }


    form{   
      input{
        padding: 0.5rem;
        border: 1px solid var(--light);
        font-size: 0.9rem;

        &:focus{
          outline: none;
        }
      }

      div.input-wrap{
        display: grid;
        grid-template-columns: repeat(2, 1fr);
        grid-gap: 2rem;
        margin-bottom: 2rem;

        
        @media (max-width: 576px){
          grid-template-columns: repeat(1, 1fr);
        }
      }

      div.input-wrap-2{
        display: flex;
        flex-direction: column;

        input{
          margin-bottom: 2rem;
        }

        textarea{
          padding: 0.5rem;
          border: 1px solid var(--light);
          font-size: 1rem;

          &:focus{
            outline: none;
          }
        }
      }
  
      div.sendMsg{
        text-align: center;

        button {
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
          margin-top: 2rem;
    
          &:hover{
            background: transparent;
            border-color: var(--primary);
            color: var(--primary);
          }
        }
      }
    } 
  }

`;


export default Section;