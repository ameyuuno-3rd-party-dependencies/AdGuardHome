import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import { Trans } from 'react-i18next';

import Tab from './Tab';
import './Tabs.css';

const getContent = ({
    tlsAddress,
    httpsAddress,
    showDnsPrivacyNotice,
    t,
}) => ({
    Router: {
        // eslint-disable-next-line react/display-name
        getTitle: () => <p>
            <Trans>install_devices_router_desc</Trans>
        </p>,
        title: 'Router',
        list: ['install_devices_router_list_1',
            'install_devices_router_list_2',
            'install_devices_router_list_3',
            // eslint-disable-next-line react/jsx-key
            <Trans components={[
                <a href="#dhcp" key="0">
                    link
                </a>,
            ]}>install_devices_router_list_4</Trans>,
        ],
    },
    Windows: {
        title: 'Windows',
        list: ['install_devices_windows_list_1',
            'install_devices_windows_list_2',
            'install_devices_windows_list_3',
            'install_devices_windows_list_4',
            'install_devices_windows_list_5',
            'install_devices_windows_list_6'],
    },
    macOS: {
        title: 'macOS',
        list: ['install_devices_macos_list_1',
            'install_devices_macos_list_2',
            'install_devices_macos_list_3',
            'install_devices_macos_list_4'],
    },
    Android: {
        title: 'Android',
        list: ['install_devices_android_list_1',
            'install_devices_android_list_2',
            'install_devices_android_list_3',
            'install_devices_android_list_4',
            'install_devices_android_list_5'],
    },
    iOS: {
        title: 'iOS',
        list: ['install_devices_ios_list_1',
            'install_devices_ios_list_2',
            'install_devices_ios_list_3',
            'install_devices_ios_list_4'],
    },
    dns_privacy: {
        // eslint-disable-next-line react/display-name
        getTitle: () => <div label="dns_privacy" title={t('dns_privacy')}>
            <div className="tab__text">
                {tlsAddress && tlsAddress.length > 0 && (
                    <div className="tab__paragraph">
                        <Trans
                            values={{ address: tlsAddress[0] }}
                            components={[
                                <strong key="0">text</strong>,
                                <code key="1">text</code>,
                            ]}
                        >
                            setup_dns_privacy_1
                        </Trans>
                    </div>
                )}
                {httpsAddress && httpsAddress.length > 0 && (
                    <div className="tab__paragraph">
                        <Trans
                            values={{ address: httpsAddress[0] }}
                            components={[
                                <strong key="0">text</strong>,
                                <code key="1">text</code>,
                            ]}
                        >
                            setup_dns_privacy_2
                        </Trans>
                    </div>
                )}
                {showDnsPrivacyNotice
                    ? (
                        <div className="tab__paragraph">
                            <Trans
                                components={[
                                    <a
                                        href="https://github.com/AdguardTeam/AdguardHome/wiki/Encryption"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        key="0"
                                    >
                                        link
                                    </a>,
                                    <code key="1">text</code>,
                                ]}
                            >
                                setup_dns_notice
                            </Trans>
                        </div>
                    )
                    : (
                        <>
                            <div className="tab__paragraph">
                                <Trans components={[<p key="0">text</p>]}>
                                    setup_dns_privacy_3
                                </Trans>
                            </div>
                            <div className="tab__paragraph">
                                <strong>Android</strong>
                                <ul>
                                    <li>
                                        <Trans>setup_dns_privacy_android_1</Trans>
                                    </li>
                                    <li>
                                        <Trans
                                            components={[
                                                <a
                                                    href="https://adguard.com/adguard-android/overview.html"
                                                    target="_blank"
                                                    rel="noopener noreferrer"
                                                    key="0"
                                                >
                                                    link
                                                </a>,
                                                <code key="1">text</code>,
                                            ]}
                                        >
                                            setup_dns_privacy_android_2
                                        </Trans>
                                    </li>
                                    <li>
                                        <Trans
                                            components={[
                                                <a
                                                    href="https://getintra.org/"
                                                    target="_blank"
                                                    rel="noopener noreferrer"
                                                    key="0"
                                                >
                                                    link
                                                </a>,
                                                <code key="1">text</code>,
                                            ]}
                                        >
                                            setup_dns_privacy_android_3
                                        </Trans>
                                    </li>
                                </ul>
                            </div>
                            <div className="tab__paragraph">
                                <strong>iOS</strong>
                                <ul>
                                    <li>
                                        <Trans
                                            components={[
                                                <a
                                                    href="https://itunes.apple.com/app/id1452162351"
                                                    target="_blank"
                                                    rel="noopener noreferrer"
                                                    key="0"
                                                >
                                                    link
                                                </a>,
                                                <code key="1">text</code>,
                                                <a
                                                    href="https://dnscrypt.info/stamps"
                                                    target="_blank"
                                                    rel="noopener noreferrer"
                                                    key="2"
                                                >
                                                    link
                                                </a>,
                                            ]}
                                        >
                                            setup_dns_privacy_ios_1
                                        </Trans>
                                    </li>
                                    <li>
                                        <Trans
                                            components={[
                                                <a
                                                    href="https://adguard.com/adguard-ios/overview.html"
                                                    target="_blank"
                                                    rel="noopener noreferrer"
                                                    key="0"
                                                >
                                                    link
                                                </a>,
                                                <code key="1">text</code>,
                                            ]}
                                        >
                                            setup_dns_privacy_ios_2
                                        </Trans>
                                    </li>
                                </ul>
                            </div>
                            <div className="tab__paragraph">
                                <strong>
                                    <Trans>setup_dns_privacy_other_title</Trans>
                                </strong>
                                <ul>
                                    <li>
                                        <Trans>setup_dns_privacy_other_1</Trans>
                                    </li>
                                    <li>
                                        <Trans
                                            components={[
                                                <a
                                                    href="https://github.com/AdguardTeam/dnsproxy"
                                                    target="_blank"
                                                    rel="noopener noreferrer"
                                                    key="0"
                                                >
                                                    link
                                                </a>,
                                            ]}
                                        >
                                            setup_dns_privacy_other_2
                                        </Trans>
                                    </li>
                                    <li>
                                        <Trans
                                            components={[
                                                <a
                                                    href="https://github.com/jedisct1/dnscrypt-proxy"
                                                    target="_blank"
                                                    rel="noopener noreferrer"
                                                    key="0"
                                                >
                                                    link
                                                </a>,
                                                <code key="1">text</code>,
                                            ]}
                                        >
                                            setup_dns_privacy_other_3
                                        </Trans>
                                    </li>
                                    <li>
                                        <Trans
                                            components={[
                                                <a
                                                    href="https://www.mozilla.org/firefox/"
                                                    target="_blank"
                                                    rel="noopener noreferrer"
                                                    key="0"
                                                >
                                                    link
                                                </a>,
                                                <code key="1">text</code>,
                                            ]}
                                        >
                                            setup_dns_privacy_other_4
                                        </Trans>
                                    </li>
                                    <li>
                                        <Trans
                                            components={[
                                                <a
                                                    href="https://dnscrypt.info/implementations"
                                                    target="_blank"
                                                    rel="noopener noreferrer"
                                                    key="0"
                                                >
                                                    link
                                                </a>,
                                                <a
                                                    href="https://dnsprivacy.org/wiki/display/DP/DNS+Privacy+Clients"
                                                    target="_blank"
                                                    rel="noopener noreferrer"
                                                    key="1"
                                                >
                                                    link
                                                </a>,
                                            ]}
                                        >
                                            setup_dns_privacy_other_5
                                        </Trans>
                                    </li>
                                </ul>
                            </div>
                        </>
                    )}
            </div>
        </div>,
        title: 'dns_privacy',
    },
});

