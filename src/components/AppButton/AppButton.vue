<template>
  <div>
    <a href="#"
      class="button"
    >
      {{ search }}
    </a>
  </div>
</template>
<script>
export default {
  name: 'AppButton',
  props: {
    search: {
      type: String,
      default: "Search",
    }
  }
};
</script>
<style lang="scss" scoped>

button,
.button {

  background-color: $electric-blue;
  color: $dark-gray;
  text-transform: uppercase;
  padding:.75rem .5rem;
  letter-spacing: .03rem;
  border: none;


  &:focus {
    color:white;
    background: $dark-gray;
  }

  &.icon {
    display: inline-block;
    position: relative;
    background: transparent;
    min-height:40px;
    padding: 0;


    .button-label{
      text-align: left;
    }

    .fa,
    .fas,
    .far,
    .fab,
    .fal {
      background: $dark-gray;
      color:white;
      font-size: 1.7em;
      border-right: 2px solid white;
      position: static;
      padding: 0.75rem;
      &::before{
        display: block;
        width: 2.85714rem;
      }
    }
    &:hover,
    &:active,
    &:focus{
      background: none;
      i.fa {
        color:white;
      }
    }
  }

  .button-label {
    background-color: $electric-blue;
    min-height: 40px;
    padding: 1rem;
    text-align: center;
    width:100%;
  }

  &.outline {
    .button-label {
      background-color: white;
      border: 1px solid $electric-blue;
    }
  }
}

button, a.button {
  color: $dark-gray;

  &:link{
    font-weight: 600;
    font-size: 1rem;
  }

  &:hover, &:active, &:focus{
    background: $dark-gray;
    color: white;
    .button-label {
      color: white;
      background: $dark-gray;
      transition: background-color 300ms ease-in-out;
    }
  }
  &.see-all-right {
    position: relative;
    text-transform: none;
    height: 28px;
    border:none;
    padding: 0;
    .button-label{
      padding:0 1rem;
    }
    &::after{
      content: "";
      position: absolute;
      right:-15px;
      top:0;
      width: 0;
      height: 0;
      border-top: 13px solid transparent;
      border-bottom: 15px solid transparent;

      border-left: 15px solid $electric-blue;
    }
    &:hover::after, &:focus::after{
      border-left: 15px solid $dark-gray;
      transition: border-color 300ms ease-in-out;

    }
  }
}

</style>
