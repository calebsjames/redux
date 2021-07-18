import React from "react";

let balance = 0

const addTen = () => {
    balance
}
const reduceTen = () => {

}

const Home = () => {
    return (
    <>
    <h1>Hello</h1>
    <article id="form">
        <form className="promoterForm">
            <h2 className="formTitle">Balance</h2>
                <div className="flex">
                    <fieldset className="form">
                        <div className="form-group">
                            <button onClick={addTen}>+10</button>
                            <button onClick={reduceTen}>-10</button>
                        </div>
                    </fieldset>
                </div>
        </form>
    </article>
    </>
    )
}

export default Home;
