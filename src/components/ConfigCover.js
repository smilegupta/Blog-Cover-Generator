import React from "react";
import "./ConfigCover.css";
import CoverImage from "./CoverImage";
import ComponentToImg from "./ComponentToImg";
import ChevronDown from "./ChevronDown";
import RandomTheme from "./RandomTheme";

const defaultSettings = {
  title: "The Fastest Way To Replace All Occurrences Of A String In JavaScript",
  bgColor: "#232F3E",
  borderSize: "36",
  pattern: "",
  download: "PNG",
  textColor: "#ffffff",
};

class ConfigCover extends React.Component {
  state = defaultSettings;

  handleReset = () => {
    this.setState(defaultSettings);
  };

  getRandomTheme = (theme, Pattern) => {
    this.setState({
      bgColor: theme.bgColor,
      borderColor: theme.bdColor,
      pattern: Pattern,
    });
  };

  render() {
    return (
      <div className="main-container">
        <div className="inputData card">
          <input
            type="text"
            placeholder="Enter title here"
            className="inputTitle form-control"
            onChange={(e) => this.setState({ title: e.target.value })}
          ></input>

          <details>
            <summary>
              <svg
                width="1em"
                height="1em"
                viewBox="0 0 16 16"
                className="bi bi-droplet-half icon"
                fill="currentColor"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  d="M7.21.8C7.69.295 8 0 8 0c.109.363.234.708.371 1.038.812 1.946 2.073 3.35 3.197 4.6C12.878 7.096 14 8.345 14 10a6 6 0 0 1-12 0C2 6.668 5.58 2.517 7.21.8zm.413 1.021A31.25 31.25 0 0 0 5.794 3.99c-.726.95-1.436 2.008-1.96 3.07C3.304 8.133 3 9.138 3 10c0 0 2.5 1.5 5 .5s5-.5 5-.5c0-1.201-.796-2.157-2.181-3.7l-.03-.032C9.75 5.11 8.5 3.72 7.623 1.82z"
                />
                <path
                  fillRule="evenodd"
                  d="M4.553 7.776c.82-1.641 1.717-2.753 2.093-3.13l.708.708c-.29.29-1.128 1.311-1.907 2.87l-.894-.448z"
                />
              </svg>

              <label>Styles</label>
              <ChevronDown />
            </summary>
            <div>
              <label>Background</label>
              <input
                type="color"
                value={this.state.bgColor}
                onChange={(e) => this.setState({ bgColor: e.target.value })}
              />
              <label>Text</label>
              <input
                type="color"
                value={this.state.textColor}
                onChange={(e) => this.setState({ textColor: e.target.value })}
              />
            </div>

            <div>
              <label>Font Size</label>
              <input
                type="number"
                max="50"
                value={this.state.borderSize}
                onChange={(e) => this.setState({ borderSize: e.target.value })}
              />
            </div>
          </details>

          <details>
            <summary>
              <svg
                width="1em"
                height="1em"
                viewBox="0 0 16 16"
                className="bi bi-back icon"
                fill="currentColor"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  d="M0 2a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v2h2a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2v-2H2a2 2 0 0 1-2-2V2zm2-1a1 1 0 0 0-1 1v8a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1H2z"
                />
              </svg>
              <label>Background Pattern</label>
              <ChevronDown />
            </summary>

            <select
              onChange={(e) => this.setState({ pattern: e.target.value })}
              className="form-control"
              value={this.state.pattern}
            >
              <option>None</option>
              <option>pattern1</option>
              <option>pattern2</option>
              <option>pattern3</option>
              <option>pattern4</option>
              <option>pattern5</option>
              <option>pattern6</option>
              <option>pattern7</option>
              <option>pattern8</option>
              <option>pattern9</option>
              <option>pattern10</option>
              <option>pattern11</option>
              <option>pattern12</option>
              <option>pattern13</option>
              <option>pattern14</option>
              <option>pattern15</option>
              <option>pattern16</option>
              <option>pattern17</option>
              <option>pattern18</option>
              <option>pattern19</option>
              <option>pattern20</option>
            </select>
          </details>

          <div className="d-flex flex-row mt-2">
            <label>Download As</label>
            <select
              onChange={(e) => this.setState({ download: e.target.value })}
              className="form-control input-md ml-2"
              value={this.state.download}
            >
              <option>PNG</option>
              <option>JPEG</option>
            </select>
          </div>
          <button className="reset-btn" onClick={this.handleReset}>
            Reset
          </button>
        </div>

        <div className="d-flex flex-column">
          <RandomTheme onThemeChange={this.getRandomTheme} />
        </div>

        <div className="blog-cover">
          <ComponentToImg downloadAs={this.state.download}>
            <CoverImage {...this.state} />
          </ComponentToImg>
        </div>
      </div>
    );
  }
}

export default ConfigCover;
