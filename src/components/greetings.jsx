import "./greetings.css"

export function EstatePanel(){



    return(
        <section>

            <div className="greeting-container">
                    <p>Buenos Dias</p>
            </div>

            <div className="drawing-container">
                <div className="sol-container">
                    <span className="sol"></span>
                </div>

                <div className="mountains-container">
                    <span className="mountains mountains-1"></span>
                    <span className="sol"></span>
                </div>
                

                <div className="luna-container">
                    <span className="luna">
                        <span className="moon__crater"></span>
                    </span>
                </div>
                
            </div>

            <div className="date-now-container">
                <span className="day">29</span>
                <span className="month">03</span>
                <span className="year">2002</span>

            </div>
           


            

        </section>
    )
}