<?php
declare(strict_types=1);

// DemonSlayer SDK utility: result_headers

class DemonSlayerResultHeaders
{
    public static function call(DemonSlayerContext $ctx): ?DemonSlayerResult
    {
        $response = $ctx->response;
        $result = $ctx->result;
        if ($result) {
            if ($response && is_array($response->headers)) {
                $result->headers = $response->headers;
            } else {
                $result->headers = [];
            }
        }
        return $result;
    }
}
