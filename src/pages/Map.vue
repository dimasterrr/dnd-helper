<script setup lang="ts">
export interface IToolsItem {
    icon: string;
    title: string;
    state?: boolean;
    action: ()=>Promise<void>
}

export interface IToolsGroup {
    title?: string;
    actions: Array<IToolsItem>
}

export interface IMapSize {
    x: number;
    y: number;
}

const toolsGroups: Array<IToolsGroup> = [
    {
        actions: [
            { icon: 'src/assets/create.png', title: 'Создать игру', action: async ()=>{ console.log('Создать игру') } },
            { icon: 'src/assets/load.png', title: 'Загрузить игру', action: async ()=>{ console.log('Загрузить игру') } },
            { icon: 'src/assets/save.png', title: 'Сохранить игру', action: async ()=>{ console.log('Сохранить игру') } }
        ]
    },
    {
        title: 'Dungeon Master',
        actions: [
            { icon: 'src/assets/draw.png', title: 'Рисование', action: async ()=>{ console.log('Рисование') } },
            { icon: 'src/assets/eraser.png', title: 'Стирание', action: async ()=>{ console.log('Стирание') } }
        ]
    },
    {
        title: 'Player',
        actions: [
            { icon: 'src/assets/move.png', title: 'Перемещение', action: async ()=>{ console.log('Перемещение') } }
        ]
    },
];
let activeAction!: IToolsItem;

const mapSize: IMapSize = { x: 10, y: 10 };

</script>

<template lang="pug">
div.map-wrapper
    div.map(:style="{gridTemplateColumns: `repeat(${mapSize.x}, 100px)`, gridTemplateRows: `repeat(${mapSize.y}, 100px)`}")
        button.map-cell(v-for="i in (mapSize.x * mapSize.y)" @click="activeAction.action")
    div.tools
        div.tools-group(v-for="toolsGroup in toolsGroups")
            div.tools-group-title(v-if="toolsGroup.title") {{ toolsGroup.title }}
            div.tools-group-items
                button.tools-group-item(v-for="action in toolsGroup.actions" 
                    type="button" 
                    :title="action.title"
                    :class="{active: activeAction == action}"
                    @click="activeAction = action")
                    img(:src="action.icon")
</template>

<style lang="less">
  body, html {
    margin: 0;
    padding: 0;

    background-color: #f7f7f7;
    font-family: "Segoe UI",Arial,sans-serif;
  }

  .tools {
      display: flex;
      flex-direction: column;
      position: fixed;
      right: 20px; top: 20px;

      background-color: #ffffff;
      box-shadow: 0 0 20px 0 #4b4b4b50;
      border-radius: 6px;

      &-group {
          padding: 10px;
          border-bottom: 1px solid #dddddd;

          &-title {
              margin-bottom: 10px;
              font-size: 0.7em;
              text-align: center;
              text-transform: uppercase;

              color: #a3a3a3;
          }

          &-items {
            display: grid;
            grid-template-columns: 1fr 1fr;
            gap: 10px;
          }

          &-item {
            display: block;
            aspect-ratio: 1;

            background-color: #f1f1f1;
            border: none;
            border-radius: 6px;

            &.active {
                background-color: #58a6ff;
            }
          }

          &:last-child {
              border: none;
          }
      }
  }

  .map {
      display: grid;
      gap: 2px;
      width: 100vw; height: 100vh;
    //   align-content: center;
    //   justify-content: center;
      overflow: hidden;

      &-cell {
        background-color: #ffffff;
        border-radius: 6px;
        border: none;
      }
  }
</style>
