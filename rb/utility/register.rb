# DemonSlayer SDK utility registration
require_relative '../core/utility_type'
require_relative 'clean'
require_relative 'done'
require_relative 'make_error'
require_relative 'feature_add'
require_relative 'feature_hook'
require_relative 'feature_init'
require_relative 'fetcher'
require_relative 'make_fetch_def'
require_relative 'make_context'
require_relative 'make_options'
require_relative 'make_request'
require_relative 'make_response'
require_relative 'make_result'
require_relative 'make_point'
require_relative 'make_spec'
require_relative 'make_url'
require_relative 'param'
require_relative 'prepare_auth'
require_relative 'prepare_body'
require_relative 'prepare_headers'
require_relative 'prepare_method'
require_relative 'prepare_params'
require_relative 'prepare_path'
require_relative 'prepare_query'
require_relative 'graphql'
require_relative 'result_basic'
require_relative 'result_body'
require_relative 'result_headers'
require_relative 'transform_request'
require_relative 'transform_response'

DemonSlayerUtility.registrar = ->(u) {
  u.clean = DemonSlayerUtilities::Clean
  u.done = DemonSlayerUtilities::Done
  u.make_error = DemonSlayerUtilities::MakeError
  u.feature_add = DemonSlayerUtilities::FeatureAdd
  u.feature_hook = DemonSlayerUtilities::FeatureHook
  u.feature_init = DemonSlayerUtilities::FeatureInit
  u.fetcher = DemonSlayerUtilities::Fetcher
  u.make_fetch_def = DemonSlayerUtilities::MakeFetchDef
  u.make_context = DemonSlayerUtilities::MakeContext
  u.make_options = DemonSlayerUtilities::MakeOptions
  u.make_request = DemonSlayerUtilities::MakeRequest
  u.make_response = DemonSlayerUtilities::MakeResponse
  u.make_result = DemonSlayerUtilities::MakeResult
  u.make_point = DemonSlayerUtilities::MakePoint
  u.make_spec = DemonSlayerUtilities::MakeSpec
  u.make_url = DemonSlayerUtilities::MakeUrl
  u.param = DemonSlayerUtilities::Param
  u.prepare_auth = DemonSlayerUtilities::PrepareAuth
  u.prepare_body = DemonSlayerUtilities::PrepareBody
  u.prepare_headers = DemonSlayerUtilities::PrepareHeaders
  u.prepare_method = DemonSlayerUtilities::PrepareMethod
  u.prepare_params = DemonSlayerUtilities::PrepareParams
  u.prepare_path = DemonSlayerUtilities::PreparePath
  u.prepare_query = DemonSlayerUtilities::PrepareQuery
  u.graphql_body = DemonSlayerUtilities::GraphqlBody
  u.graphql_errors = DemonSlayerUtilities::GraphqlErrors
  u.result_basic = DemonSlayerUtilities::ResultBasic
  u.result_body = DemonSlayerUtilities::ResultBody
  u.result_headers = DemonSlayerUtilities::ResultHeaders
  u.transform_request = DemonSlayerUtilities::TransformRequest
  u.transform_response = DemonSlayerUtilities::TransformResponse
}
