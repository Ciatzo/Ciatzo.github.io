<template>
    <div class="name" data-text="Resume">
        <a class="link" href="/files/ResumeCianJansen.pdf" target="_blank">⇒ Download as PDF ⇐</a> <br/> <br/>
        <u>Experience</u><br/>
        Android Developer<br/>
        <a class="link" href="https://www.bunq.com/" target="_blank">bunq</a> <br/>
        nov 2021 - jul 2022<br/>
        <br/>
        President of the Board<br/>
        <a class="link" href="debating.tudelft.nl/" target="_blank">TU Delft Debating Club</a> <br/>
        sep 2018 - jul 2019<br/>
        <br/>
        <u>Education</u><br/>
        MSc in Management<br/>
        <a class="link" href="https://www.bsm.upf.edu/en/master-science-management" target="_blank">upf - Barcelona School of Management</a> <br/>
        2021-2022<br/>
        <br/>
        BSc Computer Science and Engineering<br/>
        <a class="link" href=" https://www.tudelft.nl/en/education/programmes/bachelors/cse/bachelor-of-computer-science-and-engineering" target="_blank">Delft University of Technology</a> <br/>
        2017 - 2020<br/>
    </div>
</template>
  
<style lang="scss" scoped>  
  .name {
    position: absolute;
    bottom: 0;
    right: 0;
    text-align: right;
    font-size: 2.5rem;
    font-family: 'Raleway', sans-serif;
    font-weight: 300;    
    user-select: none;
    line-height:120%;

    @media screen and (max-width: 2000px) {
      font-size: 2rem;
  }

    @media screen and (max-width: 1500px) {
      font-size: 1.5rem;
  }

  @media screen and (max-width: 1000px) {
    font-size: 1rem;
  }
  }

  $color-white: black;
  $color-black: #ddd;
  $color-gray: #ddd;
  
  /* Animations */
  @mixin slide-in-out {
      -webkit-transition-duration: 0.5s;
      -moz-transition-duration: 0.5s;
      -o-transition-duration: 0.5s;
      transition-duration: 0.5s;
  }
  

    .nav-links-container {
        display: flex;
        flex-direction: column;
        justify-content: space-around;
        align-items: center;
        width: 100%;
        height: 70%;
    }

    /* Menu Button Styling */

    .menu {
        display: none;
        --color: black;
        z-index: 99999;
        width: 42px;
        height: 42px;
        padding: 0;
        margin: 0;
        margin-right: -2.5rem;
        outline: none;
        position: relative;
        border: none;
        background: none;
        cursor: pointer;
        -webkit-appearence: none;
        -webkit-tap-highlight-color: transparent;

        svg {
            width: 64px;
            height: 48px;
            top: -6px;
            left: -14px;
            stroke: var(--color);
            stroke-width: 4px;
            stroke-linecap: round;
            stroke-linejoin: round;
            fill: none;
            display: block;
            position: absolute;

            path {
                transition: stroke-dasharray var(--duration, 0.85s) var(--easing, ease) var(--delay, 0s), stroke-dashoffset var(--duration, 0.85s) var(--easing, ease) var(--delay, 0s);
                stroke-dasharray: var(--array-1, 26px) var(--array-2, 100px);
                stroke-dashoffset: var(--offset, 126px);
                transform: translateZ(0);

                &:nth-child(2) {
                    --duration: 0.7s;
                    --easing: ease-in;
                    --offset: 100px;
                    --array-2: 74px;
                }

                &:nth-child(3) {
                    --offset: 133px;
                    --array-2: 107px;
                }
            }
        }

        &.active {
            svg {
                path {
                    --offset: 57px;

                    &:nth-child(1),
                    &:nth-child(3) {
                        --delay: 0.15s;
                        --easing: cubic-bezier(0.2, 0.4, 0.2, 1.1);
                    }

                    &:nth-child(2) {
                        --duration: 0.4s;
                        --offset: 2px;
                        --array-1: 1px;
                    }

                    &:nth-child(3) {
                        --offset: 58px;
                    }
                }
            }
        }

        @media screen and (max-width: 1200px) {
            display: flex;
        }
    }

    /* Single link Styling */

    .link {
        font-size: 1em;
        font-weight: 400;
        color: $color-gray;
        text-decoration: none;
        line-height: inherit;
        background-image: linear-gradient(180deg, transparent 95%, $color-black 0);
        background-repeat: no-repeat;
        background-size: 0 100%;
        transition: background-size 0.4s ease;
        user-select: none;

        &:hover {
            background-size: 100% 100%;
            cursor: pointer;
        }
    }


  
  </style>
  