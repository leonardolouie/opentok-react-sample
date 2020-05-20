import React from "react";
import { OTSession, OTStreams, preloadScript } from "opentok-react";
import "./App.css";
import ConnectionStatus from "./components/ConnectionStatus";
import Publisher from "./components/Publisher";
import Subscriber from "./components/Subscriber";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      error: null,
      connected: false,
    };
    this.sessionEvents = {
      sessionConnected: () => {
        this.setState({ connected: true });
      },
      sessionDisconnected: () => {
        this.setState({ connected: false });
      },
    };
  }

  onError = (err) => {
    this.setState({ error: `Failed to connect: ${err.message}` });
  };

  render() {
    return (
      <OTSession
        apiKey={this.props.apiKey}
        sessionId={this.props.sessionId}
        token={this.props.token}
        eventHandlers={this.sessionEvents}
        onError={this.onError}
      >
        {this.state.error ? <div id="error">{this.state.error}</div> : null}
        <ConnectionStatus connected={this.state.connected} />
        <div id="videos"> 
        <Publisher />
        <OTStreams>
          <Subscriber />
        </OTStreams>
        </div>
      </OTSession>
    );
  }
}
export default preloadScript(App);
