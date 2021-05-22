import { connect } from 'react-redux';
import CoolBkBtn from './CoolBkBtn';

function mapStoreToProps(store) {
    return {
        routeName: store.app.routeName
    }
}

export default connect(mapStoreToProps)(CoolBkBtn);