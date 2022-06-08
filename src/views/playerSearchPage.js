import React from "react";

export default class PlayerSearch extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      platform: "",
      query: "",
      platformUserId: ""
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault();
    fetch(
      `https://public-api.tracker.gg/v2/apex/standard/search?platform=${this.state.platform}&query=${this.state.query}`,
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          "TRN-Api-Key": "18a5e116-7886-4f98-9910-76e6a933ef30",
          "Access-Control-Allow-Origin": "*",
        },
      }
    )
      .then((res) => res.json())
      .then((res) => {
        this.setState({
          platformUserId: res.data[0].platformUserId})
      })
      .catch((err) => {
        console.log("Error", err);
      });
  }

  handleChange(e) {
    this.setState({
      [e.target.name]: e.target.value.toLowerCase(),
    });
  }
  render() {
    return (
      <div className="player-search-form-wrapper">
        <form onSubmit={this.handleSubmit}>
          <h2 className="input-label">
            Player's Platform i.e. Origin, XBL, PSN
          </h2>
          <input
            type="text"
            name="platform"
            onChange={this.handleChange}
            className="base-input"
            placeholder="Platform"
            value={this.state.platform}
          />
          <h2 className="input-label">Player Name</h2>
          <input
            type="text"
            name="query"
            onChange={this.handleChange}
            className="base-input"
            placeholder="Player Name"
            value={this.state.query}
          />
          <button onClick={this.handleSubmit} className="btn">
            Search
          </button>
        </form>

        {this.state.platformUserId}
      </div>
    );
  }
}
