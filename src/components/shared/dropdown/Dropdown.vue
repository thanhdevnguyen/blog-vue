<!--<template>-->
<!--  <div class="shortby-filter">-->
<!--    <div class="dropdown-select">-->
<!--      <p-->
<!--        class="shortby-select-click"-->
<!--        v-bind:class="{ 'icon-drop-up': !isOpenDown }"-->
<!--        @click.prevent="isShow = !isShow"-->
<!--        v-click-outside="closeDropdown"-->
<!--      >-->
<!--        <span-->
<!--          v-if="iconActive"-->
<!--          class="font-13 color-graybold-light font-ci-medium mr-1"-->
<!--          v-bind:class="[classActive ? classActive: '' ]"-->
<!--          :style="{ backgroundImage: 'url(' + require(`@/assets/images/${iconActive}`) + ')'}"-->
<!--        >-->
<!--          {{ value }}-->
<!--        </span>-->
<!--        <span-->
<!--          v-else-->
<!--          class="font-13 color-graybold-light font-ci-medium mr-1"-->
<!--          v-bind:class="[classActive ? classActive: '' ]"-->
<!--        >-->
<!--          {{ value }}-->
<!--        </span>-->
<!--        <i class="icon-dropdown" v-bind:class="{ 'iconico-arrow-down': isOpenDown }"></i>-->
<!--      </p>-->
<!--      <ul-->
<!--        class="shortby-option-click custom-content-dropdown"-->
<!--        :class="[(!isOpenDown ? 'custom-drop-up' : ''), isShow ? 'show-dropdown-select' : '']"-->
<!--      >-->
<!--        <li-->
<!--          class="border-color-gray-light-white"-->
<!--          v-for="(option, index) in options"-->
<!--          :key="index"-->
<!--          v-bind:class="{ active: option === value }"-->
<!--          @click.prevent="changeOption(option)"-->
<!--        >-->
<!--          <span-->
<!--            v-if="icons"-->
<!--            class="font-13 color-gray-light"-->
<!--            v-bind:class="[classes ? classes[index]: '' ]"-->
<!--            :style="{ backgroundImage: 'url(' + require(`@/assets/images/${icons[index]}`) + ')'}"-->
<!--          >{{ typeof option !== 'object' ? option : option.label }}</span>-->
<!--          <span-->
<!--            v-else-->
<!--            v-bind:class="[classes ? classes[index]: '' ]"-->
<!--            class="font-13 color-gray-light"-->
<!--          >{{ typeof option !== 'object' ? option : option.label }}</span>-->
<!--        </li>-->
<!--      </ul>-->
<!--    </div>-->
<!--  </div>-->
<!--</template>-->

<!--<script lang="ts">-->
<!--import {-->
<!--  Vue, Prop, Component, Emit,-->
<!--} from 'vue-property-decorator';-->

<!--@Component-->
<!--export default class Dropdown extends Vue {-->
<!--  @Prop({ required: true, type: Array }) options!: [];-->

<!--  @Prop({ type: Boolean, default: true }) isOpenDown!: boolean;-->

<!--  @Prop({ required: true }) value!: number | string;-->

<!--  @Prop({ type: String }) iconActive!: string;-->

<!--  @Prop({ type: String }) classActive!: string;-->

<!--  @Prop({ type: Array }) icons!: [];-->

<!--  @Prop({ type: Array }) classes!: [];-->

<!--  isShow = false;-->

<!--  private closeDropdown() {-->
<!--    this.isShow = false;-->
<!--  }-->

<!--  @Emit('input')-->
<!--  private changeOption(option: []) {-->
<!--    this.isShow = false;-->
<!--    return option;-->
<!--  }-->
<!--}-->

<!--</script>-->

<!--<style scoped lang="scss">-->
<!--  .custom-content-dropdown:focus {-->
<!--    outline: 0;-->
<!--  }-->

<!--  .icon-dropdown {-->
<!--    padding-left: 20px;-->
<!--  }-->

<!--  .icon-drop-up::after {-->
<!--    content: "";-->
<!--    font-family: "icomoon",serif;-->
<!--    font-style: normal;-->
<!--    font-weight: normal;-->
<!--    text-decoration: inherit;-->
<!--    color: #5e6d87;-->
<!--    font-size: 6px;-->
<!--    transition: all 0.2s;-->
<!--    position: absolute;-->
<!--    padding-left: 30px;-->
<!--  }-->

<!--  .dropdown-select-default .shortby-action-top-filter .dropdown-select .custom-drop-up {-->
<!--    top: unset;-->
<!--    bottom: 100%;-->
<!--    display: flex;-->
<!--    flex-direction: column-reverse;-->
<!--    li {-->
<!--      &:last-child {-->
<!--        list-style: none;-->
<!--        padding: 10px 20px;-->
<!--        display: flex;-->
<!--        font-weight: normal;-->
<!--        width: 100%;-->
<!--        flex-wrap: wrap;-->
<!--        color: #5e6d87;-->
<!--        border-bottom-width: 2px;-->
<!--        border-style: dotted;-->
<!--        cursor: pointer;-->
<!--        border-color: #dde1e7;-->
<!--      }-->
<!--      &:first-child {-->
<!--        border-style: none;-->
<!--      }-->
<!--    }-->
<!--  }-->
<!--</style>-->
