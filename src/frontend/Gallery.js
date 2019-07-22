import React from 'react';
import ShowStack from './ShowStack';

export default class Gallery extends React.Component {
    constructor() {
        super();
        this.state = {
          ShowsBackend: []
        };
      }

      componentDidMount(){
          fetch ('/rest/shows').then(function(response) {
            return response.json();})
            .then(ShowsBackend => {
                console.log(ShowsBackend)
                this.setState({ShowsBackend})
            })
        }
    render() {
        console.log(this.state.ShowsBackend)
        return (
            <div>
                <div className="Row">
                    {
                        this.state.ShowsBackend.map(showStack => (
                            <ShowStack
                                key={showStack.id}
                                id={showStack.id}
                                name={showStack.name}
                                tvShowLogo={showStack.tvShowLogo} />
                        ))
                    }
                </div>
            </div>
        );
    }
}


