import { connect } from 'react-redux';
import AppHeader from './AppHeader';

function mapStoreToProps(store) {
    return {
        routeName: store.app.routeName
    }
}

export default connect(mapStoreToProps)(AppHeader);