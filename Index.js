function App() {
    
    const [expression, setExpression] = React.useState("");
    const [answer, setAnswer] = React.useState(0);
    //In order to get this answer to stop displaying (answer) I had to capitalize the R in React
    const display = (symbol) => {
        setExpression (prev => prev + symbol);
        if(expression[expression.length-1] == "="){
            if(/[0-9.]/.test(symbol)){
                setExpression(symbol)
            }else{
                setExpression(answer + symbol);

            }
        }
       
        
    }; 

    const calculate = () => {
            setAnswer(eval(expression));
            setExpression((prev) => prev +"=");
        };
        
    const allClear = () => {
        setExpression("");
        setAnswer(0);
    };
    const clear = () => {
        setExpression(prev => prev.split("").slice(0, prev.length - 1).join(""));
        setAnswer(0);

    };

    return (
        <div class="container">
            <div class="grid">
                <div class="dis">
                    <input type="text" value={expression} placeholder="0" disabled />
                    <div class="total">{answer}</div>
                </div>
                <div onClick={allClear} class="padButton allClear tomato">AC</div>
                <div onClick={clear} class="padButton clear tomato">C</div>
                <div onClick={() => display("/")} class="padButton divide">/</div>
                <div onClick={() => display("*")} class="padButton multiply">x</div>
                <div onClick={() => display("7")} class="padButton seven dark-gray">7</div>
                <div onClick={() => display("8")} class="padButton eight dark-gray">8</div>
                <div onClick={() => display("9")} class="padButton nine dark-gray">9</div>
                <div onClick={() => display("-")} class="padButton subtract">-</div>
                <div onClick={() => display("4")} class="padButton four dark-gray">4</div>
                <div onClick={() => display("5")} class="padButton five dark-gray">5</div>
                <div onClick={() => display("6")} class="padButton six dark-gray">6</div>
                <div onClick={() => display("+")} class="padButton add">+</div>
                <div onClick={() => display("1")} class="padButton one dark-gray">1</div>
                <div onClick={() => display("2")} class="padButton two dark-gray">2</div>
                <div onClick={() => display("3")} class="padButton three dark-gray">3</div>
                <div onClick={calculate} class="padButton equals blue">=</div>
                <div onClick={() => display("0")} class="padButton zero dark-gray">0</div>
                <div onClick={() => display(".")} class="padButton decimal dark-gray">.</div>
                             
                </div>
            </div>
        )
            
    }
            
ReactDOM.render(<App/>, document.getElementById("root"));

//Youtube - https://www.youtube.com/watch?v=3SqLY-4Bqv8