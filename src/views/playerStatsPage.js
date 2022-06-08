import React from "react";

export default class PlayerStats extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      platform: "",
      platformUserId: "",
      playerLevel: "",
      playerKills: "",
      playerRankScore: "",
      activeLegendName: "",
      activeLegendImageUrl: "",
      activeLegendKills: "",
      activeLegendDamage: "",
      rankIconUrl: "",

      dataArray: [],
      lifetimeSegment: [],
      activeLegendSegment: [],
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }


  renderPlayerStats() {
    if (this.state.dataArray.length === 0) {
      return;
    } else {
      return (
        <>
          <div className="player-stats-wrapper">
            <div className="active-legend-wrapper">
              <div className="left-column">
                <div className="active-legend-image">
                  <img
                    src={this.state.activeLegendSegment.metadata.imageUrl}
                    alt="Legend image"
                  />
                </div>
              </div>

              <div className="right-column">
                <div className="platform-user-id-header">
                  User ID: {this.state.platformUserId}
                </div>
                <div className="player-level">
                  Level: {this.state.lifetimeSegment.stats.level.displayValue}
                </div>
                <div className="active-legend-name">
                  Active Legend: {this.state.dataArray.metadata.activeLegendName}
                </div>
                <div className="active-legend-stat">
                  Kills: {this.state.activeLegendSegment.stats.kills.displayValue || "Unavailable"}
                </div>
              </div>
            </div>
          </div>
          <div className="overall-stats-wrapper">
            <div className="overall-stats">
              <div className="overall-kills">
                Total Kills: {this.state.lifetimeSegment.stats.kills.displayValue || "Unavailable"}
              </div>

              <div className="rank-wrapper">
                <div className="rank-label">Rank: </div>
                <div className="rank-metadata">
                  <div className="rank-image">
                    <img src={this.state.lifetimeSegment.stats.rankScore.metadata.iconUrl} />
                  </div>
                  <div className="rank-text">
                    {this.state.lifetimeSegment.stats.rankScore.displayValue} MMR
                  </div>
                </div>
              </div>
            </div>
          </div>
        </>
      );
    }
  }

  handleSubmit(e) {
    e.preventDefault();
    fetch(
      `https://public-api.tracker.gg/v2/apex/standard/profile/${this.state.platform}/${this.state.platformUserId}`,
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
          dataArray: res.data,
          lifetimeSegment: res.data.segments[0],
          activeLegendSegment: res.data.segments[1]
        });
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
      <div>
        <div className="player-stats-form-wrapper">
          <form onSubmit={this.handleSubmit}>
            <h2 className="input-label">Player Platform</h2>
            <input
              type="text"
              name="platform"
              onChange={this.handleChange}
              className="base-input"
              placeholder="Origin, XBL, PSN"
              value={this.state.platform}
            />
            <h2 className="input-label">Player Name</h2>
            <input
              type="text"
              name="platformUserId"
              onChange={this.handleChange}
              className="base-input"
              placeholder="Player Name"
              value={this.state.platformUserId}
            />
            <button type="submit" className="btn">
              Search
            </button>
          </form>
        </div>
        {this.renderPlayerStats()}
      </div>
    );
  }
}
