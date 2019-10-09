import React from 'react';
import $ from 'jquery';

window.jQuery = $;
window.$ = $;
global.jQuery = $;

const DashboardDefault = React.lazy(() => import('./Demo/Dashboard/Default'));

const BenList = React.lazy(() => import('./Demo/UIElements/Basic/BenList'));
const SingleBenData = React.lazy(() => import('./Demo/UIElements/Basic/SingleBenData'));
const BatchBenDataUNHCR = React.lazy(() => import('./Demo/UIElements/Basic/BatchBenDataUNHCR'));
const BatchBenDataFSP = React.lazy(() => import('./Demo/UIElements/Basic/BatchBenDataFSP'));
const BenAnalytics = React.lazy(() => import('./Demo/UIElements/Basic/BenAnalytics'));

const ManifestList = React.lazy(() => import('./Demo/UIElements/Basic/ManifestList'));
const PreCrn = React.lazy(() => import('./Demo/UIElements/Basic/PreCrn'));
const Anomalies = React.lazy(() => import('./Demo/UIElements/Basic/Anomalies'));

const CreateCrn = React.lazy(() => import('./Demo/UIElements/Basic/CreateCrn'));
const ListCrn = React.lazy(() => import('./Demo/UIElements/Basic/ListCrn'));
const CreatePaymentMemo = React.lazy(() => import('./Demo/UIElements/Basic/CreatePaymentMemo'));
const ListPaymentMemo = React.lazy(() => import('./Demo/UIElements/Basic/ListPaymentMemo'));
const CreatePaymentReq = React.lazy(() => import('./Demo/UIElements/Basic/CreatePaymentReq'));
const ListPaymentReq = React.lazy(() => import('./Demo/UIElements/Basic/ListPaymentReq'));

const GdtPdr = React.lazy(() => import('./Demo/UIElements/Basic/GdtPdr'));
const BankPdr = React.lazy(() => import('./Demo/UIElements/Basic/BankPdr'));
// const UIBasicBreadcrumbPagination = React.lazy(() => import('./Demo/UIElements/Basic/BreadcrumbPagination'));

// const UIBasicCollapse = React.lazy(() => import('./Demo/UIElements/Basic/Collapse'));
// const UIBasicTabsPills = React.lazy(() => import('./Demo/UIElements/Basic/TabsPills'));
// const UIBasicBasicTypography = React.lazy(() => import('./Demo/UIElements/Basic/Typography'));

const Reconciliation = React.lazy(() => import('./Demo/Forms/Reconciliation'));
const UploadList = React.lazy(() => import('./Demo/Forms/UploadList'));

// const BootstrapTable = React.lazy(() => import('./Demo/Tables/BootstrapTable'));

const BiometricAnalysis = React.lazy(() => import('./Demo/Charts/BiometricAnalysis/index'));

const FieldOffices = React.lazy(() => import('./Demo/UIElements/Basic/FieldOffices'));
const UserSettings = React.lazy(() => import('./Demo/UIElements/Basic/UserSettings'));
const ReconChecks = React.lazy(() => import('./Demo/UIElements/Basic/ReconChecks'));
const Settlements = React.lazy(() => import('./Demo/UIElements/Basic/Settlements'));
const SystemLogs = React.lazy(() => import('./Demo/UIElements/Basic/SystemLogs'));


// const GoogleMap = React.lazy(() => import('./Demo/Maps/GoogleMap/index'));

const ChangePassword = React.lazy(() => import('./Demo/Other/ChangePassword'));
const Docs = React.lazy(() => import('./Demo/Other/Docs'));
const LogOut = React.lazy(() => import('./Demo/Other/LogOut'));


const routes = [
    { path: '/dashboard', exact: true, name: 'Default', component: DashboardDefault },

    { path: '/basic/benlist', exact: true, name: 'Ben List', component: BenList },
    { path: '/basic/singlebendata', exact: true, name: 'Single Ben Data', component: SingleBenData },
    { path: '/basic/batchbendataunhcr', exact: true, name: 'UNHCR Batch Data', component: BatchBenDataUNHCR },    
    { path: '/basic/batchbendatafsp', exact: true, name: 'FSP Batch Data', component: BatchBenDataFSP },    
    { path: '/basic/benanalytics', exact: true, name: 'Ben Analytics', component: BenAnalytics },    
    
    { path: '/basic/manifestlist', exact: true, name: 'Manifest Listr', component: ManifestList },
    { path: '/basic/precrn', exact: true, name: 'PreCRN', component: PreCrn },
    { path: '/basic/anomalies', exact: true, name: 'Find Anomalies', component: Anomalies },


    { path: '/basic/createcrns', exact: true, name: 'Create CRN', component: CreateCrn },
    { path: '/basic/listcrns', exact: true, name: 'List CRN', component: ListCrn },
    { path: '/basic/createpaymentmemos', exact: true, name: 'Create Payment Memo', component: CreatePaymentMemo },
    { path: '/basic/listpaymentmemos', exact: true, name: 'List Payment Memo', component: ListPaymentMemo },
    { path: '/basic/createpaymentrequests', exact: true, name: 'Create Payment Req', component: CreatePaymentReq },
    { path: '/basic/listpaymentrequests', exact: true, name: 'List Payment Req', component: ListPaymentReq },

    { path: '/basic/gdtpdrs', exact: true, name: 'GDT PDRs', component: GdtPdr },
    { path: '/basic/bankpdrs', exact: true, name: 'Bank PDRs', component: BankPdr },
    { path: '/basic/biometricanalysis', exact: true, name: 'Biometric Analysis', component: BiometricAnalysis },

    { path: '/basic/uploadlist', exact: true, name: 'Upload List', component: UploadList },
    { path: '/basic/recon', exact: true, name: 'Reconciliation', component: Reconciliation },

    { path: '/basic/usersettings', exact: true, name: 'User Settings', component: UserSettings },
    { path: '/basic/fieldoffices', exact: true, name: 'Field Offices', component: FieldOffices },
    { path: '/basic/settlements', exact: true, name: 'Settlements', component: Settlements },
    { path: '/basic/reconchecks', exact: true, name: 'Recon Checks', component: ReconChecks },
    { path: '/basic/systemlogs', exact: true, name: 'System Logs', component: SystemLogs },

    { path: '/changepassword', exact: true, name: 'Change Password', component: ChangePassword },
    { path: '/docs', exact: true, name: 'Documentation', component: Docs },
    { path: '/  logout', exact: true, name: 'Log Out', component: LogOut },

];

export default routes;