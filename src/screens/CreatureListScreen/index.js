import { connect } from 'react-redux';
import CreatureListScreen from './CreatureListScreen';

function mapStoreToProps(store) {
    return {
        creatures: store.app.creatures
    }
}

export default connect(mapStoreToProps)(CreatureListScreen);