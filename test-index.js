//Dev test OJwgc7W64WU5NNAOHvCrc0li6qacTy
exports.dev_test = 'cVjX7HQ3oENWL0DjVK9m';
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.BLACKDUCK_SCAN_FAILURE_SEVERITIES_KEY = exports.BLACKDUCK_SCAN_FULL_KEY = exports.BLACKDUCK_INSTALL_DIRECTORY_KEY = exports.BLACKDUCK_TOKEN_KEY = exports.BLACKDUCK_API_TOKEN_KEY = exports.BLACKDUCK_URL_KEY = exports.POLARIS_REPORTS_SARIF_ISSUE_TYPES_KEY = exports.POLARIS_REPORTS_SARIF_GROUP_SCA_ISSUES_KEY = exports.POLARIS_REPORTS_SARIF_SEVERITIES_KEY = exports.POLARIS_REPORTS_SARIF_FILE_PATH_KEY = exports.POLARIS_REPORTS_SARIF_CREATE_KEY = exports.POLARIS_BRANCH_PARENT_NAME_KEY = exports.POLARIS_BRANCH_NAME_KEY = exports.POLARIS_PRCOMMENT_SEVERITIES_KEY = exports.POLARIS_PRCOMMENT_ENABLED_KEY = exports.POLARIS_TRIAGE_KEY = exports.POLARIS_SERVER_URL_KEY = exports.POLARIS_SERVERURL_KEY = exports.POLARIS_ASSESSMENT_TYPES_KEY = exports.POLARIS_PROJECT_NAME_KEY = exports.POLARIS_APPLICATION_NAME_KEY = exports.POLARIS_ACCESS_TOKEN_KEY = exports.POLARIS_ACCESSTOKEN_KEY = exports.COVERITY_VERSION_KEY = exports.BRIDGE_COVERITY_VERSION_KEY = exports.COVERITY_LOCAL_KEY = exports.COVERITY_PRCOMMENT_ENABLED_KEY = exports.COVERITY_AUTOMATION_PRCOMMENT_KEY = exports.COVERITY_BRANCH_NAME_KEY = exports.COVERITY_REPOSITORY_NAME_KEY = exports.COVERITY_POLICY_VIEW_KEY = exports.COVERITY_INSTALL_DIRECTORY_KEY = exports.COVERITY_STREAM_NAME_KEY = exports.COVERITY_PROJECT_NAME_KEY = exports.COVERITY_PASSPHRASE_KEY = exports.COVERITY_USER_KEY = exports.COVERITY_URL_KEY = exports.BLACKDUCK_KEY = exports.POLARIS_KEY = exports.COVERITY_KEY = exports.SYNOPSYS_BRIDGE_DOWNLOAD_VERSION_KEY = exports.BRIDGE_DOWNLOAD_VERSION_KEY = exports.SYNOPSYS_BRIDGE_DOWNLOAD_URL_KEY = exports.BRIDGE_DOWNLOAD_URL_KEY = exports.SYNOPSYS_BRIDGE_INSTALL_DIRECTORY_KEY = exports.APPLICATION_NAME = exports.SYNOPSYS_BRIDGE_ARTIFACTORY_URL = exports.SYNOPSYS_BRIDGE_DEFAULT_PATH_LINUX = exports.SYNOPSYS_BRIDGE_DEFAULT_PATH_WINDOWS = exports.SYNOPSYS_BRIDGE_DEFAULT_PATH_MAC = void 0;
exports.GITHUB_ENVIRONMENT_VARIABLES = exports.HTTP_STATUS_FORBIDDEN = exports.HTTP_STATUS_ACCEPTED = exports.SECONDARY_RATE_LIMIT = exports.X_RATE_LIMIT_REMAINING = exports.X_RATE_LIMIT_RESET = exports.SARIF_DEFAULT_FILE_NAME = exports.POLARIS_SARIF_ARTIFACT_NAME = exports.POLARIS_SARIF_GENERATOR_DIRECTORY = exports.BLACKDUCK_SARIF_ARTIFACT_NAME = exports.BLACKDUCK_SARIF_GENERATOR_DIRECTORY = exports.BRIDGE_LOCAL_DIRECTORY = exports.POLARIS_UPLOAD_SARIF_REPORT_KEY = exports.BLACKDUCK_UPLOAD_SARIF_REPORT_KEY = exports.GITHUB_CLOUD_API_URL = exports.GITHUB_CLOUD_URL = exports.NON_RETRY_HTTP_CODES = exports.RETRY_COUNT = exports.RETRY_DELAY_IN_MILLISECONDS = exports.EXIT_CODE_MAP = exports.DIAGNOSTICS_RETENTION_DAYS_KEY = exports.NETWORK_AIRGAP_KEY = exports.BRIDGE_NETWORK_AIRGAP_KEY = exports.INCLUDE_DIAGNOSTICS_KEY = exports.GITHUB_TOKEN_KEY = exports.GITHUB_HOST_URL_KEY = exports.BLACKDUCK_REPORTS_SARIF_GROUP_SCA_ISSUES_KEY = exports.BLACKDUCK_REPORTS_SARIF_SEVERITIES_KEY = exports.BLACKDUCK_REPORTS_SARIF_FILE_PATH_KEY = exports.BLACKDUCK_REPORTS_SARIF_CREATE_KEY = exports.BLACKDUCK_PRCOMMENT_ENABLED_KEY = exports.BLACKDUCK_AUTOMATION_PRCOMMENT_KEY = exports.BLACKDUCK_FIXPR_USE_UPGRADE_GUIDANCE_KEY = exports.BLACKDUCK_FIXPR_FILTER_SEVERITIES_KEY = exports.BLACKDUCK_FIXPR_CREATE_SINGLE_PR_KEY = exports.BLACKDUCK_FIXPR_MAXCOUNT_KEY = exports.BLACKDUCK_FIXPR_ENABLED_KEY = exports.BLACKDUCK_AUTOMATION_FIXPR_KEY = void 0;
exports.SYNOPSYS_BRIDGE_DEFAULT_PATH_MAC = '/synopsys-bridge'; //Path will be in home
exports.SYNOPSYS_BRIDGE_DEFAULT_PATH_WINDOWS = '\\synopsys-bridge';
exports.SYNOPSYS_BRIDGE_DEFAULT_PATH_LINUX = '/synopsys-bridge';
exports.SYNOPSYS_BRIDGE_ARTIFACTORY_URL = 'https://sig-repo.synopsys.com/artifactory/bds-integrations-release/com/synopsys/integration/synopsys-bridge/';
exports.APPLICATION_NAME = 'synopsys-action';
exports.SYNOPSYS_BRIDGE_INSTALL_DIRECTORY_KEY = 'synopsys_bridge_install_directory';
/**
 * @deprecated Use synopsys_bridge_download_url instead. This can be removed in future release.
 */
