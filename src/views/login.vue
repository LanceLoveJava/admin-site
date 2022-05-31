<template>
  <section class="content">
    <div class="up-register">
      <div class="box">
        <div class="title">登录</div>
        <div class="input">
          <label for="name">用户名</label>
          <input type="text" name="name" id="name" />
          <span class="spin"></span>
        </div>
        <div class="input">
          <label for="pass">密码</label>
          <input type="password" name="pass" id="pass" />
          <span class="spin"></span>
        </div>
        <div class="button login">
          <button>
            <span>登录</span>
            <i class="fa fa-check"></i>
          </button>
        </div>
        <a href="javascript:" class="pass-forgot">忘记密码？</a>
      </div>
      <!-- <div class="overbox">
        <div class="material-button alt-2">
          <span class="shape"></span>
        </div>
        <div class="title">注册</div>
        <div class="input">
          <label for="regname">用户名</label>
          <input type="text" name="regname" id="regname" />
          <span class="spin"></span>
        </div>
        <div class="input">
          <label for="regpass">密码</label>
          <input type="password" name="regpass" id="regpass" />
          <span class="spin"></span>
        </div>
        <div class="input">
          <label for="reregpass">确认密码</label>
          <input type="password" name="reregpass" id="reregpass" />
          <span class="spin"></span>
        </div>
        <div class="button">
          <button>
            <span>注册</span>
          </button>
        </div>
      </div> -->
    </div>
  </section>
</template>

<script lang="ts">
import serve from '@/api/axios';
export default {
  name: 'Login',
  components: {},
  setup() {
    const demo = () => {
      serve
        .post('/common/login', { username: 'admin', password: '123456' })
        .then((res) => {
          console.log(res);
        })
        .catch((error) => {
          console.log(error);
        });
    };
    return {
      demo,
    };
  },
};
</script>

<style scoped lang="less">
.content {
  min-width: 100%;
  min-height: 100vh;
  position: relative;
  background-color: #eee;
}
.up-register {
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate3d(-50%, -50%, 0);
  .box {
    position: relative;
    top: 0;
    opacity: 1;
    padding: 60px 50px 40px 50px;
    width: 100%;
    background: #fff;
    border-radius: 10px;
    transform: scale(1);
    -webkit-transform: scale(1);
    -ms-transform: scale(1);
    z-index: 5;
    &::before {
      content: '';
      width: 100%;
      height: 30px;
      border-radius: 10px;
      position: absolute;
      top: -10px;
      background: rgba(255, 255, 255, 0.6);
      left: 0;
      transform: scale(0.95);
      -webkit-transform: scale(0.95);
      -ms-transform: scale(0.95);
      z-index: -1;
    }
  }
  .title {
    width: 100%;
    line-height: 46px;
    font-size: 34px;
    font-weight: 700;
    letter-spacing: 2px;
    color: #ed2553;
    position: relative;
    &::before {
      content: '';
      width: 5px;
      height: 100%;
      position: absolute;
      top: 0;
      left: -50px;
      background: #ed2553;
    }
  }
  .input {
    position: relative;
    width: 100%;
    margin-top: 30px;
    height: 70px;
    input,
    .spin,
    label {
      width: 100%;
      font-family: 'Roboto', sans-serif;
      font-size: 24px;
      color: rgba(0, 0, 0, 0.8);
      font-weight: 300;
      position: absolute;
      top: 10px;
      left: 0;
      z-index: 2;
      cursor: pointer;
      line-height: 60px;
    }
    input {
      position: relative;
      height: 60px;
      top: 10px;
      border: none;
      background: transparent;
      outline: none;
    }
    .spin {
      width: 100%;
      height: 1px;
      position: absolute;
      bottom: 0;
      left: 0;
      background: #ed2553;
      z-index: 4;
      width: 0;
    }
    &::before {
      width: 100%;
      height: 1px;
      position: absolute;
      bottom: 0;
      left: 0;
      content: '';
      background: rgba(0, 0, 0, 0.1);
      z-index: 3;
    }
  }
  .button {
    font-family: 'Roboto', sans-serif;
    font-size: 24px;
    color: rgba(0, 0, 0, 0.8);
    font-weight: 300;
    position: relative;
    width: 100%;
    height: 70px;
    margin: 30px auto 40px;
    overflow: hidden;
    z-index: 2;
    &.login {
      width: 60%;
    }
    button {
      width: 100%;
      line-height: 64px;
      background-color: transparent;
      border: 3px solid rgba(0, 0, 0, 0.1);
      font-weight: 900;
      font-size: 18px;
      color: rgba(0, 0, 0, 0.2);
      background-color: #fff;
      color: #ed2553;
      &:hover {
        color: #ed2553;
        border-color: #ed2553;
      }
      .active {
        border: 3px solid transparent;
        color: #fff !important;
        span {
          opacity: 0;
          transform: scale(0);
          -webkit-transform: scale(0);
          -ms-transform: scale(0);
        }
        i.fa {
          width: 100%;
          height: 100%;
          position: absolute;
          top: 0;
          left: 0;
          line-height: 60px;
          transform: scale(0) rotate(-45deg);
          -webkit-transform: scale(0) rotate(-45deg);
          -ms-transform: scale(0) rotate(-45deg);
          opacity: 1;
          transform: scale(1) rotate(-0deg);
          -webkit-transform: scale(1) rotate(-0deg);
          -ms-transform: scale(1) rotate(-0deg);
        }
      }
    }
  }
  .pass-forgot {
    width: 100%;
    display: block;
    text-align: center;
    color: rgba(0, 0, 0, 0.4);
    font-size: 18px;
    text-decoration: none;
  }
}
</style>
