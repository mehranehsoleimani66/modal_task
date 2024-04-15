"use client";
import styled from "styled-components";

export const ModalContainer = styled.div<{ $width: number | undefined }>`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  transition: 0.9s;
  width: 100vw;
  height: 100vh;
 
  .wrapper-modal {
    display: flex;
    justify-content: center;
    align-items: center;
    
    width: 100%;
    height: 100%;
    opacity: 0.9;
  }
  .content {
    width: ${(prop) => prop.$width?.toString().concat("px") || "auto"};
    background-color: #43B9F8;
    height: 300px;
    z-index: 100;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translateX(-50%) translateY(-50%);
    border-radius: 50px;
box-shadow:  0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1);
  }

  @keyframes top {
    from {
      top: -1000px;
    }
    to {
      top: 50%;
    }
  }
  @keyframes left {
    from {
      left: -1000px;
    }
    to {
      left: 50%;
    }
  }
  @keyframes right {
    from {
      left: calc(100vw + 100px);
    }
    to {
      left: 50%;
    }
  }
  @keyframes bottom {
    from {
      top: calc(100vh + 100px);
    }
    to {
      top: 50%;
    }
  }
  .top {
    animation: top 0.5s ease-out;
  }
  .left {
    animation: left 0.5s ease-out;
  }
  .right {
    animation: right 0.5s ease-out;
  }
  .bottom {
    animation: bottom 0.5s ease-out;
  }
`;
