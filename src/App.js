import React from "react";

const num = [1,2,3,4,5,6,7,8,9,10,11,12,13,14]

export default class App extends React.Component {
  constructor(props){
    super(props);
    this.state={
      isActive: null
    }
  }
  activeClass(a,e) {
    const tempstate = this.state;
    tempstate.isActive = a;
    this.setState({state: tempstate});
    console.log(a);
  }

  render(){
    return(
      <>
      <section>
        <div className="container">
          <div className="boxs">
            {num.map((data,i) => {
              return(
                <div className={`box ${this.state.isActive === data ? 'active': i[0]}`} key={i} onClick={this.activeClass.bind(this,data)}>{data}</div>
              )
            })}
            {/* <div className={`box ${this.state.isActive === 'a' ? 'active' : ''}`} onClick={this.activeClass.bind(this,"a")}></div>
            <div className={`box ${this.state.isActive === 'b' ? 'active' : ''}`} onClick={this.activeClass.bind(this,"b")}></div>
            <div className={`box ${this.state.isActive === 'c' ? 'active' : ''}`} onClick={this.activeClass.bind(this,"c")}></div>
            <div className={`box ${this.state.isActive === 'd' ? 'active' : ''}`} onClick={this.activeClass.bind(this,"d")}></div>
            <div className={`box ${this.state.isActive === 'e' ? 'active' : ''}`} onClick={this.activeClass.bind(this,"e")}></div>
            <div className={`box ${this.state.isActive === 'f' ? 'active' : ''}`} onClick={this.activeClass.bind(this,"f")}></div>
            <div className={`box ${this.state.isActive === 'g' ? 'active' : ''}`} onClick={this.activeClass.bind(this,"g")}></div>
            <div className={`box ${this.state.isActive === 'h' ? 'active' : ''}`} onClick={this.activeClass.bind(this,"h")}></div>
            <div className={`box ${this.state.isActive === 'i' ? 'active' : ''}`} onClick={this.activeClass.bind(this,"i")}></div>
            <div className={`box ${this.state.isActive === 'j' ? 'active' : ''}`} onClick={this.activeClass.bind(this,"j")}></div>
            <div className={`box ${this.state.isActive === 'k' ? 'active' : ''}`} onClick={this.activeClass.bind(this,"k")}></div>
            <div className={`box ${this.state.isActive === 'l' ? 'active' : ''}`} onClick={this.activeClass.bind(this,"l")}></div>
            <div className={`box ${this.state.isActive === 'm' ? 'active' : ''}`} onClick={this.activeClass.bind(this,"m")}></div>
            <div className={`box ${this.state.isActive === 'n' ? 'active' : ''}`} onClick={this.activeClass.bind(this,"n")}></div> */}
          </div>
        </div>
      </section>
      <style jsx global>{`
        *{
          margin:0;
          padding:0;
          box-sizing: border-box;
        }
        section {
          background: #eee;
          height: 100vh;
          width: 100%;
        }
        .container {
          max-width: 1224px;
          width: 100%;
          height: 100%;
          padding: 20px;
          display: flex;
          align-items: center;
          margin: 0 auto;
          justify-content: center;
        }
        .boxs {
          display: grid;
          display: -ms-grid;
          grid-gap: 20px;
          grid-template-columns: repeat(7,1fr);
          -ms-grid-columns: repeat(7,1fr);
        }
        .box {
          width: 100px;
          height: 100px;
          background: blue;
          margin: 0 auto;
          cursor:pointer;
        }
        .active {
          background: red;
        }
        .box:hover {
          box-shadow: 1px 1px 10px rgb(000,000,000,0.6);
        }
        @media only screen and (max-width: 1223px) {
          section {
            height: 100%;
          }
          .boxs {
            grid-template-columns: repeat(2,1fr);
            -ms-grid-columns: repeat(2,1fr);
          }
        }
      `}</style>
      </>
    )
  }
}