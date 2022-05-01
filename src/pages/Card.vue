<script setup lang="ts">
</script>

<template lang="pug">
div.wrapper
  div.blank
    header
      div.player
        div.player-name(title="Имя персонажа") Тристат
        div.player-info
          div.player-info_class(title="Класс") Волшебник
          div.player-info_race(title="Расса") Высший эльф
          div.player-info_background(title="Предыстория") Прислужник
          div.player-info_outlook(title="Мировозрение") Хаотично-доброе
          div.player-info_username(title="Имя игрока") Дмитрий
          div.player-info_experience(title="Опыт") 10
    main
      div.characteristics
        div.characteristics-main
          div.characteristics-main_item
            div.characteristics-main_title Сила
            div.characteristics-main_value +1
            div.characteristics-main_subvalue
              div.characteristics-main_subvalue_minus -
              div.characteristics-main_subvalue_data 10
              div.characteristics-main_subvalue_plus +
          div.characteristics-main_item
            div.characteristics-main_title Ловкость
            div.characteristics-main_value +2
            div.characteristics-main_subvalue
              div.characteristics-main_subvalue_minus -
              div.characteristics-main_subvalue_data 12
              div.characteristics-main_subvalue_plus +
          div.characteristics-main_item
            div.characteristics-main_title Телосоложение
            div.characteristics-main_value +3
            div.characteristics-main_subvalue
              div.characteristics-main_subvalue_minus -
              div.characteristics-main_subvalue_data 14
              div.characteristics-main_subvalue_plus +
          div.characteristics-main_item
            div.characteristics-main_title Интеллект
            div.characteristics-main_value +4
            div.characteristics-main_subvalue
              div.characteristics-main_subvalue_minus -
              div.characteristics-main_subvalue_data 16
              div.characteristics-main_subvalue_plus +
          div.characteristics-main_item
            div.characteristics-main_title Мудрость
            div.characteristics-main_value +5
            div.characteristics-main_subvalue
              div.characteristics-main_subvalue_minus -
              div.characteristics-main_subvalue_data 18
              div.characteristics-main_subvalue_plus +
          div.characteristics-main_item
            div.characteristics-main_title Харизма
            div.characteristics-main_value +6
            div.characteristics-main_subvalue
              div.characteristics-main_subvalue_minus -
              div.characteristics-main_subvalue_data 20
              div.characteristics-main_subvalue_plus +
        div.characteristics-bonus
          div.characteristics-bonus_value +2
          div.characteristics-bonus_title Бонус мастерства
        div.card #1
        div.card #2

      div.characteristics1
      div.characteristics2
</template>

<style>
  body, html {
    margin: 0;
    padding: 0;

    background-color: #f7f7f7;
    font-family: "Segoe UI",Arial,sans-serif;
  }

  .wrapper {
    width: 100%;
    max-width: 1200px;
    margin: 0 auto;
    /* padding: 40px; */
  }

  .blank {
    display: flex;
    flex-direction: column;
    gap: 10px;
    margin: 40px;
    /* padding: 10px; */
    /* background: #ffffff; */
    /* border-radius: 6px; */
  }

  header {
    padding: 10px;
    background: #ffffff;
    border-radius: 6px;
  }

  main {
    display: flex;
    flex-wrap: wrap;
    padding: 10px;
    background: #ffffff;
    border-radius: 6px;
  }

  .player {
    display: flex;
    flex-wrap: wrap;
    gap: 20px;
  }

  .player-name {
    flex: 1 0 calc(40% - 10px);
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #eeeeee;

    font-weight: bold;
    font-size: 1.3em;
    padding: 20px 0;
    border-radius: 6px;
  }

  .player-name::after {
    /* content: attr(title); */
    color: #bebebe;
    
    border-top: 1px solid #d3d3d3;
    text-transform: uppercase;
    font-size: 0.75em;
    font-weight: normal;
    color: #bebebe;
  }

  .player-info {
    flex: 1 1 calc(60% - 10px);
    display: grid;
    grid-gap: 20px;
    grid-template-columns: 1fr 1fr 1fr
  }

  .player-info > *::after {
    display: block;
    content: attr(title);

    border-top: 1px solid #d3d3d3;
    text-transform: uppercase;
    font-size: 0.75em;
    color: #bebebe;
  }

  .characteristics {
    display: flex;
    flex: 1 1 360px;
    flex-wrap: wrap;
    gap: 10px;
  }

  .characteristics1 {
    display: flex;
    flex: 1 1 360px;
    flex-wrap: wrap;
    gap: 10px;
  }

  .characteristics2 {
    display: flex;
    flex: 1 1 360px;
    flex-wrap: wrap;
    gap: 10px;
  }

  .characteristics-main {
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    gap: 10px;
  }

  .characteristics-main_item {
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;

    background-color: #eeeeee;
    width: 100px;
    height: 110px;
    border-radius: 6px;
  }

  .characteristics-main_title {
    flex: 0 0 auto;
    display: flex;
    justify-content: center;
    padding: 4px;

    text-transform: uppercase;
    font-size: 0.6em;
    color: #707070;
  }

  .characteristics-main_value {
    flex: 1 0 auto;
    display: flex;
    justify-content: center;
    align-items: center;

    text-transform: uppercase;
    font-size: 1.25em;
    font-weight: bold;
  }

  .characteristics-main_subvalue {
    flex: 0 0 auto;
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 10px;
    padding: 8px;
  }

  .characteristics-main_subvalue_minus,
  .characteristics-main_subvalue_plus {
    width: 20px;
    height: 20px;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 4px;
    cursor: pointer;
    user-select: none;
  }

  .characteristics-main_subvalue_minus {
    background-color: rgb(255, 67, 67);
    color: #ffffff;
  }
  
  .characteristics-main_subvalue_plus {
    background-color: rgb(73, 131, 255);
    color: #ffffff;
  }

  .characteristics-bonus {
    display: flex;
    align-self: flex-start;
    flex: 1 0 auto;

    background-color: #eeeeee;
    border-radius: 6px;
    font-size: 1.3em;
    overflow: hidden;
    height: 60px;
  }

  .characteristics-bonus_value {
    display: flex;
    justify-content: center;
    align-items: center;
    font-weight: bold;
    background-color: rgb(255, 67, 67);
    color: #fff;
    height: 60px;
    width: 60px;
  }

  .characteristics-bonus_title {
    display: flex;
    flex: 1 1 auto;

    justify-content: center;
    align-items: center;
    text-transform: uppercase;
    font-size: 0.75em;
    font-weight: normal;
  }

  .card {
    flex: 1 0 auto;
    display: flex;
    background-color: #eee;
    padding: 10px;
    border-radius: 6px;
  }
</style>
