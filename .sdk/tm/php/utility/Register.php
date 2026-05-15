<?php
declare(strict_types=1);

// DemonSlayer SDK utility registration

require_once __DIR__ . '/../core/UtilityType.php';
require_once __DIR__ . '/Clean.php';
require_once __DIR__ . '/Done.php';
require_once __DIR__ . '/MakeError.php';
require_once __DIR__ . '/FeatureAdd.php';
require_once __DIR__ . '/FeatureHook.php';
require_once __DIR__ . '/FeatureInit.php';
require_once __DIR__ . '/Fetcher.php';
require_once __DIR__ . '/MakeFetchDef.php';
require_once __DIR__ . '/MakeContext.php';
require_once __DIR__ . '/MakeOptions.php';
require_once __DIR__ . '/MakeRequest.php';
require_once __DIR__ . '/MakeResponse.php';
require_once __DIR__ . '/MakeResult.php';
require_once __DIR__ . '/MakePoint.php';
require_once __DIR__ . '/MakeSpec.php';
require_once __DIR__ . '/MakeUrl.php';
require_once __DIR__ . '/Param.php';
require_once __DIR__ . '/PrepareAuth.php';
require_once __DIR__ . '/PrepareBody.php';
require_once __DIR__ . '/PrepareHeaders.php';
require_once __DIR__ . '/PrepareMethod.php';
require_once __DIR__ . '/PrepareParams.php';
require_once __DIR__ . '/PreparePath.php';
require_once __DIR__ . '/PrepareQuery.php';
require_once __DIR__ . '/ResultBasic.php';
require_once __DIR__ . '/ResultBody.php';
require_once __DIR__ . '/ResultHeaders.php';
require_once __DIR__ . '/TransformRequest.php';
require_once __DIR__ . '/TransformResponse.php';

DemonSlayerUtility::setRegistrar(function (DemonSlayerUtility $u): void {
    $u->clean = [DemonSlayerClean::class, 'call'];
    $u->done = [DemonSlayerDone::class, 'call'];
    $u->make_error = [DemonSlayerMakeError::class, 'call'];
    $u->feature_add = [DemonSlayerFeatureAdd::class, 'call'];
    $u->feature_hook = [DemonSlayerFeatureHook::class, 'call'];
    $u->feature_init = [DemonSlayerFeatureInit::class, 'call'];
    $u->fetcher = [DemonSlayerFetcher::class, 'call'];
    $u->make_fetch_def = [DemonSlayerMakeFetchDef::class, 'call'];
    $u->make_context = [DemonSlayerMakeContext::class, 'call'];
    $u->make_options = [DemonSlayerMakeOptions::class, 'call'];
    $u->make_request = [DemonSlayerMakeRequest::class, 'call'];
    $u->make_response = [DemonSlayerMakeResponse::class, 'call'];
    $u->make_result = [DemonSlayerMakeResult::class, 'call'];
    $u->make_point = [DemonSlayerMakePoint::class, 'call'];
    $u->make_spec = [DemonSlayerMakeSpec::class, 'call'];
    $u->make_url = [DemonSlayerMakeUrl::class, 'call'];
    $u->param = [DemonSlayerParam::class, 'call'];
    $u->prepare_auth = [DemonSlayerPrepareAuth::class, 'call'];
    $u->prepare_body = [DemonSlayerPrepareBody::class, 'call'];
    $u->prepare_headers = [DemonSlayerPrepareHeaders::class, 'call'];
    $u->prepare_method = [DemonSlayerPrepareMethod::class, 'call'];
    $u->prepare_params = [DemonSlayerPrepareParams::class, 'call'];
    $u->prepare_path = [DemonSlayerPreparePath::class, 'call'];
    $u->prepare_query = [DemonSlayerPrepareQuery::class, 'call'];
    $u->result_basic = [DemonSlayerResultBasic::class, 'call'];
    $u->result_body = [DemonSlayerResultBody::class, 'call'];
    $u->result_headers = [DemonSlayerResultHeaders::class, 'call'];
    $u->transform_request = [DemonSlayerTransformRequest::class, 'call'];
    $u->transform_response = [DemonSlayerTransformResponse::class, 'call'];
});
