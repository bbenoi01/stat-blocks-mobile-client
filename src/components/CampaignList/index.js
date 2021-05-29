import { connect } from 'react-redux';
import CampaignList from './CapmaignList';

function mapStoreToProps(store) {
    return {
        campaigns: store.app.campaigns,
        visible: store.app.visible
    }
}

export default connect(mapStoreToProps)(CampaignList);