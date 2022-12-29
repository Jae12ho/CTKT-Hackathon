import react, { useEffect } from 'react';


export default function Animal() {
    

    // useEffect(() => {
        
    //     var boxWidth = document.getElementById('grass').clientWidth
    //     var boxHeight = document.getElementById('grass').clientHeight

    //     var locationX1 = 75
    //     var locationY = 30

    //     var locationX2 = 150
    //     var locationY = 30
        
    //     var locationX3 = 225
    //     var locationY = 30

    //     const moveAnimal = () => {

    //         var time = 0

    //         const randomNum = (min, max) => {
    //             var randNum = Math.floor(Math.random()*(max-min+1)) + min;
    //             return randNum;
    //         }
    //         const randomNumX = (min, max) => {
    //             var randNumX = Math.floor(Math.random()*(max-min+1)) + min;
    //             return randNumX;
    //         }
    //         const randomNumY = (min, max) => {
    //             var randNumY = Math.floor(Math.random()*(max-min+1)) + min;
    //             return randNumY;
    //         }

    //         // var Condition = randomNum(1, 6);
    //         // var Condition2 = randomNum(1, 6);
    //         // var Condition3 = randomNum(1, 6);
    //         // var ConditionY = randomNumY(1, 5);

    //         // 1이면 더하기 2면 빼기
                
    //         // console.log(Condition)


    //         var animal1 = document.getElementById('animal1')
    //         var animal2 = document.getElementById('animal2')
    //         var animal3 = document.getElementById('animal3')
    //         const move = setInterval(function() {

    //             // console.log(Condition)

    //             // if (Condition == 1) {
    //             //     locationY += 5
    //             //     locationX += 5
    //             //     console.log("→")
    //             // }
    //             // else if (Condition == 2) {
    //             //     locationY += 0
    //             //     locationX += 3
    //             //     // console.log("→")
    //             // }
    //             // else if (Condition == 3) {
    //             //     locationY += 3
    //             //     locationX += 0
    //             //     // console.log("→")
    //             // }
    //             // else if (Condition == 4) {
    //             //     locationY -= 3
    //             //     locationX -= 3
    //             // }
    //             // else if (Condition == 5) {
    //             //     locationY -= 3
    //             //     locationX += 0
    //             //     console.log("←")
    //             // }
    //             // else if (Condition == 6) {
    //             //     locationY -= 0
    //             //     locationX += 3
    //             // }
    //             // else if (Condition == 7) {
    //             //     locationY -= 0
    //             //     locationX += 3
    //             // }

    //             // if (Condition2 == 1) {
    //             //     locationY += 5
    //             //     locationX += 5
    //             //     console.log("→")
    //             // }
    //             // else if (Condition2 == 2) {
    //             //     locationY += 0
    //             //     locationX += 3
    //             //     // console.log("→")
    //             // }
    //             // else if (Condition2 == 3) {
    //             //     locationY += 3
    //             //     locationX += 0
    //             //     // console.log("→")
    //             // }
    //             // else if (Condition2 == 4) {
    //             //     locationY -= 3
    //             //     locationX -= 3
    //             // }
    //             // else if (Condition2 == 5) {
    //             //     locationY -= 3
    //             //     locationX += 0
    //             //     console.log("←")
    //             // }
    //             // else if (Condition2 == 6) {
    //             //     locationY -= 0
    //             //     locationX += 3
    //             // }
    //             // else if (Condition2 == 7) {
    //             //     locationY -= 0
    //             //     locationX += 3
    //             // }

    //             // if (Condition3 == 1) {
    //             //     locationY += 5
    //             //     locationX += 5
    //             //     console.log("→")
    //             // }
    //             // else if (Condition3 == 2) {
    //             //     locationY += 0
    //             //     locationX += 3
    //             //     // console.log("→")
    //             // }
    //             // else if (Condition3 == 3) {
    //             //     locationY += 3
    //             //     locationX += 0
    //             //     // console.log("→")
    //             // }
    //             // else if (Condition3 == 4) {
    //             //     locationY -= 3
    //             //     locationX -= 3
    //             // }
    //             // else if (Condition3 == 5) {
    //             //     locationY -= 3
    //             //     locationX += 0
    //             //     console.log("←")
    //             // }
    //             // else if (Condition3 == 6) {
    //             //     locationY -= 0
    //             //     locationX += 3
    //             // }
    //             // else if (Condition3 == 7) {
    //             //     locationY -= 0
    //             //     locationX += 3
    //             // }

    //             // locationX += 5
    //             // locationY += 5

    //             animal1.style.left = locationX1 + "px"
    //             animal1.style.top = locationY + "px"

    //             animal2.style.left = locationX2 + "px"
    //             animal2.style.top = locationY + "px"

    //             animal3.style.left = locationX3 + "px"
    //             animal3.style.top = locationY + "px"
    //             time++
    //             // console.log(time)

    //             if (time >= 4
    //                 // || locationX+27 >= boxWidth
    //                 // || locationX-15 <= 0
    //                 // || locationY+27 >= boxHeight
    //                 // || locationY-15 <= 0
    //                 )
    //                 {
    //                 clearInterval(move)
    //             }
    //             }, 300);
    //         }
    //     const realMove = setInterval(function(){
    //         moveAnimal();
    //     }, 3000)
    // },)

    return (
        <>
            <div className="animal-container">
                <div className="animal-content-container">
                    <img src="/images/fence2.png" className="fence" />
                    <div id="grass" className="object-container">
                        <img src="/images/lion.png" 
                        id="animal1" />
                        <img src="/images/lion2.png" 
                        id="animal2" />
                        <img src="/images/lion3.png" 
                        id="animal3" />
                    </div>
                </div>
                <div class="animal-content-container-shadow"></div>
            </div>
        </>
    )
}