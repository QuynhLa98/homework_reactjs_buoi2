import React, { Component } from "react";
import dataGlass from "../../data/dataGlasses.json";
import "./style.css";
export default class Body extends Component {
  state = {
    imgUrl: "./glassesImage/v1.png",
  };
  changeGlass = (number) => {
    this.setState({
      imgUrl: `/glassesImage/v${number}.png`,
    });
  };

  renderGlassList = () => {
    return dataGlass.map((element, idx) => {
      return (
        <div key={idx} className="col-5">
          <div className="card">
            <img className="card-img-top" src={element.url} alt="Title" />
            <div className="card-body">
              <h4 className="card-title">{element.name}</h4>
              <p className="card-text">{element.desc}</p>
            </div>
          </div>
        </div>
      );
    });
  };

  render() {
    return (
      <div className="row">
        <div className="col-5">
          <img className="img-fluid" src="./glassesImage/model.jpg" alt="1" />
        </div>

        <div className="col-5">
          <img className="glass1" src={this.state.imgUrl} alt="v1" />
          <img className="img-fluid" src="./glassesImage/model.jpg" alt="1" />
        </div>
        <div className="container text-center">
          <div className="row row-cols-2 row-cols-lg-5 g-2 g-lg-3">
            <div onClick={() => this.changeGlass(1)} className="col">
              <div className="p-3">
                <img
                  className="img-fluid"
                  src="./glassesImage/v1.png"
                  alt="v1"
                />
              </div>
            </div>
            <div onClick={() => this.changeGlass(2)} className="col">
              <div className="p-3">
                <img
                  className="img-fluid"
                  src="./glassesImage/v2.png"
                  alt="v2"
                />
              </div>
            </div>
            <div onClick={() => this.changeGlass(3)} className="col">
              <div className="p-3">
                <img
                  className="img-fluid"
                  src="./glassesImage/v3.png"
                  alt="v3"
                />
              </div>
            </div>
            <div onClick={() => this.changeGlass(4)} className="col">
              <div className="p-3">
                <img
                  className="img-fluid"
                  src="./glassesImage/v4.png"
                  alt="v4"
                />
              </div>
            </div>
            <div onClick={() => this.changeGlass(5)} className="col">
              <div className="p-3">
                <img
                  className="img-fluid"
                  src="./glassesImage/v5.png"
                  alt="v5"
                />
              </div>
            </div>
            <div onClick={() => this.changeGlass(6)} className="col">
              <div className="p-3">
                <img
                  className="img-fluid"
                  src="./glassesImage/v6.png"
                  alt="v6"
                />
              </div>
            </div>
            <div onClick={() => this.changeGlass(7)} className="col">
              <div className="p-3">
                <img
                  className="img-fluid"
                  src="./glassesImage/v7.png"
                  alt="v7"
                />
              </div>
            </div>
            <div onClick={() => this.changeGlass(8)} className="col">
              <div className="p-3">
                <img
                  className="img-fluid"
                  src="./glassesImage/v8.png"
                  alt="v8"
                />
              </div>
            </div>
            <div onClick={() => this.changeGlass(9)} className="col">
              <div className="p-3">
                <img
                  className="img-fluid"
                  src="./glassesImage/v9.png"
                  alt="v9"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
