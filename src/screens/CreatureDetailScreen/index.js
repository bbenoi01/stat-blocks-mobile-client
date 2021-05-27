import { connect } from 'react-redux';
import CreatureDetailScreen from './CreatureDetailScreen';

function mapStoreToProps(store) {
    return {
        campaigns: store.app.campaigns
    }
}

export default connect(mapStoreToProps)(CreatureDetailScreen);