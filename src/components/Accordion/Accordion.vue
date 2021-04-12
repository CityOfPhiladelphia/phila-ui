<template>
  <div class="accordion-container">
    <div 
      class="accordion-question"
      :id="item.title"
      v-for="(item, index) in contents"
      v-bind:key="index"
    >
      <div class="accordion-description columns is-12">
        <span 
          class="accordion-number column is-8"
          v-on:click="toggle(index)" 
          >
          {{item.title}}
        </span>
          <!-- :class="noResultsCheck(item)" -->
        <span 
          v-on:click="toggle(index)" 
          :class="noResultsCheck(item)"
        >
          {{item.results}}
        </span>
        <span
          v-on:click="toggle(index)" 
          class="plus-icon"
        >
          +
        </span>
      </div>
      <div 
        class="accordion-content" 
        style="display: none;"
      >
        <slot :item="item"></slot>
      </div>
    </div>
  </div>
</template>
 
<script>
export default {
  name: 'Accordion',
  props: {
    data() {
    },
    contents: {
      type: Array,
      default() {
        return [
          {
            title: 'How are you?',
            msg: 'Test for fun!',
            results: '1 Result',
          },
          {
            title: 'Who let the dog out?',
            msg: 'I do not know, dude.',
            results: '1 Result',
          },
          {
            title: 'No Results Example',
            results: 'No Results',
          },
        ]
      }
    },
  },
  methods: {
    noResultsCheck(item){
      // console.log(item);
      if(item.results && item.results.substring(0,2) === 'No') {
        return "accordion-results column is-4 no-results has-text-weight-semibold"
      } else if(item.msg && item.msg.length > 0) {
        return "accordion-results column is-4 is-link has-text-weight-semibold"
      } 
      return "accordion-results column is-4 is-link has-text-weight-semibold"
    },
    toggle: function (num) {
      if (this.$el.children[num].classList.contains('open')) {
        this.$el.children[num].classList.remove('open')
        this.$el.children[num].querySelectorAll('.accordion-content')[0].style.display = 'none'
      } else {
        this.$el.children[num].classList.add('open')
        this.$el.children[num].querySelectorAll('.accordion-content')[0].style.display = ''
      }
    },
  },
}
</script>

<style lang="scss" scoped>

.accordion-container {
  margin: 30px auto;
}

.accordion-content {
  padding: 0 20px;
}

.accordion-description {
  position: relative;
  -webkit-transition: all 0.3s;
  -moz-transition: all 0.3s;
  transition: all 0.3s;
}

.accordion-description span:last-child {
  cursor: pointer;
  -webkit-transition: all 0.3s;
  -moz-transition: all 0.3s;
  transition: all 0.3s;
  position: absolute;
  right: 20px;
  top: 25%;
  color: $ben-franklin-blue;
  font-size: 1.8em;
  font-family: -webkit-pictograph;
}

.accordion-number {
  font-size: 1rem;
}
.accordion-question {
  padding: 0px;
  transition: all 0.3s;
  border-bottom: 1px solid $sidewalk-grey;
  margin-bottom: 20px;
  &.accordion-question.open .accordion-description span:last-child {
    -moz-transform: rotate(45deg);
    -ms-transform: rotate(45deg);
    -webkit-transform: rotate(45deg);
    transform: rotate(45deg);
    font-weight: normal;
  }
}

.accordion-results {
  font-size: 1rem !important;
}

.no-results {
  font-size: smaller;
  background-color: $ghost-grey;
  color: $grey-medium;
  width: auto;
  border-radius: 40px;
  // padding-right: 22px;
  // padding-left: 22px;
  padding: 5px 22px 5px 22px;
  height: fit-content;
  margin-top: 7px;
}
.no-results + span {
  display: none;
}

.open span.accordion-results.is-link{
  color: #444444 !important;
}

.plus-icon {
  font-size: 2rem !important;
}

span.accordion-results.is-link {
  font-size: .9em;
  &:hover {
    background-color: inherit;
    border-color: inherit;
    color: $ben-franklin-blue !important;
    cursor: pointer;
  }
}

@media (max-width: 767px) {
  .accordion-container {
    width: 100%;
    border-radius: 0;
    border: 1px solid transparent;
    padding: 0;
  }

  .content-title {
    font-size: 28px;
    text-align: center;
    font-weight: 600;
  }

  .accordion-description {
    font-size: 18px;

  }

  .accordion-question .accordion-description span:last-child {
    top: 8px;
  }

}
</style>