const renderContent = (({ title, list, getTitle }, t) => <div key={title} label={title}>
    <div className="tab__title">{t(title)}</div>
    <div className="tab__text">
        {typeof getTitle === 'function' && getTitle()}
        {list && <ol>{list.map((item) => <li key={item}><Trans>{item}</Trans></li>)}</ol>}
    </div>
</div>);

renderContent.propTypes = {
    title: PropTypes.string.isRequired,
    list: PropTypes.array.isRequired,
    getTitle: PropTypes.func,
};

class Tabs extends Component {
    constructor() {
        super();
        this.state = {
            activeTab: 'Router',
        };
    }

    onClickTabControl = (tab) => {
        this.setState({ activeTab: tab });
    };

    render() {
        const {
            props: {
                controlClass,
                tlsAddress,
                httpsAddress,
                showDnsPrivacyNotice,
                t,
            },
            state: {
                activeTab,
            },
        } = this;

        const items = getContent({
            tlsAddress,
            httpsAddress,
            showDnsPrivacyNotice,
            t,
        });

        const activeTabProps = items[activeTab];

        const getControlClass = classnames({
            tabs__controls: true,
            [`tabs__controls--${controlClass}`]: controlClass,
        });

        return (
            <div className="tabs">
                <div className={getControlClass}>
                    {Object.values(items)
                        .map((props) => {
                            const { title, label = title } = props;
                            return (
                                <Tab
                                    key={label}
                                    label={label}
                                    title={title}
                                    activeTab={activeTab}
                                    onClick={this.onClickTabControl}
                                    t={t}
                                />
                            );
                        })}
                </div>
                <div className="tabs__content">
                    {renderContent(activeTabProps, t)}
                </div>
            </div>
        );
    }
}

Tabs.propTypes = {
    controlClass: PropTypes.string,
    tlsAddress: PropTypes.array.isRequired,
    httpsAddress: PropTypes.array.isRequired,
    showDnsPrivacyNotice: PropTypes.bool.isRequired,
    t: PropTypes.func.isRequired,
};

export default Tabs;
