import React from 'react';
import { Link,Redirect,withRouter } from 'react-router-dom';

const Nav = (props) => {
    const { history,location,match } = props
    console.log('location',location);
    console.log('match',match);
    return (
        <React.Fragment>
          <button 
            onClick={() => history.push('/settings',{test:123})}
          >
            go to settings
          </button>
          <button
            onClick={() => history.goBack()}
          >
            go back    
          </button>
          <button
             onClick={() => history.goForward()}
          >
            go forward
          </button>  
          <ul>
              <li>
                  <Link to="/dashboard">dashboard</Link>
              </li>
              <li>
                  <Link to="/settings">settings</Link> 
              </li>
              <li>
                  <Link to="/reports">reports</Link>
              </li>
              <li>
                  <Link to="/reports/123">reports ID</Link>
              </li>
          </ul>
          { false && <Redirect to="test" /> }
        </React.Fragment>
    );
};

export default withRouter(Nav);