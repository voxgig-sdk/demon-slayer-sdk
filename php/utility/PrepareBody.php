<?php
declare(strict_types=1);

// DemonSlayer SDK utility: prepare_body

class DemonSlayerPrepareBody
{
    public static function call(DemonSlayerContext $ctx): mixed
    {
        if ($ctx->op->input === 'data') {
            return ($ctx->utility->transform_request)($ctx);
        }
        return null;
    }
}
