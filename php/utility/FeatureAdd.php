<?php
declare(strict_types=1);

// DemonSlayer SDK utility: feature_add

class DemonSlayerFeatureAdd
{
    public static function call(DemonSlayerContext $ctx, mixed $f): void
    {
        $ctx->client->features[] = $f;
    }
}
