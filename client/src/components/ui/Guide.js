import React from 'react';
import PropTypes from 'prop-types';
import { withTranslation } from 'react-i18next';

import Tabs from './Tabs';
import Icons from './Icons';

const Guide = (props) => {
    const { dnsAddresses, t } = props;
    const tlsAddress = (dnsAddresses && dnsAddresses.filter((item) => item.includes('tls://'))) || '';
    const httpsAddress = (dnsAddresses && dnsAddresses.filter((item) => item.includes('https://'))) || '';
    const showDnsPrivacyNotice = httpsAddress.length < 1 && tlsAddress.length < 1;

    return (
        <div>
            <Icons />
            <Tabs
                tlsAddress={tlsAddress}
                httpsAddress={httpsAddress}
                showDnsPrivacyNotice={showDnsPrivacyNotice}
                t={t}
            />
        </div>
    );
};

Guide.defaultProps = {
    dnsAddresses: [],
};

Guide.propTypes = {
    dnsAddresses: PropTypes.array,
    t: PropTypes.func.isRequired,
};

export default withTranslation()(Guide);
