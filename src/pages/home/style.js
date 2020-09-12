import styled from 'styled-components'

const HomeWrapper = styled.div`
  &{
    max-width: 960px;
    margin: 0 auto;
    .main {
      width: 66%;
      padding: 30px;
      .list-container{
        .note-list{
          .note{

          }
          .wrap-img{
            img{
              width: 130px;
              margin: 20px 10px;
            }
          }
          .contert{
            .title{
              color: black;
              display: block;
              margin-bottom: 10px;
              font-size: 22px;
            }
            p{
              font-size: 10px;
              margin-bottom: 12px;
              color: #999;
              line-height: 25px;
            }
            .meta{
                font-size: 12px;
            }
          }
        }
      }
    }
    .aside{
      width: 29%;
    }
  }
`

export default HomeWrapper;