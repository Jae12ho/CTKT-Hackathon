export default function End () {
    return (
        <>
            <div className="home">
                <div className="end">
                    <img src="/images/endLion.png" style={{height: "130px", marginBottom: "24px"}}/>
                    <p style={{fontSize: "22px", fontWeight: "bold",  marginBottom: "26px"}}>수고하셨습니다!</p>
                    <p style={{color: "#444444", marginBottom: "8px"}}>오늘은</p>
                    <div style={{display: "flex", alignItems: "flex-end", marginBottom: "20px"}}>
                        <p style={{fontSize: "24px", color: "#FF983F", fontWeight: "bold", marginRight: "4px"}}>06:17</p>
                        <p className="nomalFont">부터</p>
                        <p style={{fontSize: "24px", color: "#FF983F", fontWeight: "bold", marginRight: "4px" }}>08:01</p>
                        <p className="nomalFont">까지</p>
                    </div>
                    <div className="total-container">
                        <p className="nomalFont">총</p>
                        <p style={{fontSize: "24px", color: "#FF983F", fontWeight: "bold", marginRight: "4px"}}>1시간 44분</p>
                        <p>동안</p>
                    </div>
                    <p style={{marginBottom: "20px"}}>운동하셨습니다.</p>
                    <p style={{fontWeight: "bold", fontSize: "18px", marginBottom: "20px"}}>오늘은 어떤 부위를 운동하셨나요?</p>
                    <div className="check" style={{width: "300px"}}>
                        <div style={{background: "#D6E5EE"}} className="checkBtn">가슴</div>
                        <div className="checkBtn NoneCheck">등</div>
                        <div className="checkBtn NoneCheck">하체</div>
                    </div>
                    <div className="check" style={{width: "200px"}}>
                        <div style={{background: "#E2DEFA"}} className="checkBtn">어깨</div>
                        <div className="checkBtn NoneCheck">팔</div>
                    </div>
                </div>      
            </div>
        </>
    )
}