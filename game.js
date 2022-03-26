
class Player{
    constructor(name, playerId){
        this.name = name
        this.playerId = playerId
    }

    randomScore(){
        let score = Math.floor(Math.random() * 100)

        let scoreElement = document.getElementById(this.elementId)
        scoreElement.textContent = score

        this.score = score
    }
}