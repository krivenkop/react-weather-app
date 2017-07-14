import React, { Component } from "react";
import { connect } from "react-redux";
import fetchByName from "../export/fetchByName";
import "../Main.css";
import TownList from "../components/TownList";
import WarnTownName from "../components/WarnTownName";
import CurrentTown from "../components/CurrentTown";
import AddTownInput from "../components/AddTownInput";
import {
  selectCurrentTown,
  delTown,
  setWarnTownName,
  setWarnNever
} from "../actionTypes";

class Main extends Component {
  constructor(props) {
    super(props);
    this.returnWarnTownName = this.returnWarnTownName.bind(this);
  }

  returnWarnTownName() {
    return (
      <section className="warn-town-name">
        <div className="container">
          <div className="row">
            <div className="col-xs-12 col-md-offset-2 col-md-8">
              <WarnTownName
                setWarn={this.props.onChangeVisibleWarnTownName}
                setNeverDisplay={this.props.setNeverDisplayWarn}
              />
            </div>
          </div>
        </div>
      </section>
    );
  }

  render() {
    if (this.props.mainStore.defaultTown === undefined) {
      return (
        <div class="preloader">
        <div class="circ1"></div>
        <div class="circ2"></div>
        <div class="circ3"></div>
        <div class="circ4"></div>
      </div>
      );
    } else if (this.props.mainStore.defaultTown !== undefined) {
      return (
        <div>
          {this.props.mainStore.warnTownName.condition === true
            ? this.returnWarnTownName()
            : ""}
          <container className="page">
            <div className="container">
              <div className="row" />
              <div className="row works">
                <div className="col-xs-12">
                  <AddTownInput addTown={this.props.onInputAddTownClick} />
                </div>
              </div>
              <div className="row">
                <div className="col-xs-12 col-sm-offset-2 col-sm-8 col-md-offset-0 col-md-4">
                  <TownList
                    towns={this.props.mainStore.towns}
                    defaultTown={this.props.mainStore.defaultTown}
                    selectCurrent={this.props.onTownItemClick}
                    delTown={this.props.onTownItemCloseClick}
                  />
                </div>
                <div className="col-xs-12 col-md-8">
                  <CurrentTown current={this.props.mainStore.current} />
                </div>
              </div>
            </div>
          </container>
        </div>
      );
    }
  }
}

const mapStateToProps = state => {
  return {
    mainStore: state.mainStore
  };
};

const mapDispatchToProps = dispatch => {
  return {
    setNeverDisplayWarn: payload => {
      dispatch(setWarnNever());
    },
    onChangeVisibleWarnTownName: payload => {
      dispatch(setWarnTownName());
    },
    onTownItemClick: payload => {
      dispatch(selectCurrentTown(payload));
    },
    onTownItemCloseClick: payload => {
      dispatch(delTown(payload))
    },
    onInputAddTownClick: payload => {
      fetchByName(payload);
    }
  };
};

const mainStore = connect(mapStateToProps, mapDispatchToProps)(Main);

export default mainStore;
