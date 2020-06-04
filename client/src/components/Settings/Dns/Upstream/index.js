import React from 'react';
import PropTypes from 'prop-types';
import { useTranslation } from 'react-i18next';

import Form from './Form';
import Card from '../../../ui/Card';
import { DNS_REQUEST_OPTIONS } from '../../../../helpers/constants';

const getInitialDnsRequestOption = ({
    parallel_requests,
    fastest_addr,
}) => {
    if (parallel_requests) {
        return DNS_REQUEST_OPTIONS.PARALLEL_REQUESTS;
    }
    if (fastest_addr) {
        return DNS_REQUEST_OPTIONS.FASTEST_ADDR;
    }
    return DNS_REQUEST_OPTIONS.LOAD_BALANCING;
};

const Upstream = (props) => {
    const [t] = useTranslation();

    const handleSubmit = ({ bootstrap_dns, upstream_dns, dnsRequestOption }) => {
        let options;

        switch (dnsRequestOption) {
            case DNS_REQUEST_OPTIONS.PARALLEL_REQUESTS:
                options = {
                    [DNS_REQUEST_OPTIONS.PARALLEL_REQUESTS]: true,
                    [DNS_REQUEST_OPTIONS.FASTEST_ADDR]: false,
                };
                break;
            case DNS_REQUEST_OPTIONS.FASTEST_ADDR:
                options = {
                    [DNS_REQUEST_OPTIONS.PARALLEL_REQUESTS]: false,
                    [DNS_REQUEST_OPTIONS.FASTEST_ADDR]: true,
                };
                break;
            case DNS_REQUEST_OPTIONS.LOAD_BALANCING:
                options = {
                    [DNS_REQUEST_OPTIONS.PARALLEL_REQUESTS]: false,
                    [DNS_REQUEST_OPTIONS.FASTEST_ADDR]: false,
                };
                break;
            default:
                break;
        }

        const formattedValues = {
            bootstrap_dns,
            upstream_dns,
            ...options,
        };

        props.setDnsConfig(formattedValues);
    };

    const handleTest = (values) => {
        props.testUpstream(values);
    };

    const {
        processingTestUpstream,
        dnsConfig: {
            upstream_dns,
            bootstrap_dns,
            fastest_addr,
            parallel_requests,
            processingSetConfig,
        },
    } = props;

    const dnsRequestOption = getInitialDnsRequestOption({
        parallel_requests,
        fastest_addr,
    });

    return (
        <Card
            title={t('upstream_dns')}
            subtitle={t('upstream_dns_hint')}
            bodyType="card-body box-body--settings"
        >
            <div className="row">
                <div className="col">
                    <Form
                        initialValues={{
                            upstream_dns,
                            bootstrap_dns,
                            dnsRequestOption,
                        }}
                        testUpstream={handleTest}
                        onSubmit={handleSubmit}
                        processingTestUpstream={processingTestUpstream}
                        processingSetConfig={processingSetConfig}
                    />
                </div>
            </div>
        </Card>
    );
};

Upstream.propTypes = {
    testUpstream: PropTypes.func.isRequired,
    processingTestUpstream: PropTypes.bool.isRequired,
    dnsConfig: PropTypes.object.isRequired,
    setDnsConfig: PropTypes.func.isRequired,
};

export default Upstream;
