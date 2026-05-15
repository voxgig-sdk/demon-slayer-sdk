<?php
declare(strict_types=1);

// DemonSlayer SDK utility: result_body

class DemonSlayerResultBody
{
    public static function call(DemonSlayerContext $ctx): ?DemonSlayerResult
    {
        $response = $ctx->response;
        $result = $ctx->result;
        if ($result && $response && $response->json_func && $response->body) {
            $result->body = ($response->json_func)();
        }
        return $result;
    }
}
