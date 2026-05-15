<?php
declare(strict_types=1);

// DemonSlayer SDK utility: feature_hook

class DemonSlayerFeatureHook
{
    public static function call(DemonSlayerContext $ctx, string $name): void
    {
        if (!$ctx->client) {
            return;
        }
        $features = $ctx->client->features ?? null;
        if (!$features) {
            return;
        }
        foreach ($features as $f) {
            if (method_exists($f, $name)) {
                $f->$name($ctx);
            }
        }
    }
}
