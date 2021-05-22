import { connect } from 'react-redux';
import CreatureList from './CreatureList';

function mapStoreToProps(store) {
    return {
        creatures: store.app.creatures
    }
}

export default connect(mapStoreToProps)(CreatureList);