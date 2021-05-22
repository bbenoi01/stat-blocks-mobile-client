import { connect } from 'react-redux';
import AuthBtn from './AuthBtn';

function mapStoreToProps(store) {
    return {
        authenticated: store.app.authenticated
    }
}

export default connect(mapStoreToProps)(AuthBtn);