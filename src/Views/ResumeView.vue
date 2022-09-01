<template>
    <div class="name" data-text="Resume">
        <u>Experience</u><br/>
        Android Developer<br/>
        bunq<br/>
        nov 2021 - jul 2022<br/>
        <br/>
        President<br/>
        TU Delft Debating Club<br/>
        sep 2018 - jul 2019<br/>
        <br/>
        <u>Education</u><br/>
        MSc in Management<br/>
        upf - Barcelona School of Management<br/>
        2021-2022<br/>
        <br/>
        BSc Computer Science and Engineering<br/>
        Delft University of Technology<br/>
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
  </style>
  