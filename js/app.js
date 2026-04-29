// ====================================
// VUE.JS EM RELAÇÃO AO JAVASCRIPT
// ====================================

/*
Vue.js é um FRAMEWORK JavaScript.

Isso significa que:
- Ele é construído SOBRE o JavaScript
- Usa JavaScript como base
- Facilita a criação de interfaces dinâmicas (Front-end)

Enquanto o JavaScript puro:
- Manipula o DOM diretamente
- Exige mais código para comportamento complexo

O Vue:
- Abstrai a manipulação do DOM
- Trabalha com ligação de dados (data binding)
- Organiza o código em uma estrutura mais clara
- Torna o desenvolvimento mais produtivo e legível
*/

const LIST = [
    {
        id: 1,
        nome: 'Mestre Yoda',
        avatar: 'images/yoda.png'
    },

    {
        id: 2,
        nome: 'Luke Skywalker',
        avatar: 'images/luke.png'
    },

    {
        id: 3,
        nome: 'Princesa Leia',
        avatar: 'images/leia.png'
    },

    {
        id: 4,
        nome: 'Hansolo',
        avatar: 'images/Hansolo.png'
    },

    {
        id: 5,
        nome: 'Chewbacca',
        avatar: 'images/chewbacca.png'
    },

    {
        id: 6,
        nome: 'R2D2',
        avatar: 'images/R2D2.png'
    },

    {
        id: 7,
        nome: 'Vader',
        avatar: 'images/vader.png'
    },

    {
        id: 8,
        nome: 'c3po',
        avatar: 'images/c3po.png'
    }
]

const App = new Vue({
    el: '#app',
    data: {
        title: 'Star Wars Logo',
        name: 'Cleibson Silva',
        characters: LIST,
        searchName: ''
    },
    methods: {
        like(userName) {
            alert(`O personagem ${userName} recebeu um like!`)
        },
        search() {
            const list = this.characters

            const result = list.filter(item => {
                return item.nome === this.searchName
            })

            if (result.length <= 0) {
                alert('Nenhum registro encontrado.')
            } else {
                this.characters = result
            }
        }
    }
})