import styled from "styled-components";

const CertificateSection = styled.div `
  
  .container{
    padding: 50px 15px;
    max-width: 1100px;
    margin: 0 auto;

    h1{
      color: var(--secondary);
      text-align: center;
      margin-bottom: 5rem;
      margin-top: 20px;
      line-height: 0.5;

      span{
        color: var(--primary);
      }
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

export default CertificateSection;