exports.BRIDGE_DOWNLOAD_URL_KEY = 'bridge_download_url';
exports.SYNOPSYS_BRIDGE_DOWNLOAD_URL_KEY = 'synopsys_bridge_download_url';
/**
 * @deprecated Use synopsys_bridge_download_version instead. This can be removed in future release.
 */
exports.BRIDGE_DOWNLOAD_VERSION_KEY = 'bridge_download_version';
exports.SYNOPSYS_BRIDGE_DOWNLOAD_VERSION_KEY = 'synopsys_bridge_download_version';
// Scan Types
exports.COVERITY_KEY = 'coverity';
exports.POLARIS_KEY = 'polaris';
exports.BLACKDUCK_KEY = 'blackduck';
// Coverity
exports.COVERITY_URL_KEY = 'coverity_url';
exports.COVERITY_USER_KEY = 'coverity_user';
exports.COVERITY_PASSPHRASE_KEY = 'coverity_passphrase';
exports.COVERITY_PROJECT_NAME_KEY = 'coverity_project_name';
exports.COVERITY_STREAM_NAME_KEY = 'coverity_stream_name';
exports.COVERITY_INSTALL_DIRECTORY_KEY = 'coverity_install_directory';
exports.COVERITY_POLICY_VIEW_KEY = 'coverity_policy_view';
exports.COVERITY_REPOSITORY_NAME_KEY = 'coverity_repository_name';
exports.COVERITY_BRANCH_NAME_KEY = 'coverity_branch_name';
exports.COVERITY_AUTOMATION_PRCOMMENT_KEY = 'coverity_automation_prcomment';
exports.COVERITY_PRCOMMENT_ENABLED_KEY = 'coverity_prComment_enabled';
exports.COVERITY_LOCAL_KEY = 'coverity_local';
exports.BRIDGE_COVERITY_VERSION_KEY = 'bridge_coverity_version';
exports.COVERITY_VERSION_KEY = 'coverity_version';
// Polaris
/**
 * @deprecated Use polaris_access_token instead. This can be removed in future release.
 */
exports.POLARIS_ACCESSTOKEN_KEY = 'polaris_accessToken';
exports.POLARIS_ACCESS_TOKEN_KEY = 'polaris_access_token';
exports.POLARIS_APPLICATION_NAME_KEY = 'polaris_application_name';
exports.POLARIS_PROJECT_NAME_KEY = 'polaris_project_name';
exports.POLARIS_ASSESSMENT_TYPES_KEY = 'polaris_assessment_types';
/**
 * @deprecated Use polaris_server_url instead. This can be removed in future release.
 */
exports.POLARIS_SERVERURL_KEY = 'polaris_serverUrl';
exports.POLARIS_SERVER_URL_KEY = 'polaris_server_url';
exports.POLARIS_TRIAGE_KEY = 'polaris_triage';
exports.POLARIS_PRCOMMENT_ENABLED_KEY = 'polaris_prComment_enabled';
exports.POLARIS_PRCOMMENT_SEVERITIES_KEY = 'polaris_prComment_severities';
exports.POLARIS_BRANCH_NAME_KEY = 'polaris_branch_name';
exports.POLARIS_BRANCH_PARENT_NAME_KEY = 'polaris_branch_parent_name';
// Blackduck
exports.BLACKDUCK_URL_KEY = 'blackduck_url';
exports.BLACKDUCK_API_TOKEN_KEY = 'blackduck_apiToken';
exports.BLACKDUCK_TOKEN_KEY = 'blackduck_token';
exports.BLACKDUCK_INSTALL_DIRECTORY_KEY = 'blackduck_install_directory';
exports.BLACKDUCK_SCAN_FULL_KEY = 'blackduck_scan_full';
exports.BLACKDUCK_SCAN_FAILURE_SEVERITIES_KEY = 'blackduck_scan_failure_severities';
exports.BLACKDUCK_AUTOMATION_FIXPR_KEY = 'blackduck_automation_fixpr';
exports.BLACKDUCK_FIXPR_ENABLED_KEY = 'blackduck_fixpr_enabled';
exports.BLACKDUCK_FIXPR_MAXCOUNT_KEY = 'blackduck_fixpr_maxCount';
exports.BLACKDUCK_FIXPR_CREATE_SINGLE_PR_KEY = 'blackduck_fixpr_createSinglePR';
exports.BLACKDUCK_FIXPR_FILTER_SEVERITIES_KEY = 'blackduck_fixpr_filter_severities';
exports.BLACKDUCK_FIXPR_USE_UPGRADE_GUIDANCE_KEY = 'blackduck_fixpr_useUpgradeGuidance';
