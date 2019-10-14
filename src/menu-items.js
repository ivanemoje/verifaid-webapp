export default {
    items: [
        {
            id: 'navigation',
            title: 'Navigation',
            type: 'group',
            icon: 'icon-navigation',
            children: [
                {
                    id: 'dashboard',
                    title: 'Dashboard',
                    type: 'item',
                    url: '/dashboard',                  
                    icon: 'feather icon-home',
                }
            ]
        },
        {
            id: 'data_head',
            title: 'DATA',
            type: 'group',
            icon: 'icon-ui',
            children: [
                {
                    id: 'data',
                    title: 'Beneficiary Data',
                    type: 'collapse',
                    icon: 'feather icon-box',
                    children: [
                        {
                            id: 'bensearch',
                            title: 'Search Beneficiary Data',
                            type: 'item',
                            url: '/basic/bensearch'
                        },
                        {
                            id: 'singlebendata',
                            title: 'Single Beneficiary Data',
                            type: 'item',
                            url: '/basic/singlebendata'
                        },
                        {
                            id: 'batchbendataunhcr',
                            title: 'Batch Ben Data [UNHCR]',
                            type: 'item',
                            url: '/basic/batchbendataunhcr'
                        },
                        {
                            id: 'batchbendatafsp',
                            title: 'Batch Ben Data [Bank]',
                            type: 'item',
                            url: '/basic/batchbendatafsp'
                        },
                        {
                            id: 'benanalytics',
                            title: 'Ben Data Analytics',
                            type: 'item',
                            url: '/basic/benanalytics'
                        }
                    ]
                }
            ]
        },
        {
            id: 'manifests_head',
            title: 'MANIFESTS',
            type: 'group',
            icon: 'icon-ui',
            children: [
                {
                    id: 'manifests',
                    title: 'Manifests',
                    type: 'collapse',
                    icon: 'feather icon-box',
                    children: [
                        {
                            id: 'manifestlist',
                            title: 'Manifest List',
                            type: 'item',
                            url: '/basic/manifestlist'
                        },
                        {
                            id: 'anomalies',
                            title: 'Find Anomalies',
                            type: 'item',
                            url: '/basic/anomalies'
                        },
                        {
                            id: 'precrn',
                            title: 'PreCRN',
                            type: 'item',
                            url: '/basic/precrn'
                        }
                    ]
                }
            ]
        },
        {
            id: 'paymentinstructions_head',
            title: 'PAYMENT INSTRUCTIONS',
            type: 'group',
            icon: 'icon-ui',
            children: [
                {
                    id: 'paymentinstructions',
                    title: 'Payment Instructions',
                    type: 'collapse',
                    icon: 'feather icon-box',
                    children: [
                    //    Memory leak in create and list CRN
                        // {
                        //     id: 'createcrns',
                        //     title: 'Create CRN',
                        //     type: 'item',
                        //     url: 'basic/createcrns'
                        // },
                        // {
                        //     id: 'listcrns',
                        //     title: 'List CRNs',
                        //     type: 'item',
                        //     url: 'basic/listcrns',
                        // },
                        {
                            id: 'crnceate',
                            title: 'Create CRNs',
                            type: 'item',
                            url: '/basic/crncreate',
                        },
                        {
                            id: 'crnlist',
                            title: 'List CRNs',
                            type: 'item',
                            url: '/basic/crnlist',
                        },
                        {
                            id: 'createpaymentmemos',
                            title: 'Create Payment Memo',
                            type: 'item',
                            url: '/basic/createpaymentmemos',
                        },
                        {
                            id: 'listpaymentmemos',
                            title: 'List Payment Memos',
                            type: 'item',
                            url: '/basic/listpaymentmemos',
                        },
                        {
                            id: 'createpaymentrequests',
                            title: 'Create Payment Requests',
                            type: 'item',
                            url: '/basic/createpaymentrequests',
                        },
                        {
                            id: 'listpaymentrequests',
                            title: 'List Payment Requests',
                            type: 'item',
                            url: '/basic/listpaymentrequests',
                        }
                    ]
                }
            ]
        },


        // {
        //     id: 'paymentinstructions_head',
        //     title: 'Payment Instructions',
        //     type: 'group',
        //     icon: 'icon-pages',
        //     children: [
                               
               
        //                 {
        //                     id: 'crns',
        //                     title: 'Cash Release Notes',
        //                     // icon: 'feather icon-menu',
        //                     type: 'collapse',
        //                     children: [
        //                         {
        //                             id: 'createcrns',
        //                             title: 'Create CRN',
        //                             type: 'item',
        //                             url: 'basic/createcrns',
        //                             breadcrumbs: false
        //                         },
        //                         {
        //                             id: 'listcrns',
        //                             title: 'List CRNs',
        //                             type: 'item',
        //                             url: 'basic/listcrns',
        //                         }
                                
        //                     ]
        //                 },
        //                 {
        //                     id: 'paymentmemos',
        //                     title: 'Payment Memos',
        //                     type: 'collapse',
        //                     children: [
        //                         {
        //                             id: 'createpaymentmemos',
        //                             title: 'Create Payment Memo',
        //                             type: 'item',
        //                             url: '/basic/createpaymentmemos',
        //                         },
        //                         {
        //                             id: 'listpaymentmemos',
        //                             title: 'List Payment Memos',
        //                             type: 'item',
        //                             url: '/basic/listpaymentmemos',
        //                         }
                                
        //                     ]
        //                 },
        //                 {
        //                     id: 'paymentrequests',
        //                     title: 'Payment Requests',
        //                     type: 'collapse',
        //                     children: [
        //                         {
        //                             id: 'createpaymentrequests',
        //                             title: 'Create Payment Requests',
        //                             type: 'item',
        //                             url: '/basic/createpaymentrequests',
        //                         },
        //                         {
        //                             id: 'listpaymentrequests',
        //                             title: 'List Payment Requests',
        //                             type: 'item',
        //                             url: '/basic/listpaymentrequests',
        //                         }
                                
        //                     ]
        //                 }
        //             ]
                
        // }, 
        {
            id: 'reports',
            title: 'Reports',
            type: 'group',
            icon: 'icon-ui',
            children: [
                {
                    id: 'distributionreports',
                    title: 'Distribution Reports',
                    type: 'collapse',
                    icon: 'feather icon-box',
                    children: [
                        {
                            id: 'gdtddrs',
                            title: 'GDT DDRs',
                            type: 'item',
                            url: '/basic/gdtddrs'
                        },
                        {
                            id: 'gdtpdrs',
                            title: 'GDT PDRs',
                            type: 'item',
                            url: '/basic/gdtpdrs'
                        },
                        {
                            id: 'bankpdrs',
                            title: 'Bank PDRs',
                            type: 'item',
                            url: '/basic/bankpdrs'
                        }
                    ]
                },
                {
                                id: 'biometricanalysis',
                                title: 'Biometric Analysis',
                                type: 'item',
                                icon: 'feather icon-pie-chart',
                                url: '/charts/biometricanalysis'
                }    
            ]
        },
               
        {
            id: 'paymentloading',
            title: 'Payment Loading',
            type: 'group',
            icon: 'icon-group',
            children: [
                {
                    id: 'uploadlist',
                    title: 'Upload List',
                    type: 'item',
                    url: '/forms/uploadlist',
                    icon: 'feather icon-file-text'
                }
            ]
        },
        {
            id: 'reconciliation',
            title: 'Reconciliation',
            type: 'group',
            icon: 'icon-group',
            children: [
                {
                    id: 'recon',
                    title: 'Reconciliation',
                    type: 'item',
                    classes: 'nav-item disabled',
                    url: '/forms/reconciliation',
                    icon: 'feather icon-file-text'
                }
               
            ]
        },
       
        {
            id: 'settings_head',
            title: 'System',
            type: 'group',
            icon: 'icon-ui',
            children: [
                {
                    id: 'systemsettings',
                    title: 'System Settings',
                    type: 'collapse',
                    icon: 'feather icon-lock',
                    children: [
                        {
                            id: 'usersettings',
                            title: 'User Settings',
                            type: 'item',
                            url: '/basic/usersettings',
                        },
                        {
                            id: 'fieldoffices',
                            title: 'Field Offices',
                            type: 'item',
                            url: '/basic/fieldoffices',
                        },
                        {
                            id: 'settlements',
                            title: 'Settlements/FDPs',
                            type: 'item',
                            url: '/basic/settlements',
                        },
                        {
                            id: 'reconchecks',
                            title: 'Reconciliation Checks',
                            type: 'item',
                            url: '/basic/reconchecks',
                        },
                        {
                            id: 'systemlogs',
                            title: 'System Logs',
                            type: 'item',
                            url: '/basic/systemlogs',
                        }
                    ]
                    
                },

                {
                    id: 'changepassword',
                    title: 'Change Password',
                    type: 'item',
                    url: '/changepassword',
                    classes: 'nav-item',
                    icon: 'feather icon-sidebar'
                },
                {
                    id: 'docs',
                    title: 'Documentation',
                    type: 'item',
                    url: '/docs',
                    classes: 'nav-item',
                    icon: 'feather icon-help-circle'
                },
                {
                    id: 'logout',
                    title: 'Log Out',
                    type: 'item',
                    url: '/logout',
                    classes: 'nav-item',
                    icon: 'feather icon-sidebar'
                }
               
            ]
        }
    ]
}