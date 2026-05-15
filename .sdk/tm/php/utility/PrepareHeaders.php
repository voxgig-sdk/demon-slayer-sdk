<?php
declare(strict_types=1);

// DemonSlayer SDK utility: prepare_headers

class DemonSlayerPrepareHeaders
{
    public static function call(DemonSlayerContext $ctx): array
    {
        $options = $ctx->client->options_map();
        $headers = \Voxgig\Struct\Struct::getprop($options, 'headers');
        if (!$headers) {
            return [];
        }
        $out = \Voxgig\Struct\Struct::clone($headers);
        return is_array($out) ? $out : [];
    }
}
