<template>
    <div class="bottom-right-text" data-text="Bio">
      BSc  in Computer Science and Engineering from Delft University of Technology, and MSc in Management from UPF - Barcelona School of Management. Passion for solving societal problems with novel technological solutions. Avid debater, having served as the President of the TU Delft Debating Club. One year of industry experience working as Android Developer at bunq, bank of The Free. Experience developing features, improving CI/CD tools and working with product owners. Interested in energy transition, alternative mobility and fintech.
    </div>
  </template>
  
  <style lang="scss" scoped>  
  .bottom-right-text {
    position: absolute;
    bottom: 0;
    right: 0;
    text-align: right;
    font-size: 2.5rem;
    font-family: 'Raleway', sans-serif;
    font-weight: 200;    
    user-select: none;

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
  