import { useEffect } from 'react';

export default function Main () {

    useEffect(() => {
        
        var boxWidth = document.getElementById('grass').clientWidth
        var boxHeight = document.getElementById('grass').clientHeight

        var locationX = 100
        var locationY = 30
        
        const moveAnimal = () => {

            var time = 0

            const randomNum = (min, max) => {
                var randNum = Math.floor(Math.random()*(max-min+1)) + min;
                return randNum;
            }
            const randomNumX = (min, max) => {
                var randNumX = Math.floor(Math.random()*(max-min+1)) + min;
                return randNumX;
            }
            const randomNumY = (min, max) => {
                var randNumY = Math.floor(Math.random()*(max-min+1)) + min;
                return randNumY;
            }

            var Condition = randomNum(1, 6);
            var Condition2 = randomNum(1, 6);
            var Condition3 = randomNum(1, 6);
            // var ConditionY = randomNumY(1, 5);

            // 1이면 더하기 2면 빼기
                
            console.log(Condition)


            var animal1 = document.getElementById('animal1')
            var animal2 = document.getElementById('animal2')
            var animal3 = document.getElementById('animal3')
            const move = setInterval(function() {

                // console.log(Condition)

                if (Condition == 1) {
                    locationY += 5
                    locationX += 5
                    console.log("→")
                }
                else if (Condition == 2) {
                    locationY += 0
                    locationX += 3
                    // console.log("→")
                }
                else if (Condition == 3) {
                    locationY += 3
                    locationX += 0
                    // console.log("→")
                }
                else if (Condition == 4) {
                    locationY -= 3
                    locationX -= 3
                }
                else if (Condition == 5) {
                    locationY -= 3
                    locationX += 0
                    console.log("←")
                }
                else if (Condition == 6) {
                    locationY -= 0
                    locationX += 3
                }
                else if (Condition == 7) {
                    locationY -= 0
                    locationX += 3
                }

                if (Condition2 == 1) {
                    locationY += 5
                    locationX += 5
                    console.log("→")
                }
                else if (Condition2 == 2) {
                    locationY += 0
                    locationX += 3
                    // console.log("→")
                }
                else if (Condition2 == 3) {
                    locationY += 3
                    locationX += 0
                    // console.log("→")
                }
                else if (Condition2 == 4) {
                    locationY -= 3
                    locationX -= 3
                }
                else if (Condition2 == 5) {
                    locationY -= 3
                    locationX += 0
                    console.log("←")
                }
                else if (Condition2 == 6) {
                    locationY -= 0
                    locationX += 3
                }
                else if (Condition2 == 7) {
                    locationY -= 0
                    locationX += 3
                }

                if (Condition3 == 1) {
                    locationY += 5
                    locationX += 5
                    console.log("→")
                }
                else if (Condition3 == 2) {
                    locationY += 0
                    locationX += 3
                    // console.log("→")
                }
                else if (Condition3 == 3) {
                    locationY += 3
                    locationX += 0
                    // console.log("→")
                }
                else if (Condition3 == 4) {
                    locationY -= 3
                    locationX -= 3
                }
                else if (Condition3 == 5) {
                    locationY -= 3
                    locationX += 0
                    console.log("←")
                }
                else if (Condition3 == 6) {
                    locationY -= 0
                    locationX += 3
                }
                else if (Condition3 == 7) {
                    locationY -= 0
                    locationX += 3
                }

                // locationX += 5
                // locationY += 5

                animal1.style.left = locationX + "px"
                animal1.style.top = locationY + "px"

                animal2.style.left = locationX + "px"
                animal2.style.top = locationY + "px"

                animal3.style.left = locationX + "px"
                animal3.style.top = locationY + "px"
                time++
                // console.log(time)

                if (time >= 20 
                    || locationX+27 >= boxWidth
                    || locationX-15 <= 0
                    || locationY+27 >= boxHeight
                    || locationY-15 <= 0) {
                    clearInterval(move)
                }
                }, 300);
            }
        const realMove = setInterval(function(){
            moveAnimal();
        }, 3000)
    },)

    return (
        <div className='flex flex-col justify-center items-center'>
            <div className="home">
                    <div className="animal-container">
                        <div className="main-content-container">
                            <img src="/images/fence2.png" className="fence" />
                            <div id="grass" className="object-container">
                                <img src="/images/lion.png" 
                                id="animal1" />
                                <img src="/images/lion2.png" 
                                id="animal2" />
                                <img src="/images/lion3.png" 
                                id="animal3" />
                            </div>
                            <img src="/images/fence2.png" className="fence" />
                        </div>
                        <div class="animal-content-container-shadow"></div>
                    </div>
                    <div className="animal-container">
                        <div className="mainInfo-content-container">
                            <div className="info-container">
                                <div className="profile-container">
                                    <img src='/images/lionProfile.png' className="profile"/>
                                </div>
                                <div className="infoTop-container">
                                    <div className="name-level-container">
                                        <p className='name'>김멋사</p>
                                        <div className='level-container'>
                                            <div className='level-content'>
                                                <p className='level'>H - Lv.</p>
                                                <p className='level'>100</p>
                                            </div>
                                            <div className='gauge'></div>
                                            <div className='gaugeFill'></div>
                                        </div>
                                    </div>
                                    <p className='intro'>나는 세계 최고의 헬창이 될꺼야!</p>
                                </div>    
                            </div>
                            <div className='profileButton-container'>
                                    <div className='profileButton' style={{background: "#FF983F"}}>
                                        <img src='/images/QR.png' className="profileIcon"/>
                                        <p>QR</p>
                                    </div>
                                    <div className='profileButton' style={{background: "#FFC16C"}}>
                                        <img src='/images/invite.png' className="profileIcon"/>
                                        <p>초대</p>
                                    </div>
                                </div>
                        </div>
                        <div class="main-content-container-shadow"></div>
                    </div>
            </div>
        </div>
    )
}