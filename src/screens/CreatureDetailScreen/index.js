import { connect } from 'react-redux';
import CreatureDetailScreen from './CreatureDetailScreen';

function mapStoreToProps(store) {
    return {
        campaigns: store.app.campaigns,
        visible: store.app.visible
    }
}

export default connect(mapStoreToProps)(CreatureDetailScreen);