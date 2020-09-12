import styled from 'styled-components'
import logo from '../../statics/logo.png'

export const HeaderWrapper = styled.nav`
  &{
    width: 100%;
    border-bottom: 1px solid #ccc;
    .nav{
      margin: 0 auto;
      max-width: 99%;
      height: 50px;
    }
    .logo-box{
      float: left;
      .logo{
      display: block;
      width: 100px;
      height: 50px;
      background: url('${logo}');
      background-size: contain;
      }
    }
    .navbar{
      max-width: 900px;
      margin: 0 auto;
      .nav-link{
        line-height: 50px;
        a{
          margin: 0 20px;
          color: black;
          i {
            font-size: 12px;
          }
        }
        .seek{
          position: relative;
          display: inline-block;
          input{
            outline: none;
            padding: 0 20px;
            background: #eee;
            width: 150px;
            transition: width 0.5s;
            height: 33px;
            border: 0;
            border-radius: 20px;
          }
          .focused {
            width: 200px;
          }
          .Icon {
            color: #ea6f5a;
          }
          .seek-icon{
            position: absolute;
            top: 0.5px;
            right: 15px;
            transition: color 0.5s;
          }
        }
        .style-mode{
          float: right;
        }
      }
    }
    .right-btn{
      line-height: 50px;
      float: right;
      a{
        font-size: 14px;
        padding: 10px 20px;
        width: 50px;
        height: 40px;
        margin: 0 15px;
        border-radius: 20px;
      }
      .log-in{
        color: #969696;
      }
      .sign-up{
        color: #ea6f5a;
        border: 1px solid rgba(236,97,73,.7);
      }
      .write{
        color: #fff;
        background: #ea6f5a;
      }
    }
   }
`;

export const SearchInfo = styled.div`
  &{
    background: #fff;
    position: absolute;
    left: 0;
    top: 50px;
    width: 240px;
    padding: 0 20px;
    box-shadow: 0 0 8px rgba(0, 0, 0, .2);
    .hot-show {
      display: block !important;
    }
    .search-hot {
      display: none;
      margin-top: 20px;
      margin-bottom: 15px;
      line-height: 20px;
      font-size: 14px;
      color: #969696;
      .crux {
        margin-top: 15px;
        margin-bottom: 15px;
        ul{
          li{
            float: left;
            a{
              margin: 3px 10px;
              display: block;
              line-height: 20px;
              padding: 0 5px;
              font-size: 12px;
              border: 1px solid #ddd;
              color: #969696;
              border-radius: 3px;
            }
          }
        }
      }
    }
  }
`;